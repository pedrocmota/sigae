import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import {createContext, useContextSelector} from 'use-context-selector'
import Loading from '../components/Loading'
import Header from '../main/Header'
import Sidebar from '../main/Sidebar'
import Module from './ModuleController'
import Footer from '../main/Footer'
import ModuleLoading from '../main/Loading'
import {MainContainer, MainWrapper} from '../styles/pages/main/Main'
import {inServer} from '../../utils'
import {onResize} from '../../utils/resize'

export interface IMainContext {
  loading: boolean,
  openLoading: React.Dispatch<React.SetStateAction<boolean>>,
  openSidebar: boolean,
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>
}

export const MainContext = createContext<IMainContext>({} as IMainContext)

export const useMain = () => {
  const openSidebar = useContextSelector(MainContext, (v) => v.openSidebar)
  const setOpenSidebar = useContextSelector(MainContext, (v) => v.setOpenSidebar)
  const loading = useContextSelector(MainContext, (v) => v.loading)
  const openLoading = useContextSelector(MainContext, (v) => v.openLoading)
  return {
    loading,
    openLoading,
    openSidebar,
    setOpenSidebar
  }
}

const Main: React.FunctionComponent = (props) => {
  const [loading, openLoading] = useState(false)
  const [openSidebar, setOpenSidebar] = useState(() => {
    if (!inServer()) {
      return window.matchMedia('(min-width:944px)').matches
    } else {
      return false
    }
  })

  useEffect(() => {
    if (!inServer()) {
      const resizeEvt = onResize((width) => {
        setOpenSidebar(width >= 944)
      })
      return () => {
        window.removeEventListener('resize', resizeEvt, true)
      }
    }
  }, [])

  return (
    <MainContext.Provider value={{
      loading,
      openLoading,
      openSidebar,
      setOpenSidebar
    }}>
      <Head>
        <title>SiGAÊ</title>
      </Head>
      <Loading />
      <MainContainer suppressHydrationWarning>
        <Header />
        {!inServer() && (
          <Sidebar />
        )}
        <MainWrapper>
          <Module>
            {(loading) && (
              <ModuleLoading />
            )}
            {(!loading) && (
              props.children
            )}
          </Module>
          <Footer />
        </MainWrapper>
      </MainContainer>
    </MainContext.Provider>
  )
}

export default Main