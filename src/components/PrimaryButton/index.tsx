import styled, {css} from 'styled-components'
import MaterialUIButton, {ButtonProps} from '@material-ui/core/Button'
import {IMargin, IPadding} from '../../types/components'

export interface IButton extends ButtonProps, IMargin, IPadding {
  width?: string,
  height?: string
}

const PrimaryButton = styled(MaterialUIButton) <IButton>`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '36px'};
  background-color: ${props => props.theme.components.button.primary.background} !important;
  color: ${props => props.theme.components.button.primary.foreground} !important;
  font-size: 16px !important;
  &:hover {
    background-color: ${props => props.theme.components.button.primary.background};
  }
  &:disabled {
    background-color: ${props => props.theme.components.button.primary.disabledBackground} !important;
    color: ${props => props.theme.components.button.primary.disabledForeground} !important;
  }
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
`

export default PrimaryButton