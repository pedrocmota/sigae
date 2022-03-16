import styled, {css} from 'styled-components'
import MaterialUIButton, {ButtonProps} from '@material-ui/core/Button'
import {IMargin, IPadding} from '../../types/components'

export interface IButton extends ButtonProps, IMargin, IPadding {
  width?: string,
  height?: string
}

const RedButton = styled(MaterialUIButton) <IButton>`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '36px'};
  background-color: ${props => props.theme.components.button.red.background} !important;
  color: ${props => props.theme.components.button.red.foreground} !important;
  font-size: 16px !important;
  &:hover {
    background-color: ${props => props.theme.components.button.red.background};
  }
  &:disabled {
    background-color: ${props => props.theme.components.button.red.disabledBackground} !important;
    color: ${props => props.theme.components.button.red.disabledForeground} !important;
  }
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

  ${({padding}) => padding?.top && css`
    padding-top: ${padding.top}px !important;
  `}
  ${({padding}) => padding?.bottom && css`
    padding-bottom: ${padding.bottom}px !important;
  `}
  ${({padding}) => padding?.left && css`
    padding-left: ${padding.left}px !important;
  `}
  ${({padding}) => padding?.right && css`
    padding-right: ${padding.right}px !important;
  `}
`

export default RedButton