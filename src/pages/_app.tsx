import {useRouter} from 'next/router'
import {useDidMountEffect} from 'react-more-hooks'
import Main from '../main/index'
import Providers from '../providers'
import {inServer} from '../../utils'
import Swal from 'sweetalert2'

const App = ({Component, pageProps, cookieTheme}) => {
  const {pathname} = useRouter()
  const {query} = useRouter() as any

  useDidMountEffect(() => {
    if (!inServer()) {
      Swal.close()
    }
  }, [pathname])

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