import { data } from "database/data";
import { MarketItem } from "database/types";
import { useBetmarketContext } from "pages/betmarket/betmarket.provider";
import React from "react";
import ProductItem from "../ProductItem";
import * as S from "./styled";

export type ProductsProps = {};

const offers = data[0];
const { discounts } = offers;
const { products } = offers;
const marketItem = Object.values<MarketItem>(offers.marketItem);

const Products: React.FC = () => {
  const { items, filterByCurrency, filterByRange, setFilterByRange } =
    useBetmarketContext();

  const prices = React.useMemo(
    () =>
      marketItem
        .filter((i) => i.currencyId === filterByCurrency)
        .map((item) => item.discountPrice || item.price),
    [filterByCurrency]
  );

  const maxPrice = Math.max(...prices);
  const minPrice = Math.min(...prices);
  React.useEffect(() => {
    setFilterByRange([minPrice, maxPrice]);
  }, [prices]);

  return (
    <S.ProductsInner>
      <S.RangeContainer>
        <S.Offers>
          <h3>შეთავაზებები</h3>
        </S.Offers>
        <S.PriceRange>
          <S.CSlider
            range
            tooltipVisible
            value={filterByRange}
            min={minPrice}
            max={maxPrice}
            onChange={(value) => setFilterByRange(value)}
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
