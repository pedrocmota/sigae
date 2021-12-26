import React, {useState} from 'react'
import {GetServerSideProps} from 'next'
import Head from 'next/head'
import Loading from '../../components/Loading'
import Form from 'react-unform'
import LoginInput from '../../components/LoginInput'
import PrimaryButton from '../../components/PrimaryButton'
import {InputErrorIcon, Spinner} from '../../components/icons'
import ShowPassword from '../../components/ShowPassword'
import PasswordPopup from '../../components/PasswordPopup'
import {passwordStrength} from '../../../utils/validation'
import {getCode} from '../../../server/models/Codes'
import {
  Container,
  Center,
  Invalid,
  Header,
  Main,
  PasswordPopupContainer
} from '../../styles/pages/Code'
import {useAPI} from '../../providers/APIContext'
import {useToasts} from 'react-toast-notifications'
import {useRouter} from 'next/router'
import sigaeIcon from '../../../public/sigae.svg'

interface ICode {
  valid: boolean
}

interface ISendPasswordParams {
  code: string,
  password: string
}

interface ISendPasswordError {
  error: 'UNKNOWN_CODE' | 'INVALID_PASSOWORD'
}

const Code: React.FunctionComponent<ICode> = ({valid}) => {
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')
  const [sending, setSending] = useState(false)
  const [error1, setError1] = useState(false)
  const [error2, setError2] = useState(false)

  const [showPassword, setShowPassword] = useState(false)
  const [passwordPopup, setPasswordPopup] = useState(false)

  const {sendPut} = useAPI()
  const {addToast} = useToasts()
  const {query, push} = useRouter()

  const validate = () => {
    const validPassword1 = passwordStrength(password1).valid
    const validPassword2 = password1 === password2
    return validPassword1 && validPassword2
  }

  const sendPassword = () => {
    sendPut<ISendPasswordParams, any, ISendPasswordError>('/codes/password/change', {
      code: query.code as string,
      password: password1
    }, () => {
      push('/login')
      return addToast('Senha alterada com sucesso!', {appearance: 'success'})
    }, (response) => {
      setSending(false)
      if (response.error === 'UNKNOWN_CODE') {
        return addToast('Código inválido', {appearance: 'error'})
      }
      if (response.error === 'INVALID_PASSOWORD') {
        return addToast('Senha inválida', {appearance: 'error'})
      }
      return addToast(`Erro desconhecido (${status})`, {appearance: 'error'})
    })
  }

  return (
    <>
      <Head>
        <title>SiGAÊ - Trocar senha</title>
      </Head>
      <Loading />
      <Container>
        {valid && (
          <Center>
            <Header>
              <img src={sigaeIcon} alt="Logo do SiGAÊ" />
              <h1>
                Digite uma nova senha
              </h1>
            </Header>
            <Main>
              <Form name="login" method="POST">
                <LoginInput id="password1" placeholder="Sua senha" type={showPassword ? 'text' : 'password'}
                  padding={{right: 50}} error={error1}
                  onChange={(v) => {
                    setPassword1(v.currentTarget.value)
                  }}
                  onFocus={() => {
                    setError1(false)
                    setPasswordPopup(true)
                  }}
                  onBlur={() => {
                    setPasswordPopup(false)
                  }}>
                  <InputErrorIcon visible={error1 ? 100 : 0} />
                  <ShowPassword selected={showPassword} top={12} onClick={() => {
                    setShowPassword(!showPassword)
                  }} />
                  <PasswordPopupContainer>
                    <PasswordPopup visible={passwordPopup} password={password1} />
                  </PasswordPopupContainer>
                </LoginInput>
                <LoginInput id="password2" placeholder="Sua senha novamente"
                  type={showPassword ? 'text' : 'password'} margin={{top: 15}} padding={{right: 50}}
                  error={error2} onChange={(v) => {
                    setPassword2(v.currentTarget.value)
                  }}
                  onFocus={() => setError2(false)}>
                  <InputErrorIcon visible={error2 ? 100 : 0} />
                  <ShowPassword selected={showPassword} top={12} onClick={() => {
                    setShowPassword(!showPassword)
                  }} />
                </LoginInput>
                <PrimaryButton type="submit" variant="contained" margin={{top: 12}} height={'40px'}
                  disabled={!validate()} onClick={sendPassword}>
                  {(!sending) && (
                    'Enviar nova senha'
                  )}
                  {(sending) && (
                    <Spinner />
                  )}
                </PrimaryButton>
              </Form>
            </Main>
          </Center>
        )}
        {!valid && (
          <Invalid>
            <h1>Código inválido</h1>
          </Invalid>
        )}
      </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const code = await getCode(context.params?.code as string, 'CHANGE_PASSWORD')
  return {
    props: {
      valid: code !== null
    }
  }
}

export default Code