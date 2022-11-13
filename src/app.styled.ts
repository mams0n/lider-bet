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

    .MuiSlider-rail {
        height: 10px;
        background: #FAFAFA;
        border-radius: 4px;
        border: 1px solid #D3D3D3;
        box-shadow: inset 0 1px 1px #F0F0F0,0 3px 6px -5px #BBB;
    }
    .MuiSlider-track {
        background: #63738e;
        height: 10px;
    }
    .MuiSlider-thumb {
        width: 20px;
        height: 20px;
        background: #E8E7E6;
        border: 1px solid #63738e;
        background: #FFF;
        cursor: default;
        box-shadow: inset 0 0 1px #FFF,inset 0 1px 7px #EBEBEB,0 3px 6px -3px #BBB;
    }
    .MuiSlider-valueLabel {
        border: 1px solid #D9D9D9;
        border-radius: 3px;
        background: #fff;
        color: #000;
        padding: 5px;
        ::before {
            width: 0;
        }
    }
    .css-eg0mwd-MuiSlider-thumb:hover, .css-eg0mwd-MuiSlider-thumb.Mui-focusVisible {
        box-shadow: none;
    }
    .Mui-active {
        box-shadow: none;
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
}

`
