import type {AppProps} from 'next/app'
import {useRouter} from 'next/router'
import Index from './index'
// import Inicio from './modulo/inicio'

// const App = ({Component, pageProps}: AppProps) => {
//   const {pathname} = useRouter()
//   if (pathname === '/' || pathname.startsWith('/modulo')) {
//     return (
//       <Index Module={pathname === '/' ? Inicio : Component} moduleProps={pageProps} />
//     )
//   } else {
//     return (
//       <Component {...pageProps} />
//     )
//   }
// }

// export default App