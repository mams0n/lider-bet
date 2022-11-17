import React, { useState } from "react";
import { data } from "../../database/data";
import { MarketItem } from "../../database/types";

type FilterByTagType = number[];
type FilterByCurrencyType = "GEL" | "LBP";
type FilterBySearchType = string;
type SortBy = "AZ" | "ZA" | "PRICE_UP" | "PRICE_DOWN";
type FilterByRangeType = [number, number] | undefined;
type FilterBySideTags = number[];
type MenuIsOpen = boolean;

type SetState<S> = React.Dispatch<React.SetStateAction<S>>;

export type BetmarketContextType = {
  items: MarketItem[];
  filterByTag: FilterByTagType;
  setFilterByTag: SetState<FilterByTagType>;
  filterByCurrency: FilterByCurrencyType;
  setFilterByCurrency: SetState<FilterByCurrencyType>;
  filterBySearch: FilterBySearchType;
  setFilterBySearch: SetState<FilterBySearchType>;
  sortBy: SortBy;
  setSortBy: SetState<SortBy>;
  filterByRange?: FilterByRangeType;
  setFilterByRange: SetState<FilterByRangeType>;
  filterBySideTags: FilterBySideTags;
  setFilterBySideTags: SetState<FilterBySideTags>;
  menuIsOpen: MenuIsOpen;
  prices?: [number, number];
  setMenuIsOpen: SetState<MenuIsOpen>
};

export const BetmarketContext = React.createContext<BetmarketContextType>(
  {} as BetmarketContextType
);

export const useBetmarketContext = () => React.useContext(BetmarketContext);

const offers = data[0];
const marketItem = Object.values<MarketItem>(offers.marketItem);

const BetmarketProvider: React.FC = (props) => {
  const [prices, setPrices] = useState<[number, number]>()
  const [items, setItems] = React.useState<MarketItem[]>(marketItem);
  const [filterByTag, setFilterByTag] = React.useState<FilterByTagType>([]);
  const [filterByCurrency, setFilterByCurrency] =
    React.useState<FilterByCurrencyType>("GEL");
  const [filterBySearch, setFilterBySearch] =
    React.useState<FilterBySearchType>("");
  const [sortBy, setSortBy] = React.useState<SortBy>("PRICE_DOWN");
  const [filterByRange, setFilterByRange] = React.useState<FilterByRangeType>();
  const [filterBySideTags, setFilterBySideTags] =
    React.useState<FilterBySideTags>([]);
  const [menuIsOpen, setMenuIsOpen] =
    React.useState<MenuIsOpen>(false);

  /**
   * @description data manipulations | filtering
   */
  React.useEffect(() => {
    let filteredItems = marketItem;

    /** === @filterbar === */
    if (filterByTag.length) {
      filteredItems = filteredItems.filter(
        (item) => !!item.tags.find((tag) => filterByTag.includes(tag))
      );
    }

    // currency
    if (filterByCurrency.length) {
      filteredItems = filteredItems.filter(
        (item) => item.currencyId === filterByCurrency
      );
    }

    // search
    if (filterBySearch.length) {
      filteredItems = filteredItems.filter(
        (item) => item.name.toLowerCase().search(filterBySearch) > -1
      );
    }

    // sorting
    if (sortBy === "AZ" || sortBy === "ZA") {
      filteredItems = filteredItems.sort((a, b) =>
        a.name.localeCompare(b.name, "en", { sensitivity: "base" })
      );
      if (sortBy === "ZA") filteredItems = filteredItems.reverse();
    }

    if (sortBy === "PRICE_DOWN" || sortBy === "PRICE_UP") {
      filteredItems = filteredItems.sort((a, b) => a.price - b.price);
      if (sortBy === "PRICE_DOWN") filteredItems = filteredItems.reverse();
    }

    // filter by side tags
    if (filterBySideTags.length) {
      filteredItems = filteredItems.filter(
        (item) => !!item.tags.find((tag) => filterBySideTags.includes(tag))
      );
    }

    // prices
    const purePrices = filteredItems
      .map((item) => item.discountPrice || item.price).sort((a, b) => a - b)
    const minPrice = purePrices[0];
    const maxPrice = purePrices[purePrices.length - 1]
    setPrices([minPrice, maxPrice])

    // filter by range
    if (filterByRange) {
      const min = filterByRange[0];
      const max = filterByRange[1];

      filteredItems = filteredItems.filter((item) => {
        const price = item.discountPrice || item.price;
        return price >= min && price <= max;
      });
    }

    setItems(filteredItems);
  }, [
    filterByTag,
    filterByCurrency,
    filterBySearch,
    sortBy,
    filterByRange,
    filterBySideTags,
  ]);

  return (
    <BetmarketContext.Provider
      value={{
        items,
        filterByTag,
        setFilterByTag,
        filterByCurrency,
        prices,
        setFilterByCurrency,
        filterBySearch,
        setFilterBySearch,
        sortBy,
        setSortBy,
        filterByRange,
        setFilterByRange,
        filterBySideTags,
        setFilterBySideTags,
        menuIsOpen,
        setMenuIsOpen
      }}
    >
      {props.children}
    </BetmarketContext.Provider>
  );
};

export default BetmarketProvider;
