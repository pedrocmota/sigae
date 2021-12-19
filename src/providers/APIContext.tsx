import React, {useCallback, useMemo} from 'react'
import {createContext, useContextSelector} from 'use-context-selector'
import axios from 'axios'
import {useToasts} from 'react-toast-notifications'
import {useConsole} from './ConsoleContext'

export interface IAPIContext {
  sendGet: <Y, T, U>(
    path: string, data: Y, onReturn: onReturn<T>, onError: onError<U>
  ) => void,
  sendPost: <Y, T, U>(
    path: string, data: Y, onReturn: onReturn<T>, onError: onError<U>
  ) => void,
  sendPut: <Y, T, U>(
    path: string, data: Y, onReturn: onReturn<T>, onError: onError<U>
  ) => void,
  sendDelete: <Y, T, U>(
    path: string, data: Y, onReturn: onReturn<T>, onError: onError<U>
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

type onReturn<T> = (value: T, statusCode: number, headers: any) => void
type onError<U> = (value: U, statusCode: number, headers: any) => void

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

  const sendGet = useCallback(
    <Y, T, U>(path: string, data: Y, onReturn: onReturn<T>, onError: onError<U>) => {
      axios.get(`${apiURL}${path}`, {
        params: data,
        withCredentials: true
      }).then((req) => {
        onReturn(req.data, req.status, req.headers)
      }).catch((req) => {
        if (!req?.response?.status) {
          addToast('Houve um erro de conexão', {appearance: 'error'})
          emitError('Erro de rede', `Erro de rede ao conectar à API: ${apiURL}`, 'ERROR')
          onError('UNKNOWN' as any, 0, {})
        } else {
          onError(req.response.data, req.response.status, req.response.headers)
        }
      })
    }, [])

  const sendPost = useCallback(
    <Y, T, U>(path: string, data: Y, onReturn: onReturn<T>, onError: onError<U>) => {
      axios.post(`${apiURL}${path}`, data, {
        withCredentials: true
      }).then((req) => {
        onReturn(req.data, req.status, req.headers)
      }).catch((req) => {
        if (!req?.response?.status) {
          addToast('Houve um erro de conexão', {appearance: 'error'})
          emitError('Erro de rede', `Erro de rede ao conectar à API: ${apiURL}`, 'ERROR')
          onError('UNKNOWN' as any, 0, {})
        } else {
          onError(req.response.data, req.response.status, req.response.headers)
        }
      })
    }, [])

  const sendPut = useCallback(
    <Y, T, U>(path: string, data: Y, onReturn: onReturn<T>, onError: onError<U>) => {
      axios.put(`${apiURL}${path}`, data, {
        withCredentials: true
      }).then((req) => {
        onReturn(req.data, req.status, req.headers)
      }).catch((req) => {
        if (!req?.response?.status) {
          addToast('Houve um erro de conexão', {appearance: 'error'})
          emitError('Erro de rede', `Erro de rede ao conectar à API: ${apiURL}`, 'ERROR')
          onError('UNKNOWN' as any, 0, {})
        } else {
          onError(req.response.data, req.response.status, req.response.headers)
        }
      })
    }, [])

  const sendDelete = useCallback(
    <Y, T, U>(path: string, data: Y, onReturn: onReturn<T>, onError: onError<U>) => {
      axios.delete(`${apiURL}${path}`, {
        data: data,
        withCredentials: true
      }).then((req) => {
        onReturn(req.data, req.status, req.headers)
      }).catch((req) => {
        if (!req?.response?.status) {
          addToast('Houve um erro de conexão', {appearance: 'error'})
          emitError('Erro de rede', `Erro de rede ao conectar à API: ${apiURL}`, 'ERROR')
          onError('UNKNOWN' as any, 0, {})
        } else {
          onError(req.response.data, req.response.status, req.response.headers)
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