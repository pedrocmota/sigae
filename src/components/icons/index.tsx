import styled from 'styled-components'
import ErrorIcon from '@mui/icons-material/Error'
import WarningMUIIcon from '@mui/icons-material/Warning'
import SpinnerSVG from '../../../public/assets/spinner.svg'

interface IInputErrorIcon {
  visible: number
}

export const InputErrorIcon = styled(ErrorIcon) <IInputErrorIcon>`
  position: absolute;
  width: 30px !important;
  height: 100% !important;
  left: 6px;
  bottom: 1px;
  color: ${props => props.theme.components.inputErrorIcon.color};
  opacity: ${props => props.visible};
  transition: opacity 200ms !important;
`

export const WarningIcon = styled(WarningMUIIcon)`
  width: 35px;
  height: 35px;
`

interface ISpinner {
  size?: string,
  color?: string
}

export const Spinner = styled(SpinnerSVG) <ISpinner>`
  width: ${props => props.size || '30px'};
  height: ${props => props.size || '30px'};
  color: ${props => props.color || props.theme.components.buttonSpinner.color};
`