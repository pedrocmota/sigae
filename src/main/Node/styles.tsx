import styled, {css} from 'styled-components'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'

interface IOpen {
  open: boolean
}

export const Container = styled.div<IOpen>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
  user-select: none;
  transition: background 130ms, color 130ms;
  &:hover {
    background-color: ${props => props.theme.pages.main.sidebar.node.hover.background};
  }
  ${({open}) => open && css`
    background-color: ${props => props.theme.pages.main.sidebar.node.open.background};
    color: ${props => props.theme.pages.main.sidebar.node.open.foreground};
  `}
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 1px 1px ${props => props.theme.pages.main.sidebar.node.focus};
  }
  svg {
    font-size: 24px;
    color: ${props => props.theme.pages.main.sidebar.node.foreground};
  }
  p {
    font-size: 18px;
    color: ${props => props.theme.pages.main.sidebar.node.foreground};
    padding-left: 10px;
    white-space: nowrap;
  }
`

export const Top = styled.div<IOpen>`
  display: inline-flex;
  align-items: center;
  width: 100%;
  height: 48px;
  padding-left: 10px;
  &:hover {
    > * {
      color: ${props => props.theme.pages.main.sidebar.node.hover.foreground};
    }
  }
  ${({open}) => open && css`
    > * {
      color: ${props => props.theme.pages.main.sidebar.node.open.foreground} !important;
    }
  `}
`

export const Bottom = styled.div<IOpen>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  overflow: hidden;
  ${({open}) => !open && css`
    display: none;
  `}
  .row {
    padding-left: 0px;
    p {
      padding-left: 35px;
      font-size: 16px !important;
      white-space: nowrap;
      transition: background 130ms, color 130ms;
    }
    &:hover {
      background-color: inherit !important;
    }
  }
`

export const Arrow = styled(ArrowRightIcon) <IOpen>`
  position: absolute;
  right: 10px;
  width: 38px !important;
  height: 38px !important;
  transition: transform 150ms, color 130ms !important;
  ${({open}) => open && css`
    transform: rotateZ(90deg);
  `}
`