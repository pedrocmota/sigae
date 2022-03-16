import styled, {createGlobalStyle} from 'styled-components'

export const GlobalMain = createGlobalStyle`
  body {
    overflow: hidden;
  }
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  @media (max-width: 944px) {
    padding-left: 0px;
  }
  padding-left: 300px;
`

export const RenderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
`