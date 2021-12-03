import styled, {css} from 'styled-components'
import DialogStyled from '@mui/material/Dialog'

export const Dialog = styled(DialogStyled)`
  height: 600px !important;
  top: auto !important;
  bottom: 0px !important;
  /* z-index: 10000 !important; */
  @media (max-height: 860px) {
    height: 100% !important;
  }
`

export const ConsoleBar = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 82px;
  background-color: ${props => props.theme.pages.console.topBar.background};
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  .consoleBar {
    display: inline-flex;
    align-items: center;
    height: 100%;
  }
  .left {
    padding-left: 15px;
    h2 {
      padding-left: 15px;
      font-size: 22px;
      color: ${props => props.theme.pages.console.topBar.foreground};
    }
  }
  .right {
    .themes {
      margin-right: 15px;
      span > svg {
        color: ${props => props.theme.pages.console.topBar.foreground};
      }
    }
    .clear {
      margin-right: 15px;
      span > svg {
        color: ${props => props.theme.pages.console.topBar.foreground};
      }
    }
    .close {
      margin-right: 15px;
      span > svg {
        color: ${props => props.theme.pages.console.topBar.foreground};
      }
    }
  }
  @media (max-width: 372px) {
    .left > h2 {
      font-size: 20px;
      text-align: center;
      padding-left: 0px;
    }
  }
`

export const Container = styled.div<{isEmpty: boolean}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  overflow-y: auto;
  padding: 15px;
  background-color: ${props => props.theme.pages.console.background};
  ${({isEmpty}) => isEmpty && css`
    justify-content: center;
  `}
`

export const EmptyText = styled.div`
  font-size: 25px;
  color: ${props => props.theme.pages.console.emptyText};
  text-align: center;
  @media (max-width: 372px) {
    font-size: 22px;
  }
`