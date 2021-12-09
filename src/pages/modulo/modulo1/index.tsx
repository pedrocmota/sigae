import React from 'react'
import {GetServerSideProps} from 'next'

const Modulo1: React.FunctionComponent = () => {
  return (
    <>
      <h1>Modulo 1</h1>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {

    }
  }
}

export default Modulo1