import React, {useEffect} from 'react'
import {ModuleContainer} from './styles'
import {useRouter} from 'next/router'
import {useMain} from '../index'

interface IModuleController {
  children: React.ReactNode
}

const ModuleController: React.FunctionComponent<IModuleController> = (props) => {
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
    <ModuleContainer>
      {props.children}
    </ModuleContainer>
  )
}

export default ModuleController