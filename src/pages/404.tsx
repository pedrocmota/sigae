import {useRouter} from 'next/router'
import Head from 'next/head'
import Button from '../components/PrimaryButton/index'
import {Container} from '../styles/pages/404'

const NotFoundPage: React.FunctionComponent = () => {
  const {push} = useRouter()
  return (
    <Container>
      <Head>
        <title>Página desconhecida</title>
      </Head>
      <h1>404</h1>
      <span>Você deve estar perdido no espaço tempo</span>
      <Button onClick={() => {
        push('/')
      }}>
        Voltar para o início
      </Button>
    </Container>
  )
}

export default NotFoundPage