import styled, {css} from 'styled-components'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import {IMargin} from '../../types/components'

export const Container = styled.div<IMargin>`
  position: relative;
  display: flex;
  align-items: center;
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
  input {
    margin: 0px !important;
  }
  &:hover {
    svg {
      color: ${props => props.theme.components.primaryInput.borderHover};
    }
  }
  &:focus-within {
    svg {
      color: ${props => props.theme.components.primaryInput.borderFocus} !important;
    }
  }
`

export const Arrow = styled(ArrowDropDownIcon)`
  position: absolute;
  right: 10px;
  color: #98ACC9;
  transition: color 200ms;
  pointer-events: none;
`