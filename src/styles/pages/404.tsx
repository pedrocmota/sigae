import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.pages.notFound.background};
  width: 100%;
  height: 100%;
  h1 {
    font-size: 100px;
    color: ${props => props.theme.pages.notFound.foreground};
  }
  span {
    font-size: 23px;
    text-align: center;
    color: ${props => props.theme.pages.notFound.foreground};
  }
  button {
    width: 300px;
    margin-top: 20px;
    span {
      font-size: 16px;
    }
  }
`