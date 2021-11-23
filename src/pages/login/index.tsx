import React from 'react'
import {GetServerSideProps} from 'next'
import {getPageSession} from '../../server/Session'

const Login: React.FunctionComponent<any> = (props) => {
  return (
    <div>
      <h1>Página de login</h1>
      <h2>{props.session}</h2>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = getPageSession(context)
  return {
    props: {
      session: session
    }
  }
}

export default Login