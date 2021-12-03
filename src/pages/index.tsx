import React, {useContext, useState} from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import {GetServerSideProps, NextComponentType, NextPageContext} from 'next'
import Link from 'next/link'
import Page from '../main'

import {useData} from '../providers/DataContext'
import {useUI} from '../providers/UIContext'

const Main: React.FunctionComponent = ({children, ...props}) => {
  return (
    <Container>
      <h1>Inicio</h1>
      <h3>teste</h3>
    </Container>
  )
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    ${props => props.theme.pages.login.gradient.start},
    ${props => props.theme.pages.login.gradient.end}
  );
`

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   console.log('teste')
//   // context.
//   // const fun = fakeFun()
//   // return {
//   //   props: {
//   //     teste: fun.teste
//   //   }
//   // }
//   return {
//     props: {

//     }
//   }
// }

export default Main