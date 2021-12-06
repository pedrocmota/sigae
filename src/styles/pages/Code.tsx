import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    ${props => props.theme.pages.code.gradient.start},
    ${props => props.theme.pages.code.gradient.end}
  );
`

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 600px;
  height: 438px;
  box-shadow: 6px 6px 5px 0px rgba(0, 0, 0, 0.1);
  background-color: ${props => props.theme.pages.code.container};
  border-radius: 5px;
  @media (max-width: 780px) {
    width: 100%;
    height: 100%;
  } 
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  h1 {
    white-space: nowrap;
    font-size: 20px;
    text-align: center;
    font-weight: 500 !important;
    margin-top: 10px;
    margin-bottom: 10px;
    line-height: 1.1;
    color: ${props => props.theme.pages.code.title};
  }
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 70%;
  padding-top: 20px;
  margin-bottom: 40px;
  @media (max-width: 780px) {
    width: 80%;
    margin-bottom: 0px;
    margin-top: 50px;
  }
  @media (max-width: 400px) {
    width: 85%;
  }
  @media (max-height: 600px) {
    margin-top: 25px;
  }
`

export const Invalid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: ${props => props.theme.pages.code.invalid};
`

export const PasswordPopupContainer = styled.div`
  .passwordPopup {
    left: -340px;
    top: -18px;
  }
  @media (max-width: 1350px) {
    .passwordPopup {
      left: 0px;
      top: -195px;
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