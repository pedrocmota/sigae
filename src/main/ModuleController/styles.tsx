import styled from 'styled-components'

export const ModuleContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-grow: 1;
  background-color: ${props => props.theme.pages.main.moduleController.background};
`