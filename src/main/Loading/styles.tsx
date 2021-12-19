import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.pages.main.loading.background} !important;
  z-index: 500;
  svg {
    color: ${props => props.theme.pages.main.loading.spinner};
  }
`