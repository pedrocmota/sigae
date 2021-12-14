import styled, {css} from 'styled-components'
import {ArrowRight} from '@mui/icons-material'
import {msgType} from '../../../providers/ConsoleContext'

interface IContainer {
  open: boolean,
  type: msgType
}

export const Container = styled.div<IContainer>`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 3px;
  margin-top: 3px;
  margin-bottom: 3px;
  cursor: pointer;
  ${({open}) => open && css`
    background-color: ${props => props.theme.components.console.collapsible.selectBackground};
  `}
  .datetime, .title {
    ${({type}) => type == 'ERROR' && css`
      color: ${props => props.theme.components.console.collapsible.error};
    `}
    ${({type}) => type == 'WARNING' && css`
      color: ${props => props.theme.components.console.collapsible.warning};
    `}
  }
`

export const Header = styled.div`
  display: inline-flex;
  .datetime {
    font-size: 19px;
    padding-right: 15px;
  }
  .title {
    font-size: 19px;
  }
`

export const Arrow = styled(ArrowRight) <Omit<IContainer, 'type'>>`
  color: ${props => props.theme.components.console.collapsible.arrow};
  ${({open}) => open && css`
    transform: rotateZ(90deg) !important;
  `}
`

export const Body = styled.div<Omit<IContainer, 'type'>>`
  width: 100%;
  height: 0px;
  font-size: 18px;
  white-space: pre-line;
  overflow: hidden;
  padding-left: 25px;
  margin-bottom: 5px;
  transition: height 200ms;
  color: ${props => props.theme.components.console.collapsible.msg};
  ${({open}) => open && css`
    height: auto;
  `}
`