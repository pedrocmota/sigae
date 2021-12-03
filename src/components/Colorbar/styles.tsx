import styled from 'styled-components'
import {IColorBar} from './'

export const Container = styled.div<IColorBar>`
  width: 100%;
  height: ${props => props.height || '5px'};
  background-color: ${props => props.background};
  border-radius: 2px;
`

interface IBar {
  width: string,
  foreground: string
}

export const Bar = styled.div<IBar>`
  width: ${props => props.width || '0'}%;
  height: 100%;
  background-color: ${props => props.foreground};
  transition: width 200ms
`