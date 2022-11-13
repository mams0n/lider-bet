import { useState } from "react";
import { Checkbox } from "antd";
import { Tooltip } from "antd";
import CIcon from "components/Icon/Icon";
import * as S from "./styled";
import { useBetmarketContext } from "pages/betmarket/betmarket.provider";

const Sorter = () => {
  const { sortBy, setSortBy } = useBetmarketContext();

  const [sorterOpened, setSorterOpened] = useState(false);

  return (
    <S.SorterContainer>
      <Tooltip placement="left" title="ფილტრი">
        <CIcon
          onClick={() => setSorterOpened(!sorterOpened)}
          filename="sorter"
        />
      </Tooltip>
      <S.SorterBox className={sorterOpened ? "sorterIsOpened" : ""}>
        <S.SorterItem onClick={() => setSortBy("AZ")}>
          <Checkbox checked={sortBy === "AZ"}>A - Z ანბანით</Checkbox>
        </S.SorterItem>
        <S.SorterItem onClick={() => setSortBy("ZA")}>
          <Checkbox checked={sortBy === "ZA"}>Z - A ანბანით</Checkbox>
        </S.SorterItem>
        <S.SorterItem onClick={() => setSortBy("PRICE_UP")}>
          <Checkbox checked={sortBy === "PRICE_UP"}>ფასის ზრდადობით</Checkbox>
        </S.SorterItem>
        <S.SorterItem onClick={() => setSortBy("PRICE_DOWN")}>
          <Checkbox checked={sortBy === "PRICE_DOWN"}>
            ფასის კლებადობით
          </Checkbox>
        </S.SorterItem>
      </S.SorterBox>
    </S.SorterContainer>
  );
};

export default Sorter;
