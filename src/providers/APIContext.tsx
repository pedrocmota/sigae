import React, {useCallback, useMemo} from 'react'
import {createContext, useContextSelector} from 'use-context-selector'
import axios from 'axios'
import cookie from 'js-cookie'
import {useToasts} from 'react-toast-notifications'
import {useConsole} from './ConsoleContext'

export interface IAPIContext {
  sendGet: <Y, T, U>(
    path: string, data: Y, auth: boolean, onReturn: onReturn<T>, onError: onError<U>
  ) => void,
  sendPost: <Y, T, U>(
    path: string, data: Y, auth: boolean, onReturn: onReturn<T>, onError: onError<U>
  ) => void,
  sendPut: <Y, T, U>(
    path: string, data: Y, auth: boolean, onReturn: onReturn<T>, onError: onError<U>
  ) => void,
  sendDelete: <Y, T, U>(
    path: string, data: Y, auth: boolean, onReturn: onReturn<T>, onError: onError<U>
  ) => void
}

export const APIContext = createContext<IAPIContext>({} as IAPIContext)

export const useAPI = () => {
  const sendGet = useContextSelector(APIContext, (v) => v.sendGet)
  const sendPost = useContextSelector(APIContext, (v) => v.sendPost)
  const sendPut = useContextSelector(APIContext, (v) => v.sendPut)
  const sendDelete = useContextSelector(APIContext, (v) => v.sendDelete)
  return {
    sendGet,
    sendPost,
    sendPut,
    sendDelete
  }
}

type onReturn<T> = (value: T, statusCode: number) => void
type onError<U> = (value: U, statusCode: number) => void

export const APIProvider: React.FunctionComponent = (props) => {
  const {addToast} = useToasts()
  const {emitError} = useConsole()

  const apiURL = useMemo(() => {
    if (typeof window !== 'undefined') {
      return window.location.origin + '/api'
    } else {
      return '/api'
    }
  }, [])

  const session = useMemo(() => {
    if (typeof window !== 'undefined') {
      return cookie.get('session')
    } else {
      return undefined
    }
  }, [])

  const sendGet = useCallback(
    <Y, T, U>(path: string, data: Y, requireAuth: boolean, onReturn: onReturn<T>, onError: onError<U>) => {
      axios.get(`${apiURL}${path}`, {
        params: data,
        headers: {
          ...requireAuth && {session: session}
        }
      }).then((response) => {
        onReturn(response.data, response.status)
      }).catch((response) => {
        if (!response?.response?.status) {
          addToast('Houve um erro de conexão', {appearance: 'error'})
          emitError('Erro de rede', `Erro de rede ao conectar à API: ${apiURL}`, 'ERROR')
          onError('UNKNOWN' as any, 0)
        } else {
          onError(response.response.data, response.response.status)
        }
      })
    }, [])

  const sendPost = useCallback(
    <Y, T, U>(path: string, data: Y, requireAuth: boolean, onReturn: onReturn<T>, onError: onError<U>) => {
      axios.post(`${apiURL}${path}`, data, {
        ...requireAuth && {
          withCredentials: true
        },
        withCredentials: true,
        headers: {
          ...requireAuth && {session: session}
        }
      }).then((response) => {
        onReturn(response.data, response.status)
      }).catch((response) => {
        if (!response?.response?.status) {
          addToast('Houve um erro de conexão', {appearance: 'error'})
          emitError('Erro de rede', `Erro de rede ao conectar à API: ${apiURL}`, 'ERROR')
          onError('UNKNOWN' as any, 0)
        } else {
          onError(response.response.data, response.response.status)
        }
      })
    }, [])

  const sendPut = useCallback(
    <Y, T, U>(path: string, data: Y, requireAuth: boolean, onReturn: onReturn<T>, onError: onError<U>) => {
      axios.put(`${apiURL}${path}`, data, {
        headers: {
          ...requireAuth && {session: session}
        }
      }).then((response) => {
        onReturn(response.data, response.status)
      }).catch((response) => {
        if (!response?.response?.status) {
          addToast('Houve um erro de conexão', {appearance: 'error'})
          emitError('Erro de rede', `Erro de rede ao conectar à API: ${apiURL}`, 'ERROR')
          onError('UNKNOWN' as any, 0)
        } else {
          onError(response.response.data, response.response.status)
        }
      })
    }, [])

  const sendDelete = useCallback(
    <Y, T, U>(path: string, data: Y, requireAuth: boolean, onReturn: onReturn<T>, onError: onError<U>) => {
      axios.delete(`${apiURL}${path}`, {
        data: data,
        headers: {
          ...requireAuth && {session: session}
        }
      }).then((response) => {
        onReturn(response.data, response.status)
      }).catch((response) => {
        if (!response?.response?.status) {
          addToast('Houve um erro de conexão', {appearance: 'error'})
          emitError('Erro de rede', `Erro de rede ao conectar à API: ${apiURL}`, 'ERROR')
          onError('UNKNOWN' as any, 0)
        } else {
          onError(response.response.data, response.response.status)
        }
      })
    }, [])

  return (
    <APIContext.Provider value={{
      sendGet,
      sendPost,
      sendPut,
      sendDelete
    }}>
      {props.children}
    </APIContext.Provider>
  )
}