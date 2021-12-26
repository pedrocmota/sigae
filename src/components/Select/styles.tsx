import styled, {css} from 'styled-components'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import {IMargin} from '../../types/components'

export const Container = styled.div<IMargin>`
  position: relative;
  display: flex;
  align-items: center;

  ${({margin}) => margin?.top && css`
    margin-top: ${margin.top}px !important;
  `}
  ${({margin}) => margin?.bottom && css`
    margin-bottom: ${margin.bottom}px !important;
  `}
  ${({margin}) => margin?.left && css`
    margin-left: ${margin.left}px !important;
  `}
  ${({margin}) => margin?.right && css`
    margin-right: ${margin.right}px !important;
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