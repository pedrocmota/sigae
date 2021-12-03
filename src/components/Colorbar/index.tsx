import React from 'react'
import {Container, Bar} from './styles'

export interface IColorBar extends React.HTMLAttributes<HTMLDivElement> {
  percentage: number,
  height?: string,
  background: string,
  foreground: string
}

const FixedColorBar: React.FunctionComponent<IColorBar> = (props) => {
  return (
    <Container {...props}>
      <Bar width={props.percentage.toString()} foreground={props.foreground as string} />
    </Container>
  )
}

export default FixedColorBar