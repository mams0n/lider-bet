import React from "react";
import BetmarketProvider from "./betmarket.provider";
import FilterBar from "./components/FilterBar";
import Products from "./components/Products";
import SideMenu from "./components/SideMenu";
import * as S from "./styled";

export type BetmarketProps = {};

const Betmarket: React.FC = (props) => {
  return (
    <BetmarketProvider>
      <S.Wrapper>
        <SideMenu />
        <S.ProductsContainer>
          <FilterBar />
          <Products />
        </S.ProductsContainer>
      </S.Wrapper>
    </BetmarketProvider>
  );
};

export default Betmarket;
