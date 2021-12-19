import React from 'react'
import {Card, Container, Top, Bottom, Selected} from './styles'
import SVGIcon from '@mui/material/SvgIcon'

interface ICheckDiv {
  title: string,
  Icon: typeof SVGIcon,
  select: boolean,
  onSelect: () => void
}

const CheckDiv: React.FunctionComponent<ICheckDiv> = ({Icon, ...props}) => {
  return (
    <Card onClick={props.onSelect}>
      <Container selected={props.select}>
        <Top>
          <Icon />
          {props.title}
          {props.select && (
            <Selected>
              (Selecionado)
            </Selected>
          )}
        </Top>
        <Bottom>
          {props.children}
        </Bottom>
      </Container>
    </Card>
  )
}

export default CheckDiv