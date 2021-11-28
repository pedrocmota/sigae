import React, {useState} from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import {v4 as uuid} from 'uuid'

interface IMain {
  children: React.ReactNode
}

const Main: React.FunctionComponent<IMain> = ({children}) => {
  const Module = children
  const id = 'fora bolsonaro'
  const [num, setNum] = useState(0)
  return (
    <Container>
      <aside>
        <button onClick={() => setNum(num + 1)}>{num}</button>
        <h1>{id}</h1>
        <Link href="/">
          <a>Inicio</a>
        </Link>
        <Link href="/modulo/modulo1">
          <a>Modulo1</a>
        </Link>
        <Link href="/modulo/modulo2">
          <a>Modulo2</a>
        </Link>
        <Link href="/modulo/modulo3">
          <a>Modulo3</a>
        </Link>
      </aside>
      {/* {Module} */}
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fcfcfc;
`

export default Main