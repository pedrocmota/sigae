import {useEffect} from 'react'
import {useRouter} from 'next/router'
import Main from '../main/index'
import Providers from '../providers'

const App = ({Component, pageProps, cookieTheme}) => {
  const {pathname} = useRouter()
  const {query} = useRouter() as any
  if (pathname === '/' || pathname.startsWith('/modulo')) {
    return (
      <Providers {...query} cookieTheme={cookieTheme}>
        <Main>
          <Component {...pageProps} />
        </Main>
      </Providers>
    )
  } else {
    return (
      <Providers {...query} cookieTheme={cookieTheme}>
        <Component {...pageProps} />
      </Providers>
    )
  }
}

App.getInitialProps = async (context) => {
  if (typeof window === 'undefined') {
    const theme = context?.ctx?.req?.cookies?.theme
    return {
      cookieTheme: theme || 'LIGHT'
    }
  } else {
    return {}
  }
}

export default App