import React from "react";
import CIcon from "../../../../components/Icon/Icon";
import { MarketItem, Discounts, Description } from "../../../../database/types";
import moment from 'moment'
import * as S from "./styled";

type ProductItemProps = {
  item: MarketItem;
  discount?: Discounts;
  description?: Description;
};

const ProductItem: React.FC<ProductItemProps> = (props) => {
  const { item, discount, description } = props;
  return (
    <S.ProductItemContainer>
      <S.ProductItemInner>
        <S.Prize className="prize">
          {item.prizeAmount} {item.prizeType}
        </S.Prize>
        {discount && (
          <S.Discount className="discount">
            <S.Date>
              <CIcon filename="clock" />
              {moment(discount?.end_date).format('MMM-DD HH:mm')}
            </S.Date>
            <S.Percent>-{discount?.percent}%</S.Percent>
          </S.Discount>
        )}
        <S.Description className="description">
          {description?.descr}
        </S.Description>
        <S.Title className="title">{item.name}</S.Title>
        <S.Price className="price">
          <span>
            {item.discountPrice || item.price} {item.currencyId}
          </span>
          <span>
            {item.discountPrice && item.price}{" "}
            {item.discountPrice && item.currencyId}
          </span>
          <div className="discountAlert">
            {item.discountPrice && `-${discount?.percent}%`}
          </div>
        </S.Price>
        <S.ButtonsContainer className="buttonsContainer">
          <S.Button>შეძენა</S.Button>
          <S.Button>აჩუქე მეგობარს</S.Button>
        </S.ButtonsContainer>
      </S.ProductItemInner>
    </S.ProductItemContainer>
  );
};

export default ProductItem;
