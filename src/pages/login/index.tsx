import React from 'react'
import {GetServerSideProps} from 'next'
import {getPageSession} from '../../server/SideProps'
import {getUserConfig} from '../../../api/models/Configs'

const Login: React.FunctionComponent<any> = (props) => {
  return (
    <div>
      <h1>Página de login</h1>
      <h2>{props.session}</h2>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getPageSession(context)
  const config = await getUserConfig(session?.user)
  console.log(session, config)
  return {
    props: {
      session: ''
    }
  }
}

export default Login