import styled from 'styled-components'

export const SorterContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
  @media only screen and (max-width: 1000px) {
    margin-top: -5px;
  }

  .sorterIsOpened {
    background: red;
    display: flex;
    flex-direction: row;
    right: 0;
    top: 125%;
    opacity: 1;
    width: 208px;
    display: block;
    position: absolute;
    border-radius: 3px;
    transform: scale(1);
    background-color: #ffffff;
    transition: all 0.2s ease;
    transform-origin: top right;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
`

export const SorterBox = styled.div`
  display: flex;
  flex-direction: row;
  right: 0;
  top: 125%;
  opacity: 0;
  width: 208px;
  display: block;
  position: absolute;
  border-radius: 3px;
  transform: scale(0);
  background-color: #ffffff;
  transition: all 0.1s ease;
  transform-origin: top right;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`

export const SorterItem = styled.div`
  padding: 10px;
  display: flex;
  color: #414141;
  font-size: 14px;
  font-weight: bold;
  border-radius: 3px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid #dddddd;
  :hover {
    background: #e5e5e5;
  }
`
