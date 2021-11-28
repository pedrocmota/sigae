import React from 'react'
import {user_types} from '../../api/types/Global'
import {IUserConfig} from '../../api/schemas/Users'

interface IProviders {
  session: {
    auth: boolean,
    sessionID: string
  },
  user?: {
    userID: string,
    userType: user_types,
    agent: string,
    ip: string,
    config: IUserConfig
  }
}

const Providers: React.FunctionComponent<IProviders> = (props) => {
  return (
    <>
    </>
  )
}

export default Providers