import styled from 'styled-components'

export const ProductItemContainer = styled.div`
  margin: 0.7%;
  min-width: 270px;
  width: 23.6%;
  height: 200px;
  color: #ffffff;
  position: relative;
  border-radius: 3px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  border: 5px solid #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1),
    box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  background: url('https://staticdata.lider-bet.com/images/market/10500.png');

  :hover {
    .title {
      opacity: 1;
      position: absolute;
      bottom: 155px;
      /* transition: all 0.3s ease; */
      font-size: 15px;
    }
    .prize {
      opacity: 0;
      transition: all 0.1s ease;
    }
    .price {
      bottom: 60px;
      transition: all 0.3 ease;
    }
    .buttonsContainer {
      opacity: 1;
      transition: opacity 0.3s cubic-bezier(0, -0.04, 0.36, -0.73);
      height: 40px;
      position: relative;
      top: calc(100% - 40px);
    }
    .description {
      opacity: 1;
      color: #ccc;
      font-size: 14px;
      font-weight: 200;
      position: absolute;
      bottom: 125px;
      align-items: flex-start;
    }
    .discount {
      filter: brightness(35%);
    }
    .discountAlert {
      opacity: 1;
      transition: all 0.1s cubic-bezier(0, -0.04, 0.36, -0.73);
    }
  }
`

export const ProductItemInner = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 11px;
  overflow: hidden;
  border-radius: 3px;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  transition: all 0.3s ease;
  background: rgba(0, 0, 0, 0.2);

  :hover {
    background: rgba(0, 0, 0, 0.7);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
`

export const Prize = styled.div`
  z-index: 2;
  height: 25px;
  display: flex;
  font-size: 17px;
  font-weight: bold;
  position: absolute;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  transition: all 0.1s ease;
`

export const Title = styled.div`
  opacity: 1;
  position: absolute;
  margin-top: 120px;
  color: #ffffff;
  display: block;
  font-size: 14px;
  font-weight: bold;
  position: absolute;
  /* transition: all 0.3s ease; */
`

export const Price = styled.div`
  left: 0;
  bottom: 11px;
  color: #ffffff;
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 14px;
  position: absolute;
  transition: all 0.3s ease;
  padding-left: 11px;

  span:first-child {
    font-size: 16px;
    color: #ffee3f;
  }
  span:nth-child(2) {
    color: #ccc;
    font-size: 14px;
    text-decoration: line-through;
  }
  div {
    opacity: 0;
    color: #ffffff;
    padding: 0 4px;
    font-size: 11px;
    border-radius: 3px;
    background: #c83800;
  }
`

export const ButtonsContainer = styled.div`
  opacity: 0;
  height: 0;
  width: 100%;
  display: flex;
  gap: 10px;
  padding: 0;
  bottom: 0px;
  top: 100%;
  position: relative;
  justify-content: space-between;
  overflow: hidden;
  text-transform: uppercase;
  transition: all 0.3s ease;

  div:first-child {
    background: #019741;
    :hover {
      background: #03b54f;
    }
  }
  div:nth-child(2) {
    background: #0076b4;
    font-size: 15px;
    word-wrap: break-word;
    line-height: 17px;
    :hover {
      background: #0096e6;
    }
  }
`

export const Button = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  color: #ffffff;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: opacity 0.1s ease-out;
`

export const Discount = styled.div`
  top: 0;
  right: 0;
  width: 95px;
  height: 55px;
  padding: 3px;
  display: flex;
  color: #ffffff;
  flex-wrap: wrap;
  font-size: 11px;
  align-items: center;
  position: absolute;
  justify-content: center;
  background: #c83800;
  transition: all 0.1s ease;
`

export const Date = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`

export const Percent = styled.div`
  font-weight: bold;
  font-size: 20px;
`

export const Description = styled.div`
  opacity: 0;
  position: absolute;
  bottom: 125px;
  display: flex;
  flex-direction: row;
  transition: all 0.1s ease;
  justify-content: flex-start;
`
