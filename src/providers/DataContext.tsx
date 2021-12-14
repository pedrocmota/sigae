import React, {useState} from 'react'
import {createContext, useContextSelector} from 'use-context-selector'
import {IInitialProps} from '../../server/models/Props'

export interface IDataContext {
  data: IInitialProps,
  setData: React.Dispatch<React.SetStateAction<IInitialProps>>
}

export const DataContext = createContext<IDataContext>({} as IDataContext)

export const useData = () => {
  const data = useContextSelector(DataContext, (v) => v.data)
  const setData = useContextSelector(DataContext, (v) => v.setData)
  return {
    data,
    setData
  }
}

export const DataProvider: React.FunctionComponent<IInitialProps> = ({children, ...props}) => {
  const [data, setData] = useState(props)
  return (
    <DataContext.Provider value={{
      data,
      setData
    }}>
      {children}
    </DataContext.Provider>
  )
}