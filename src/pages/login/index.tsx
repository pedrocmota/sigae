import React, {useState, useCallback, useRef} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Loading from '../../components/Loading'
import Form from 'react-unform'
import LoginInput from '../../components/LoginInput'
import PrimaryButton from '../../components/PrimaryButton'
import {InputErrorIcon, Spinner} from '../../components/icons'
import ShowPassword from '../../components/ShowPassword'
import {Container, Center, Header, Main, Footer, LinksContainer, LinksRow} from '../../styles/pages/Login'
import {useToasts} from 'react-toast-notifications'
import {useAPI} from '../../providers/APIContext'
import {useRouter} from 'next/router'
import {showRecoverPassword} from '../../popups/RecoverPassword'
import sigaeIcon from '../../../public/sigae.svg'

interface ILoginParams {
  login: string,
  password: string
}

interface ILoginSuccess {
  token: string
}

interface ILoginError {
  error:
  'UNKNOWN_USER' |
  'INCORRECT_PASSWORD' |
  'ACCOUNT_NOT_REGISTERED' |
  'INACTIVE_ACCOUNT' |
  'DISABLED_ACCOUNT',
  code?: string
}

const Login: React.FunctionComponent<any> = (props) => {
  const [sending, setSending] = useState(false)
  const [error1, setError1] = useState(false)
  const [error2, setError2] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const inputLogin = useRef<HTMLInputElement | null>(null)
  const inputPassword = useRef<HTMLInputElement | null>(null)
  const button = useRef<HTMLButtonElement | null>(null)

  const {addToast} = useToasts()
  const {sendPost} = useAPI()
  const {push} = useRouter()

  const sendLogin = useCallback(() => {
    if (!sending) {
      const login = inputLogin!.current!.value
      const password = inputPassword!.current!.value
      if (login.length === 0) {
        setError1(true)
      }
      if (password.length === 0) {
        setError2(true)
      }
      if (login.length > 0 && password.length > 0) {
        setSending(true)
        sendPost<ILoginParams, ILoginSuccess, ILoginError>('/sessions/login', {
          login: login,
          password: password
        }, true, (response) => {
          setSending(false)
          // history.push('/')
        }, (response, status) => {
          setSending(false)
          if (status === 406) {
            if (response.error === 'UNKNOWN_USER') {
              return addToast('Login desconhecido', {appearance: 'error'})
            }
            if (response.error === 'INCORRECT_PASSWORD') {
              return addToast('Senha incorreta', {appearance: 'error'})
            }
            if (response.error === 'INACTIVE_ACCOUNT') {
              return addToast('Essa matrícula ainda não está registrada', {appearance: 'error'})
            }
            if (response.error === 'DISABLED_ACCOUNT') {
              return addToast('Essa matrícula foi inativada', {appearance: 'error'})
            }
            if (response.error === 'ACCOUNT_NOT_REGISTERED') {
              push(`/registro/${response.code}/validar`)
            }
            addToast(`Erro desconhecido (${status})`, {appearance: 'error'})
          } else {
            if (status !== 0) {
              addToast(`Erro desconhecido (${status})`, {appearance: 'error'})
            }
          }
        })
      }
    }
  }, [])

  const matriculaKeyUp = useCallback((e) => {
    const size = e.currentTarget?.value?.length
    if (e.key === 'Enter') {
      inputPassword.current?.focus()
    }
    if (size === 11) {
      inputPassword.current?.focus()
    }
  }, [])

  const passwordKeyUp = useCallback((e) => {
    if (e.key === 'Enter') {
      button.current?.click()
    }
  }, [])

  return (
    <Container>
      <Loading />
      <Center>
        <Head>
          <title>SiGAÊ - Login</title>
        </Head>
        <Header>
          <img src={sigaeIcon} alt="Logo do SiGAÊ" />
          <h1>
            Sistema de gerenciamento
            <br />
            Atendimento ao estudante
          </h1>
        </Header>
        <Main>
          <Form name="login" method="POST">
            <LoginInput id="login" placeholder="Sua matrícula" type="tel" onKeyUp={matriculaKeyUp}
              error={error1} ref={inputLogin} onFocus={() => setError1(false)}>
              <InputErrorIcon visible={error1 ? 100 : 0} />
            </LoginInput>
            <LoginInput id="password" placeholder="Sua senha" type={showPassword ? 'text' : 'password'}
              autoComplete={'off'} onKeyUp={passwordKeyUp} margin_top={15} padding_right={50} error={error2}
              ref={inputPassword} onFocus={() => setError2(false)}>
              <InputErrorIcon visible={error2 ? 100 : 0} />
              <ShowPassword selected={showPassword} top={12} onClick={() => setShowPassword(!showPassword)} />
            </LoginInput>
            <PrimaryButton type="submit" variant="contained" margin_top={10} height={'40px'}
              onClick={sendLogin} ref={button}>
              {(!sending) && (
                'Realizar login'
              )}
              {(sending) && (
                <Spinner />
              )}
            </PrimaryButton>
          </Form>
          <LinksContainer>
            <div className="column">
              <LinksRow className="leftLink">
                <Link href="/registro">
                  <a>Registrar novo usuário</a>
                </Link>
              </LinksRow>
            </div>
            <div className="column">
              <LinksRow className="rightLink">
                <a onClick={showRecoverPassword}>Esqueci minha senha</a>
              </LinksRow>
            </div>
          </LinksContainer>
        </Main>
        <Footer>
          <div>
            © 2020/2021 | Desenvolvimento:
            <a href="https://portal.ifba.edu.br/" target="_blank" rel="noreferrer">
              IFBA
            </a>
          </div>
        </Footer>
      </Center>
    </Container>
  )
}

export default Login