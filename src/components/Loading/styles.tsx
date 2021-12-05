import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height:100vh;
  background-color: ${props => props.theme.components.loading.background};
`