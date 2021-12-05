import {NextPageContext} from 'next'
import Head from 'next/head'
import {useRouter} from 'next/router'
import Button from '../components/PrimaryButton/index'
import {Container} from '../styles/pages/404'

const Error = ({statusCode}) => {
  const {push} = useRouter()
  return (
    <Container>
      <Head>
        <title>Erro {statusCode}</title>
      </Head>
      <h1>{statusCode}</h1>
      <span>Ocorreu um erro grave</span>
      <Button onClick={() => {
        push('/')
      }}>
        Voltar para o início
      </Button>
    </Container>
  )
}

Error.getInitialProps = ({res, err}: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return {statusCode}
}

export default Error