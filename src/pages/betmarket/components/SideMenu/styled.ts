import styled from 'styled-components'

export const Container = styled.div`
  width: 280px;
  height: 100vh;
  background: #f7f9fc;
  @media only screen and (max-width: 1000px) {
    display: none;
    transition: all 0.3s ease;
  }

  .ant-menu {
    height: auto;
    color: #414141;

    .ant-menu-submenu-title {
      margin: 0 !important;
      border-top: 1px solid #f8f8f8;
      :hover {
        background: #f8f8f8;
        border-left: 6px solid #005473;
      }
    }
    .activeClass {
      border-left: 6px solid #005473;
      background: #f8f8f8;
    }
  }
  .ant-menu-root {
    box-shadow: 0 3px 6px rgba(46, 81, 164, 0.16);
  }
  .ant-menu-item,
  .ant-menu-submenu {
    color: #414141;
    font-weight: bold;
    :first-child {
      margin: 0;
      margin-bottom: 8px;
    }
    :nth-child(2) {
      margin-top: -8px;
    }

    :hover {
      color: #414141;
    }
    .ant-menu-title-content {
      color: #414141;
    }
  }
  .ant-menu-inline .ant-menu-item-selected::after {
    display: none;
  }

  .ant-menu-submenu-open {
    .ant-menu-submenu-title {
      border-left: 6px solid #005473;
      background: #f8f8f8;
    }
  }
  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background: unset;
  }
`

export const MenuItem = styled.div`
  color: #414141;
  cursor: pointer;
  font-size: 16px;
  background: #fff;
  transition: all 0.1s ease-in;
  border-left: 0 solid #005473;
  && .subMenuIsActive {
    display: flex;
    flex-direction: column;
    padding: 0 0px 5px 40px;
    font-weight: bold;
    span {
      font-size: 12px;
    }
    label {
      margin-left: 0;
      padding: 1px;
    }
  }
`

export const MenuItemInner = styled.div`
  position: relative;
  display: flex;
  gap: 12px;
  font-weight: bold;
  align-items: center;
  transition: all 0.1s ease-in;
  z-index: 1;
  padding: 10px;
`

export const SubMenu = styled.div`
  width: 100%;
  height: auto;
  display: none;
  padding: 0 0 0.5rem;
  border-bottom: 1px solid #e3e3e3;
`
