import styled from 'styled-components'

const Anchor = styled.button`
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  outline: none;
  font-size: 16px;
  color: #039be5;
  cursor: pointer;
  margin-top: 3px;
  &:hover {
    text-decoration: underline;
  }
`

export default Anchor