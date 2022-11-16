import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

body {
    font-family: 'Inter', sans-serif;

    .ant-checkbox-inner {
        width: 15px;
        height: 15px;
        display: block;
        border-radius: 3px;
        position: relative;
        border: 2px solid #414141;
        transition: all .2s ease-in-out;
        background: #fff;
    }
    .ant-checkbox-checked {
        .ant-checkbox-inner {
            border: 2px solid transparent !important;
            background: #005473;
            ::after {
                margin-left: -0.5px;
            }
        }
    }
    .ant-checkbox-checked::after {
      border: 1px solid transparent;
    }

    .ant-tooltip-inner {
        opacity: 0.7;
        border-radius: 5px;
        font-size: 12px;
        padding: 2px 10px;
        min-height: 10px;
    }
    .ant-tooltip-arrow {
        display: none;
    }

    .ant-slider-rail {
        height: 10px;
        background: #FAFAFA;
        border-radius: 4px;
        border: 1px solid #D3D3D3;
        box-shadow: inset 0 1px 1px #F0F0F0,0 3px 6px -5px #BBB;
        :hover {
            background: #FAFAFA !important;
            .ant-slider-track {
                background: #63738e !important;
            }
        }
    }
    .ant-slider-track {
        background: #63738e !important;
        height: 10px;
        :hover {
            background: #63738e !important;
            .ant-slider-rail {
                background: #FAFAFA !important;
            }
        }
    }
    .ant-slider-step {
        height: 10px;
    }
    .ant-slider:hover .ant-slider-rail {
        background-color: #FAFAFA;
    }
    .ant-slider-handle {
        width: 20px;
        height: 20px;
        background: #E8E7E6;
        border: 1px solid #63738e;
        background: #FFF;
        box-shadow: inset 0 0 1px #FFF,inset 0 1px 7px #EBEBEB,0 3px 6px -3px #BBB;
    }
    .ant-slider-handle.ant-tooltip-open {
        border-color: #63738e;
    }
    .ant-slider-handle-dragging.ant-slider-handle-dragging.ant-slider-handle-dragging {
        border-color: #63738e;
        box-shadow: none;
    }
    .ant-slider-handle-click-focused {
        box-shadow: none !important;
    }
    .ant-switch {
        background: #bfc5d1;
    }
    .ant-switch-handle::before {
        background: #63738e !important;
    }
    .ant-switch-checked:focus {
        box-shadow: none;
        border: none;
    }
    .ant-select-dropdown {
        padding: 0 !important;
        border-radius: 5px;
        top: 99px !important;
    }
    .ant-select-item {
        font-size: 12px !important;
        min-height: unset;
        padding: unset;
        line-height: unset;
        padding: 0 0 0 10px;
        display: flex;
        align-items: center;
        transition: none;
    }
    .ant-select-item-option-active:not(.ant-select-item-option-disabled) {
        background-color: #5495ff;
        color: #ffffff;
    }
    .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
        color: #ffffff;
        font-weight: unset;
        background-color: #5495ff;
    }
    .ant-menu-submenu-title:hover {
        .ant-menu-submenu-arrow {
            color: #414141 !important;
        }
    }
    .ant-drawer-header {
        display: none;
    }
    .ant-drawer-body {
        padding: 0;
    }
    .ant-drawer-content-wrapper {
        width: 230px !important;
        .ant-menu {
            height: auto;
            color: #414141;
        }
        .ant-menu-submenu-title {
            margin: 0 !important;
            border-top: 1px solid #f8f8f8;
            :hover {
                background: #f8f8f8;
                border-left: 6px solid #005473;
            }
        }
        .ant-menu-submenu-open {
            .ant-menu-submenu-title {
            border-left: 6px solid #005473;
            background: #f8f8f8;
            }
        }
        .activeClass {
            border-left: 6px solid #005473;
            background: #f8f8f8;
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
        .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
            background: unset;
        }
        .ant-menu-inline .ant-menu-submenu-title {
            line-height: 36px;
        }
    }
}

`
