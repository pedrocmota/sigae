import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height:100vh;
  background-color: ${props => props.theme.pages.register.validation.background};
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
    font-size: 22px;
    color: ${props => props.theme.pages.register.validation.title};
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
  flex: 1;
  width: 500px;
  margin-top: 20px;
  margin-bottom: 20px;
  @media (max-width: 560px) {
    width: 95%;
  }
`

export const Text = styled.div`
  font-size: 1.25rem;
  white-space: pre-wrap;
  color: ${props => props.theme.pages.register.validation.title};
  @media (max-width: 462px) {
    font-size: 1.1rem;
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  margin-top: 30px;
  .links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 10px;
    .l1 {
      margin-top: 10px;
    }
    .l2 {
      margin-top: 18px;
    }
  }
  @media (max-width: 350px) {
    width: 98%;
    input {
      width: 34px !important;
      height: 34px !important;
    }
  }
`