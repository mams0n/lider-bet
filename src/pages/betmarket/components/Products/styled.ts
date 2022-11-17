import { Slider } from "antd";
import styled from "styled-components";

export const ProductsContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: auto;
`;

export const ProductsInner = styled.div``;

export const RangeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

export const Offers = styled.div`
  display: flex;
  flex-direction: row;
  margin: 56px 0 0 32px;
  h3 {
    display: flex;
    color: #4d5f8d;
    font-weight: bold;
    position: relative;
    align-items: center;
    font-size: 18px;
    ::before {
      top: 15%;
      left: -1rem;
      content: "";
      width: 5px;
      height: 19px;
      display: block;
      position: absolute;
      margin-right: 1rem;
      border-radius: 5px;
      background-color: #34c5a7;
    }
  }
`;

export const PriceRange = styled.div`
  width: 500px;
  margin-top: 48px;
  margin-right: 30px;
  .ant-tooltip {
    z-index: 0;
    margin-top: 8px;
  }
  .ant-tooltip-inner {
    border: 1px solid #d9d9d9;
    border-radius: 3px;
    background: #fff;
    color: #000;
    padding: 5px;
    box-shadow: none;
    font-weight: bold;
    opacity: 1;
    ::before {
      width: 0;
    }
  }
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  @media only screen and (max-width: 1000px) {
    margin-top: 35px;
  }
`;

export const CSlider = styled(Slider)``;
