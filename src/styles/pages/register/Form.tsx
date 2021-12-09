import styled from 'styled-components'
import Unform from 'react-unform'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height:100vh;
  background-color: ${props => props.theme.pages.register.form.background};
  overflow-x: hidden;
  overflow-y: scroll;
`

export const Top = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 170px;
  h1 {
    font-size: 1.375rem;
    color: ${props => props.theme.pages.register.form.title};
    text-align: center;
    margin-top: 15px;
  }
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 650px;
  flex: 1;
  input, select {
    height: 45px !important;
  }
  @media (max-width: 700px) {
    width: 95%;
    input {
      height: 45px !important;
    }
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 100%;
  overflow: auto;
  color: ${props => props.theme.pages.register.form.header};
  .type {
    font-size: 1.625px;
  }
  .name {
    font-size: 1.5rem;
    font-weight: 500;
    margin-top: 10px;
    max-width: 100%;
    overflow-y: auto;
    white-space: nowrap;
  }
  .matricula, .campus {
    font-size: 1.25rem;
    margin-top: 4px;
  }
  b {
    font-weight: 500;
  }
  @media (max-width: 600px) {
    width: 90%;
    .name {
      font-size: 20px;
    }
  }
`

export const Form = styled(Unform)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin-top: 24px;
  @media (max-width: 600px) {
    width: 95%;
  }
`

export const Row = styled.div`
  width: 100%;
  margin-top: 15px;
  margin-bottom: 15px;
`

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 12px;
  input {
    padding-right: 50px !important;
  }
`

export const PasswordPopupContainer = styled.div`
  .passwordPopup {
    left: -340px;
    top: -22px;
  }
  @media (max-width: 1350px) {
    .passwordPopup {
      left: 0px;
      top: -190px;
      &::after {
        transform: rotate(135deg);
        right: 0px;
        left: 15px;
        top: auto;
        bottom: -11px;
      }
    }
  }
`