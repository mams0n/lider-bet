import styled from 'styled-components'
import { Input } from 'antd'

export const FilterBarContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 11;
  width: 100%;
  height: 67px;
  color: #000000;
  padding: 16px 32px;
  flex-wrap: wrap;
  border-radius: 3px;
  align-items: center;
  background: #e3e8f1;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;

  @media only screen and (max-width: 1366px) {
    font-size: 13px;
  }
  @media only screen and (max-width: 1000px) {
    padding: 0;
    gap: 0;
  }

  svg {
    cursor: pointer;
  }
`

export const TogglerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 50px;
  p {
    margin: 0;
  }
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`

export const FilterItemsConteiner = styled.div`
  font-family: unset !important;
  .ant-checkbox-wrapper:hover {
    .ant-checkbox-inner {
      border: 2px solid #414141;
    }
  }
  label {
    @media only screen and (max-width: 1366px) {
      font-size: 13px;
    }
  }
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`

export const CInput = styled(Input)`
  width: 100%;
  border: none;
  outline: none;
  color: #757b8d;
  display: block;
  padding: 8px;
  max-width: 300px;
  height: 35px;
  box-shadow: none;
  font-size: 16px;
  border-radius: 100px;
  background: #ffffff;
  ::placeholder {
    color: #757b8d;
  }

  @media only screen and (max-width: 1000px) {
    flex: 1;
    margin: 0;
    justify-content: flex-end;
    width: 100%;
    max-width: 34px;
    height: 34px;
    background: #ffffff url(../../../svg/search.png) no-repeat center !important;
    background-size: auto 75% !important;
    transition: all 0.1s linear;
    ::placeholder {
      color: transparent;
    }
    &:focus {
      outline: none;
      max-width: 314px !important;
      background: #fff !important;
    }
  }
`

export const SearchContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
  .ant-input:focus {
    box-shadow: none !important;
  }
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`

export const MobileNavFirstSegment = styled.div`
  display: none;
  @media only screen and (max-width: 1000px) {
    border-radius: 0;
    padding: 8px 16px;
    display: flex !important;
    top: 0;
    z-index: 10;
    width: 100%;
    display: flex;
    color: #000000;
    flex-wrap: wrap;
    position: sticky;
    border-radius: 3px;
    flex-direction: row;
    align-items: center;
    background-color: #e3e8f1;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
  .ant-input:focus {
    box-shadow: none !important;
  }
`
export const MobileNavSecondSegment = styled.div`
  display: none;
  @media only screen and (max-width: 1000px) {
    border-radius: 0;
    padding: 6px 16px;
    display: flex !important;
    top: 0;
    z-index: 10;
    width: 100%;
    display: flex;
    color: #000000;
    flex-wrap: wrap;
    position: sticky;
    border-radius: 3px;
    flex-direction: row;
    align-items: center;
    background-color: #e3e8f1;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
`

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  span {
    margin-top: 2px;
  }
`

export const MobileSearchContainer = styled.div`
  display: flex;
  flex: 1;
  margin: 0;
  justify-content: flex-end;
`

export const TogglerMobileContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  gap: 8px;
  margin-left: 50px;
  justify-content: flex-start;
  p {
    margin: 0;
  }
  @media only screen and (max-width: 1000px) {
    margin: 0;
  }
`

export const SelectContainer = styled.div`
  display: none;
  .ant-select {
    width: 100%;
    color: #000000;
    font-size: 13px;
    overflow: hidden;
    font-weight: bold;
    position: relative;
    margin: 0 16px 0 0;
    background: #ffffff;
    border-radius: 4px;
  }
  .ant-select-selector {
    border: none !important;
    color: #000000 !important;
    display: flex;
    align-items: center;
    font-size: 12px;
  }
  .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input)
    .ant-select-selector {
    border: none;
    border-right-width: none !important;
    box-shadow: none !important;
    color: #000000 !important;
  }
  .ant-select-single.ant-select-open .ant-select-selection-item {
    color: #000000 !important;
  }
  .ant-select-arrow {
    color: black;
  }
  .ant-select-item-option {
    padding: 0;
  }
  @media only screen and (max-width: 1000px) {
    display: flex;
    width: 110px;
  }
`

export const MobileSorterContainer = styled.div`
  display: none;
  @media only screen and (max-width: 1000px) {
    display: flex;
    gap: 20px;
    align-items: center;
  }
`

export const RulesContainer = styled.div`
  @media only screen and (max-width: 1000px) {
    margin-top: 2px;
  }
`
