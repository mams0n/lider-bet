import { data } from "database/data";
import { useBetmarketContext } from "pages/betmarket/betmarket.provider";
import React, { useEffect } from "react";
import ProductItem from "../ProductItem";
import * as S from "./styled";

export type ProductsProps = {};

const offers = data[0];
const { discounts } = offers;
const { products } = offers;

const Products: React.FC = () => {
  const { items, filterByCurrency, prices, filterByRange, setFilterByRange, filterByTag } =
    useBetmarketContext();

  useEffect(() => () => setFilterByRange(undefined), [filterByTag, filterByCurrency, setFilterByRange])

  return (
    <S.ProductsInner>
      <S.RangeContainer>
        <S.Offers>
          <h3>შეთავაზებები</h3>
        </S.Offers>
        <S.PriceRange>
          <S.CSlider
            step={0.1}
            range
            tooltipVisible
            value={filterByRange || [prices?.[0] || 0, prices?.[1] || 0]}
            min={prices?.[0]}
            max={prices?.[1]}
            onChange={(value) => setFilterByRange(value)}
            getTooltipPopupContainer={(tooltipContainer) => tooltipContainer.parentNode as HTMLElement}
          />
        </S.PriceRange>
      </S.RangeContainer>
      <S.ItemsContainer>
        {items?.map((item, index) => {
          return (
            <ProductItem
              key={index}
              item={item}
              discount={item?.discountId && discounts?.[item.discountId]}
              description={products?.[item.productId]}
            />
          );
        })}
      </S.ItemsContainer>
    </S.ProductsInner>
  );
};

export default Products;
