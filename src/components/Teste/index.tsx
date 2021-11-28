import React, {useEffect, useState, useContext, createContext} from 'react'

export interface ITesteContext {

}

export const TesteContext = createContext<ITesteContext>({} as ITesteContext)

export const useTeste = () => useContext(TesteContext)

export const TesteProvider: React.FunctionComponent = (props) => {
  return (
    <TesteContext.Provider value={{}}>
      {props.children}
    </TesteContext.Provider>
  )
}