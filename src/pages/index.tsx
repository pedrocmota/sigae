import React from 'react'
// import getConfig from 'next/config'

const Main: React.FunctionComponent = () => {
  // const {publicRuntimeConfig} = getConfig()
  // console.log(publicRuntimeConfig)
  return (
    <>
      <h1>Inicio</h1>
      <h3>teste</h3>

      <h1>Inicio</h1>
      <h1>Inicio</h1>
      <h1>Inicio</h1>
      <h1>Inicio</h1>
      <h1>Inicio</h1>
      <h1>Inicio</h1>
      <h1>Inicio</h1>
      <h1>Inicio</h1>
      <h1>Inicio</h1>
      <h1>Inicio</h1>
      <h1>Inicio</h1>
      <h1>Inicio</h1>
      <h1>Inicio</h1>
      <h1>Inicio</h1>
      <h1>Inicio</h1>
      <h1>Inicio</h1>
      <h1>Inicio</h1>
      <h1>Inicio</h1>
      <h1>Inicio</h1>
      <h1>Inicio</h1>
      <h1>Inicio</h1>
      <h1>Inicio</h1>
      <h1>Inicio</h1>
      <h1>Inicio</h1>
      <h1>Inicio</h1>
      <h1>Inicio</h1>
      <h1>Inicio</h1>
      <h1>Inicio</h1>
      <h1>Inicio</h1>
      <h1>Inicio</h1>
      <h1>Inicio</h1>
      <h1>Inicio</h1>
      <h1>Inicio</h1>
      <h1>Inicio</h1>
      <h1>Inicio</h1>
      <h1>Inicio</h1>

    </>
  )
}

export const getServerSideProps = async () => {
  await sleep(500)
  return {
    props: {}
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export default Main