import React from 'react'

interface ICalendario {
  //children: React.ReactNode
}

const Calendario: React.FunctionComponent<ICalendario> = () => {
  return (
    <h1>
      Calendario
    </h1>
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

export default Calendario