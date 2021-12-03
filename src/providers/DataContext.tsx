import React, {useState} from 'react'
import {createContext, useContextSelector} from 'use-context-selector'
import {IInitialProps, IUserInitialProps} from '../../server/models/Configs'

export interface IDataContext {
  userData: IUserInitialProps | undefined,
  setUserData: React.Dispatch<React.SetStateAction<IUserInitialProps | undefined>>
}

export const DataContext = createContext<IDataContext>({} as IDataContext)

export const useData = () => {
  const userData = useContextSelector(DataContext, (v) => v.userData)
  const setUserData = useContextSelector(DataContext, (v) => v.setUserData)
  return {
    userData,
    setUserData
  }
}

export const DataProvider: React.FunctionComponent<IInitialProps> = ({children, ...props}) => {
  const [userData, setUserData] = useState(props.user)
  return (
    <DataContext.Provider value={{
      userData,
      setUserData
    }}>
      {children}
    </DataContext.Provider>
  )
}