import React from 'react'
import styled from 'styled-components'

interface IRequirement {
  text: string,
  realized: boolean
}

const Requirement: React.FunctionComponent<IRequirement> = (props) => {
  return (
    <Container>
      <div className="text">{props.text}</div>
      <Realize realized={props.realized}>
        {props.realized ? 'Cumprido' : 'Não cumprido'}
      </Realize>
    </Container>
  )
}

const Container = styled.div`
  display: inline-flex;
  margin-top: 2px;
  margin-bottom: 2px;
  .text {
    font-size: 15px;
  }
`
const Realize = styled.div<Omit<IRequirement, 'text'>>`
  color: ${props => props.realized ?
    props.theme.components.passwordPopup.colors.good :
    props.theme.components.passwordPopup.colors.bad};
  margin-left: 3px;
`

export default Requirement