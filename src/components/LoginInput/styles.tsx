import styled, {css} from 'styled-components'
import {IMargin, IPadding} from '../../types/components'

type IContainer = IMargin & IPadding

export const Container = styled.div<IContainer>`
  position: relative;
  width: 100%;
  ${({margin_top}) => margin_top && css`
    margin-top: ${margin_top}px !important;
  `}
  ${({margin_bottom}) => margin_bottom && css`
    margin-bottom: ${margin_bottom}px !important;
  `}
  ${({margin_left}) => margin_left && css`
    margin-left: ${margin_left}px !important;
  `}
  ${({margin_right}) => margin_right && css`
    margin-right: ${margin_right}px !important;
  `}
  &:focus-within {
    .placeholder {
      color: ${props => props.theme.components.loginInput.borderFocus};
    }
  }
`

interface ILoginInput extends IPadding {
  error: boolean
}

export const Input = styled.input<ILoginInput>`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '50px'};
  font-family: "Helvetica Neue", "Helvetica", "Arial";
  font-size: 18px;
  background-color: ${props => props.theme.components.loginInput.background};
  color: ${props => props.theme.components.loginInput.foreground};
  caret-color: ${props => props.theme.components.loginInput.foreground};
  border: 2px solid ${props => props.theme.components.loginInput.border};
  border-radius: 3px;
  outline: none;
  transition: color, border-color 200ms, opacity 250ms;
  padding-top: 2px;
  padding-left: 38px;
  padding-right: 10px;
  ${({padding_top}) => padding_top && css`
    padding-top: ${padding_top}px !important;
  `}
  ${({padding_bottom}) => padding_bottom && css`
    padding-bottom: ${padding_bottom}px !important;
  `}
  ${({padding_left}) => padding_left && css`
    padding-left: ${padding_left}px !important;
  `}
  ${({padding_right}) => padding_right && css`
    padding-right: ${padding_right}px !important;
  `}
  &:hover {
    border-color: ${props => props.theme.components.loginInput.borderHover};
  }
  &:focus {
    border-color: ${props => props.theme.components.loginInput.borderFocus};
  }
  &::placeholder {
    color: ${props => props.theme.components.loginInput.inputPlaceholder};
  }
  &:disabled {
    background-color: ${props => props.theme.components.loginInput.disabledBackground} !important;
    &:-webkit-autofill {
      box-shadow:0 0 0 50px ${props => props.theme.components.loginInput.disabledBackground} inset;
      -webkit-box-shadow:0 0 0 50px ${props => props.theme.components.loginInput.disabledBackground} inset;
    }
    &:-webkit-autofill:focus {
      box-shadow: 0 0 0 50px ${props => props.theme.components.loginInput.disabledBackground} inset;
      -webkit-box-shadow: 0 0 0 50px ${props => props.theme.components.loginInput.disabledBackground} inset;
    }
  }
  &:-webkit-autofill {
    box-shadow:0 0 0 50px ${props => props.theme.components.loginInput.background} inset;
    -webkit-box-shadow:0 0 0 50px ${props => props.theme.components.loginInput.background} inset;
    font-size: 18px !important;
    color: ${props => props.theme.components.loginInput.foreground} !important;
  }
  &:-webkit-autofill:focus {
    box-shadow: 0 0 0 50px ${props => props.theme.components.loginInput.background} inset;
    -webkit-box-shadow: 0 0 0 50px ${props => props.theme.components.loginInput.background} inset;
    font-size: 18px !important;
    color: ${props => props.theme.components.loginInput.foreground} !important;
  }
  &:-webkit-autofill::first-line {
    font-family: Arial !important;
    font-size: 18px !important;
    color: ${props => props.theme.components.loginInput.foreground} !important;
  }
  &::-ms-reveal,
  &::-ms-clear {
    display: none;
  }
  ${({error}) => error && css`
    border-color: ${props => props.theme.components.loginInput.errorBorder} !important;
    &:hover {
      border-color: ${props => props.theme.components.loginInput.errorBorderHover} !important;
    }
    &:focus {
      border-color: ${props => props.theme.components.loginInput.errorBorderFocus} !important;
    }
  `}
`

interface IPlaceholder {
  error?: boolean,
  visible?: boolean
}

export const Placeholder = styled.div<IPlaceholder>`
  position: absolute;
  align-items: center;
  height: 18px !important;
  font-size: 17px;
  top: -12px;
  left: 10px;
  padding: 0px 3px 3px 3px;
  background: linear-gradient(0deg, 
    ${props => props.theme.components.loginInput.placeholderBackgroundStart},
    ${props => props.theme.components.loginInput.placeholderBackgroundEnd}
  );
  color: ${props => props.theme.components.loginInput.placeholderForeground};
  ${({error}) => error && css`
    color: ${props => props.theme.components.loginInput.errorBorder} !important;
  `}
  transition: color 200ms, opacity 250ms;
  opacity: ${props => props.visible ? 100 : 0};
`