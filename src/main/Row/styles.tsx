import styled, {css} from 'styled-components'

interface ILinkContainer {
  active: boolean
}

export const LinkContainer = styled.a<ILinkContainer>`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 52px;
  min-height: 52px;
  padding-left: 10px;
  cursor: pointer;
  user-select: none;
  margin-top: 1px;
  margin-bottom: 1px;
  white-space: nowrap;
  text-decoration: none;
  &:hover {
    background-color: ${props => props.theme.pages.main.sidebar.row.hover.background};
    > * {
      color: ${props => props.theme.pages.main.sidebar.row.hover.foreground};
    }
  }
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 1px 1px ${props => props.theme.pages.main.sidebar.row.focus};
  }
  svg {
    font-size: 24px;
    color: ${props => props.theme.pages.main.sidebar.row.foreground};
  }
  p {
    font-size: 18px;
    color: ${props => props.theme.pages.main.sidebar.row.foreground};
    padding-left: 10px;
  }
  ${({active}) => active && css`
    > * {
      color: ${props => props.theme.pages.main.sidebar.row.active} !important;
    }
  `}
`