import React, {memo, useMemo} from 'react'
import {useToasts} from 'react-toast-notifications'
import {IUIContext, useUI} from './UIContext'
import {IConsoleContext, useConsole} from './ConsoleContext'
import {IAPIContext, useAPI} from './APIContext'

interface IContexts {
  ToastContext: ReturnType<typeof useToasts>,
  UIContext: IUIContext,
  ConsoleContext: IConsoleContext,
  APIContext: IAPIContext
}

export var contexts = undefined as unknown as IContexts

const Globalizer: React.FunctionComponent<any> = (props) => {
  const ui = useUI()
  const toast = useToasts()
  const console = useConsole()
  const api = useAPI()
  contexts = useMemo(() => {
    return {
      ToastContext: toast,
      UIContext: ui,
      ConsoleContext: console,
      APIContext: api
    }
  }, [])
  return (
    <>
      {props.children}
    </>
  )
}

export default memo(Globalizer)