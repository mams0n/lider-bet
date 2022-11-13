import React from "react";
import { data } from "../../database/data";
import { MarketItem } from "../../database/types";

type FilterByTagType = number[];
type FilterByCurrencyType = "GEL" | "LBP";
type FilterBySearchType = string;
type SortBy = "AZ" | "ZA" | "PRICE_UP" | "PRICE_DOWN";
type FilterByRangeType = [number, number];
type FilterBySideTags = number[];

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
  filterByRange: FilterByRangeType;
  setFilterByRange: SetState<FilterByRangeType>;
  filterBySideTags: FilterBySideTags;
  setFilterBySideTags: SetState<FilterBySideTags>;
};

export const BetmarketContext = React.createContext<BetmarketContextType>(
  {} as BetmarketContextType
);

export const useBetmarketContext = () => React.useContext(BetmarketContext);

const offers = data[0];
const marketItem = Object.values<MarketItem>(offers.marketItem);

const BetmarketProvider: React.FC = (props) => {
  const [items, setItems] = React.useState<MarketItem[]>([]);
  const [filterByTag, setFilterByTag] = React.useState<FilterByTagType>([]);
  const [filterByCurrency, setFilterByCurrency] =
    React.useState<FilterByCurrencyType>("GEL");
  const [filterBySearch, setFilterBySearch] =
    React.useState<FilterBySearchType>("");
  const [sortBy, setSortBy] = React.useState<SortBy>("PRICE_DOWN");
  const [filterByRange, setFilterByRange] = React.useState<FilterByRangeType>([
    0, 0,
  ]);
  const [filterBySideTags, setFilterBySideTags] =
    React.useState<FilterBySideTags>([]);

  /**
   * @description data manipulations | filtering
   */
  React.useEffect(() => {
    let filtredItems = marketItem;

    /** === @filterbar === */
    if (filterByTag.length) {
      filtredItems = filtredItems.filter(
        (item) => !!item.tags.find((tag) => filterByTag.includes(tag))
      );
    }

    // currency
    if (filterByCurrency.length) {
      filtredItems = filtredItems.filter(
        (item) => item.currencyId === filterByCurrency
      );
    }

    // search
    if (filterBySearch.length) {
      filtredItems = filtredItems.filter(
        (item) => item.name.toLowerCase().search(filterBySearch) > -1
      );
    }

    // sorting
    if (sortBy === "AZ" || sortBy === "ZA") {
      filtredItems = filtredItems.sort((a, b) =>
        a.name.localeCompare(b.name, "en", { sensitivity: "base" })
      );
      if (sortBy === "ZA") filtredItems = filtredItems.reverse();
    }

    if (sortBy === "PRICE_DOWN" || sortBy === "PRICE_UP") {
      filtredItems = filtredItems.sort((a, b) => a.price - b.price);
      if (sortBy === "PRICE_DOWN") filtredItems = filtredItems.reverse();
    }

    // filter by range
    if (filterByRange) {
      const min = filterByRange[0];
      const max = filterByRange[1];

      filtredItems = filtredItems.filter((item) => {
        const price = item.discountPrice || item.price;
        return price >= min && price <= max;
      });
    }

    // filter by side tags
    if (filterBySideTags.length) {
      filtredItems = filtredItems.filter(
        (item) => !!item.tags.find((tag) => filterBySideTags.includes(tag))
      );
    }

    setItems(filtredItems);
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
        setFilterByCurrency,
        filterBySearch,
        setFilterBySearch,
        sortBy,
        setSortBy,
        filterByRange,
        setFilterByRange,
        filterBySideTags,
        setFilterBySideTags,
      }}
    >
      {props.children}
    </BetmarketContext.Provider>
  );
};

export default BetmarketProvider;
