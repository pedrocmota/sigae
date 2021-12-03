import styled from 'styled-components'
import Input from 'react-code-input'

export const InputStyled = styled(Input)`
  display: inline-flex !important;
  justify-content: center;
  width: 100%;
  input {
    width: 40px !important;
    height: 40px !important;
    background-color: ${props => props.theme.components.pinInput.background};
    color: ${props => props.theme.components.pinInput.foreground};
    border: 1px solid ${props => props.theme.components.pinInput.border};
    border-radius: 4px;
    font-size: 16px;
    outline: none;
    margin: 2px;
    text-align: center;
    text-transform: uppercase;
    caret-color: ${props => props.theme.components.pinInput.caret};
    transition-duration: 250ms;
    transition-property: background, color, border, box-shadow, transform;
    ::placeholder {
      color: ${props => props.theme.components.pinInput.placeholder};
    }
    &:focus {
      border-color: ${props => props.theme.components.pinInput.borderFocus};
      outline: none;
      transform: scale(1.05);
      ::placeholder {
        color: ${props => props.theme.components.pinInput.placeholderFocus};
      }
    }
  }
`