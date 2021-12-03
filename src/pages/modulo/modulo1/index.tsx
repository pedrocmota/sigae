import React from 'react'
import Page from '../../../main'
import {GetServerSideProps, NextComponentType, NextPageContext} from 'next'

const Modulo1: React.FunctionComponent = () => {
  return (
    <>
      <h1>Modulo 1</h1>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {

    }
  }
}

export default Modulo1