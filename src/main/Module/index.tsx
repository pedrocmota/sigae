import React, {useEffect} from 'react'
import {ModuleSubContainer} from './styles'
import {useRouter} from 'next/router'
import {useMain} from '../index'

interface IModule {
  children: React.ReactNode
}

const Module: React.FunctionComponent<IModule> = (props) => {
  const {events} = useRouter()
  const {openLoading, setOpenSidebar} = useMain()

  useEffect(() => {
    const start = (nextPath: string) => {
      if (nextPath === '/' || nextPath.startsWith('/modulo')) {
        openLoading(true)
        if (!window.matchMedia('(min-width:944px)').matches) {
          setOpenSidebar(false)
        }
      }
    }

    const end = () => {
      openLoading(false)
    }

    events.on('routeChangeStart', start)
    events.on('routeChangeComplete', end)

    return () => {
      events.off('routeChangeStart', start)
      events.off('routeChangeComplete', end)
    }
  }, [])

  return (
    <ModuleSubContainer>
      {props.children}
    </ModuleSubContainer>
  )
}

export default Module