import styled from "styled-components";
import { Input } from "antd";

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
  @media only screen and (max-width: 1366px) {
    padding: 0;
  }

  svg {
    cursor: pointer;
  }
`;

export const TogglerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 50px;
  p {
    margin: 0;
  }
`;

export const FilterItemsConteiner = styled.div`
  font-family: unset !important;
  label {
    @media only screen and (max-width: 1366px) {
      font-size: 13px;
    }
  }
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

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

  &:focus {
    outline: none;
  }
  @media only screen and (max-width: 1000px) {
    flex: 1;
    margin: 0;
    justify-content: flex-end;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

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
    padding: 16px;
    flex-wrap: wrap;
    position: sticky;
    border-radius: 3px;
    flex-direction: row;
    align-items: center;
    background-color: #e3e8f1;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  span {
    margin-top: 2px;
  }
`;

export const MobileSearchContainer = styled.div`
  display: flex;
  flex: 1;
  margin: 0;
  justify-content: flex-end;
`;
