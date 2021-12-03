import styled from 'styled-components'
import LoginInput from '../../components/LoginInput'

export const Container = styled.div`
  width: 90%;
  height: 100%;
  padding-top: 10px;
`

export const Input = styled(LoginInput)`
  font-size: 16px;
  &:-webkit-autofill::first-line {
    font-family: Arial !important;
    font-size: 16px !important;
  }
`