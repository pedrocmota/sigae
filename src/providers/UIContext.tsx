import React, {useState, useMemo, useCallback} from 'react'
import {createContext, useContextSelector} from 'use-context-selector'
import {ThemeProvider, DefaultTheme} from 'styled-components'
import cookie from 'js-cookie'
import {IInitialProps} from '../../server/models/Configs'
import {themeNames} from '../../server/types/Global'
import Light from '../themes/Light'
import Dark from '../themes/Dark'
import Global from '../styles/Global'
import Popups from '../styles/Popups'

export interface IUIContext {
  themeName: themeNames,
  theme: DefaultTheme,
  changeTheme: (newTheme: themeNames) => void
}

export const UIContext = createContext<IUIContext>({} as IUIContext)

export const useUI = () => {
  const themeName = useContextSelector(UIContext, (v) => v.themeName)
  const theme = useContextSelector(UIContext, (v) => v.theme)
  const changeTheme = useContextSelector(UIContext, (v) => v.changeTheme)
  return {
    themeName,
    theme,
    changeTheme
  }
}

export const UIProvider: React.FunctionComponent<IInitialProps> = (props) => {
  const [themeName, setThemeName] = useState((): themeNames => {
    const serverTheme = props?.configs?.theme
    if (serverTheme) {
      return serverTheme as themeNames
    } else {
      return props.cookieTheme || 'LIGHT'
    }
  })

  const theme = useMemo(() => {
    if (themeName === 'LIGHT') {
      return Light
    }
    if (themeName === 'DARK') {
      return Dark
    }

    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', themeName)
    }
    return Light
  }, [themeName])

  const changeTheme = useCallback((newTheme: themeNames) => {
    setThemeName(newTheme)
    cookie.set('theme', newTheme)
  }, [])

  return (
    <UIContext.Provider value={{
      themeName,
      theme,
      changeTheme
    }}>
      <ThemeProvider theme={theme}>
        <Global />
        <Popups />
        {props.children}
      </ThemeProvider>
    </UIContext.Provider>
  )
}