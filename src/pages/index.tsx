import React, {useState} from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import {GetServerSideProps, NextComponentType, NextPageContext} from 'next'
import Link from 'next/link'
import Page from '../main'

const Home: React.FunctionComponent = () => {
  return (
    <Page>
      <h1>Página de inicio</h1>
    </Page>
  )
}

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

export default Home