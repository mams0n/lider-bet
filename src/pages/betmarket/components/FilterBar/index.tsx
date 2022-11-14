import CIcon from "../../../../components/Icon/Icon";
import { data } from "../../../../database/data";
import { Checkbox, Switch, Tooltip, Select } from "antd";
import React from "react";
import Sorter from "../Sorter";
import * as S from "./styled";
import { useBetmarketContext } from "pages/betmarket/betmarket.provider";
import { useDebounce } from "hooks/useDebounce";
export type FilterBarProps = {};

const { currencies, tags, filterBarTags } = data[0];

const FilterBar: React.FC = () => {
  const {
    filterByTag,
    setFilterByTag,
    filterByCurrency,
    setFilterByCurrency,
    setFilterBySearch,
    menuIsOpen,
    setMenuIsOpen
  } = useBetmarketContext();
  const { GEL, LBP } = currencies;

  const [search, setSearch] = React.useState<string>("");

  const filterItems = filterBarTags.map((filterTag) => ({
    id: filterTag.id,
    name: tags?.[filterTag.id]?.name,
  }));

  const debouncedSearchValue = useDebounce<string>(search, 100);

  React.useEffect(() => {
    setFilterBySearch(debouncedSearchValue.toLowerCase());
  }, [debouncedSearchValue]);

  const options = [
    {
      value: 'ყველა',
      label: 'ყველა',
    },
    {
      value: 'top',
      label: 'TOP',
    },
    {
      value: 'bonus',
      label: 'BONUS',
    },
    {
      value: 'freespin',
      label: 'FREESPIN',
    },
  ]

  return (
    <S.FilterBarContainer>
      <S.FilterItemsConteiner>
        {filterItems.map((item) => {
          return (
            <Checkbox
              checked={filterByTag?.includes(item.id)}
              onChange={(e) =>
                setFilterByTag((t) =>
                  e.target.checked
                    ? [...t, item.id]
                    : t.filter((t) => t !== item.id)
                )
              }
            >
              {item.name}
            </Checkbox>
          );
        })}
      </S.FilterItemsConteiner>
      <S.MobileNavFirstSegment>
        <S.MenuContainer>
          <CIcon filename="menu" onClick={() => setMenuIsOpen(!menuIsOpen)} />
          <span>მენიუ</span>
        </S.MenuContainer>
        <S.MobileSearchContainer>
          <S.CInput
            placeholder="ძებნა"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </S.MobileSearchContainer>
      </S.MobileNavFirstSegment>
      <S.MobileNavSecondSegment>
        <S.TogglerMobileContainer>
          <p>{LBP.name}</p>
          <Switch
            checked={filterByCurrency === "GEL"}
            onChange={(e) => setFilterByCurrency(e ? "GEL" : "LBP")}
          />
          <p>{GEL.name}</p>
        </S.TogglerMobileContainer>
        <S.MobileSorterContainer>
          <S.SelectContainer>
            <Select
              defaultValue='ყველა'
              options={options}
            // onChange={{}}
            />
          </S.SelectContainer>
          <Sorter />
          <Tooltip placement="left" title="ბეთმარკეტის წესები">
            <CIcon filename="rules" />
          </Tooltip>
        </S.MobileSorterContainer>
      </S.MobileNavSecondSegment>
      <S.TogglerContainer>
        <p>{LBP.name}</p>
        <Switch
          checked={filterByCurrency === "GEL"}
          onChange={(e) => setFilterByCurrency(e ? "GEL" : "LBP")}
        />
        <p>{GEL.name}</p>
      </S.TogglerContainer>
      <S.SearchContainer>
        <S.CInput
          placeholder="ძებნა"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Sorter />
        <Tooltip placement="left" title="ბეთმარკეტის წესები">
          <CIcon filename="rules" />
        </Tooltip>
      </S.SearchContainer>

    </S.FilterBarContainer>
  );
};

export default FilterBar;
