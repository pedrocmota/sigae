import styled, {css} from 'styled-components'
import {IMargin, IPadding} from '../../types/components'

export interface IInput extends IMargin, IPadding, React.InputHTMLAttributes<HTMLInputElement> {
  width?: string,
  height?: string,
  fontSize?: number,
  error?: boolean
}

const PrimaryInput = styled.input<IInput>`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '40px'};
  font-size: ${props => props.fontSize || '16px'};
  font-family: Arial;
  background-color: ${props => props.theme.components.primaryInput.background};
  color: ${props => props.theme.components.primaryInput.foreground};
  caret-color: ${props => props.theme.components.primaryInput.caret};
  border: 2px solid ${props => props.theme.components.primaryInput.border};
  border-radius: 2px;
  outline: none;
  overflow: hidden;
  transition: color, border-color 200ms, opacity 250ms;
  padding-left: 15px;
  padding-right: 15px;
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
    border-color: ${props => props.theme.components.primaryInput.borderHover} !important;
  }
  &:focus {
    border-color: ${props => props.theme.components.primaryInput.borderFocus} !important;
  }
  ::placeholder {
    color: ${props => props.theme.components.primaryInput.placeholder};
  }
  &:disabled {
    background-color: ${props => props.theme.components.primaryInput.disabled.background} !important;
    border: 2px solid ${props => props.theme.components.primaryInput.border} !important;
    cursor: not-allowed;
    &:-webkit-autofill {
      box-shadow:0 0 0 50px ${props => props.theme.components.primaryInput.disabled.background} inset;
      -webkit-box-shadow:0 0 0 50px ${props => props.theme.components.primaryInput.disabled.background} inset;
    }
    &:-webkit-autofill:focus {
      box-shadow: 0 0 0 50px ${props => props.theme.components.primaryInput.disabled.background} inset;
      -webkit-box-shadow: 0 0 0 50px ${props => props.theme.components.primaryInput.disabled.background} inset;
    }
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
  &:-webkit-autofill {
    box-shadow:0 0 0 50px ${props => props.theme.components.primaryInput.background} inset;
    -webkit-box-shadow:0 0 0 50px ${props => props.theme.components.primaryInput.background} inset;
    color: ${props => props.theme.components.primaryInput.foreground} !important;
  }
  &:-webkit-autofill:focus {
    box-shadow: 0 0 0 50px ${props => props.theme.components.primaryInput.background} inset;
    -webkit-box-shadow: 0 0 0 50px ${props => props.theme.components.primaryInput.background} inset;
    color: ${props => props.theme.components.primaryInput.foreground} !important;
  }
  &:-webkit-autofill::first-line {
    font-family: Arial !important;
    font-size: ${props => props.fontSize || '16px'} !important;
    color: ${props => props.theme.components.primaryInput.foreground} !important;
  }
  &::-ms-reveal,
  &::-ms-clear {
    display: none;
  }
`
export default PrimaryInput