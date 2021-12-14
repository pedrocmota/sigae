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
    background-color: #43435a;
    > * {
      color: #7f94c5;
    }
  }
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 1px 1px #5c67bc;
  }
  svg {
    font-size: 24px;
    color: #ffffff;
  }
  p {
    font-size: 18px;
    color: #ffffff;
    padding-left: 10px;
  }
  ${({active}) => active && css`
    > * {
      color: #8dd45d !important;
    }
  `}
`