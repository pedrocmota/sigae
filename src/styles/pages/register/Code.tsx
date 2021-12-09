import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height:100vh;
  background-color: ${props => props.theme.pages.register.code.background};
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
    color: ${props => props.theme.pages.register.code.title};
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

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
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
    width: 95%;
    input {
      width: 34px !important;
      height: 34px !important;
    }
  }
`