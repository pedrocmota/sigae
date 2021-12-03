import React, {useState, memo} from 'react'
import {Container, Header, Arrow, Body} from './styles'
import {IConsoleEntry} from '../../../providers/ConsoleContext'

const Collapsible: React.FC<IConsoleEntry> = (props) => {
  const [open, setOpen] = useState(false)
  return (
    <Container open={open} type={props.type} onClick={() => {
      setOpen(!open)
    }}>
      <Header>
        <Arrow open={open} />
        <b className="datetime">{props.datetime}</b>
        <div className="title">{props.title}</div>
      </Header>
      <Body open={open}>
        {props.msg}
      </Body>
    </Container>
  )
}

export default memo(Collapsible)