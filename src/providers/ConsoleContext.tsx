import React, {useState, useEffect, useCallback} from 'react'
import {createContext, useContextSelector} from 'use-context-selector'
import dayjs from 'dayjs'
import Console from '../components/Console'

export interface IConsoleContext {
  openConsole: boolean,
  setOpenConsole: React.Dispatch<React.SetStateAction<boolean>>,
  entries: IConsoleEntry[],
  emitError: (title: string, msg: string, type: msgType) => void,
  clearConsole: () => void
}

export type msgType = 'ERROR' | 'WARNING'

export interface IConsoleEntry {
  title: string,
  type: msgType,
  datetime: string,
  msg: string
}

export const ConsoleContext = createContext<IConsoleContext>({} as IConsoleContext)

export const useConsole = () => {
  const openConsole = useContextSelector(ConsoleContext, (v) => v.openConsole)
  const setOpenConsole = useContextSelector(ConsoleContext, (v) => v.setOpenConsole)
  const entries = useContextSelector(ConsoleContext, (v) => v.entries)
  const emitError = useContextSelector(ConsoleContext, (v) => v.emitError)
  const clearConsole = useContextSelector(ConsoleContext, (v) => v.clearConsole)
  return {
    openConsole,
    setOpenConsole,
    entries,
    emitError,
    clearConsole
  }
}

export const ConsoleProvider: React.FunctionComponent = (props) => {
  const [openConsole, setOpenConsole] = useState(false)
  const [entries, setEntries] = useState<IConsoleEntry[]>([])

  useEffect(() => {
    document.addEventListener('keydown', function onPress(event) {
      if (event.key === 'c' && event.altKey) {
        setOpenConsole(true)
      }
    })
  }, [])

  const emitError = useCallback((title: string, msg: string, type: msgType) => {
    setEntries((old) => [...old, {
      title: title,
      msg: msg,
      datetime: dayjs().format('HH:mm'),
      type: type
    }])
  }, [])

  const clearConsole = useCallback(() => {
    setEntries([])
  }, [])

  return (
    <ConsoleContext.Provider value={{
      openConsole,
      setOpenConsole,
      entries,
      emitError,
      clearConsole
    }}>
      <Console />
      {props.children}
    </ConsoleContext.Provider>
  )
}