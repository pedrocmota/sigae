import React from 'react'
import styled from 'styled-components'

interface IBanner {
  icon: any,
  title: string,
  body: string
}

const Banner: React.FunctionComponent<IBanner> = (props) => {
  return (
    <Container>
      <div className="inLine">
        {props.icon}
        <span>
          {props.title}
        </span>
      </div>
      <div className="body">
        {props.body}
      </div>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  min-height: 100px;
  padding: 10px;
  border-radius: 5px;
  background-color: ${props => props.theme.pages.register.form.banner.background};
  color: ${props => props.theme.pages.register.form.banner.color};
  .inLine {
    display: flex;
    word-break: break-word;
    span {
      display: flex;
      align-items: center;
      margin-left: 6px;
      font-size: 1.125rem;
    }
  }
  .body {
    margin-left: 5px;
    margin-top: 4px;
    white-space: pre-line;
    font-size: 1rem;
  }
  svg {
    width: 30px;
    height: 30px;
  }
`

export default Banner