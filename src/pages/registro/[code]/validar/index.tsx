import React, {useState, useRef} from 'react'
import {GetServerSideProps} from 'next'
import Head from 'next/head'
import Loading from '../../../../components/Loading'
import PinInput from '../../../../components/PinInput'
import PrimaryButton from '../../../../components/PrimaryButton'
import Link from '../../../../components/Link'
import Footer from '../../../../components/Footer'
import {Spinner} from '../../../../components/icons'
import {useToasts} from 'react-toast-notifications'
import {useAPI} from '../../../../providers/APIContext'
import {useRouter} from 'next/router'
import {showConfirmation} from '../../../../popups/Confirmation'
import {
  Container,
  Top,
  Main,
  FormContainer,
  Text,
  InputContainer
} from '../../../../styles/pages/register/Validation'
import sigaeIcon from '../../../../../public/sigae.svg'
import {getValidationInfos} from '../../../../../server/models/Register'

interface IValidateParams {
  emailCode: string
}

interface IValidateError {
  error: 'INVALID_USER' | 'UNKNOWN_REGISTRATION_CODE' | 'INCORRECT_CODE'
}

interface IResendEmailError {
  error: 'INVALID_USER' | 'UNKNOWN_REGISTRATION_CODE'
}

interface ICancelError {
  error: 'INVALID_USER' | 'UNKNOWN_REGISTRATION_CODE'
}

interface IRegisterValidation {
  code: string,
  name: string,
  email: string
}

const RegisterValidation: React.FunctionComponent<IRegisterValidation> = (props) => {
  const [emailCode, setEmailCode] = useState('')
  const [sending, setSending] = useState(false)

  const {addToast} = useToasts()
  const {sendPost, sendDelete} = useAPI()
  const {push} = useRouter()

  const button = useRef<HTMLButtonElement>(null)

  const confirmEmail = () => {
    setSending(true)
    sendPost<IValidateParams, any, IValidateError>(`/registration/${props.code}/validation/confirm`, {
      emailCode: emailCode
    }, false, () => {
      setSending(false)
      addToast('Conta registrada com sucesso!', {appearance: 'success'})
      push('/login')
    }, (response, status) => {
      setSending(false)
      if (response.error === 'INVALID_USER') {
        return addToast('Usuário inválido', {appearance: 'error'})
      }
      if (response.error === 'UNKNOWN_REGISTRATION_CODE') {
        return addToast('Código de registro desconhecido', {appearance: 'error'})
      }
      if (response.error === 'INCORRECT_CODE') {
        return addToast('Código desconhecido', {appearance: 'error'})
      }
      return addToast(`Erro desconhecido (${status})`, {appearance: 'error'})
    })
  }

  const resendEmail = () => {
    sendPost<any, any, IResendEmailError>(`/registration/${props.code}/resend`, {}, false, () => {
      addToast('E-mail enviado com sucesso', {appearance: 'success'})
    }, (response, status, headers) => {
      if (response.error === 'INVALID_USER') {
        return addToast('Usuário inválido', {appearance: 'error'})
      }
      if (response.error === 'UNKNOWN_REGISTRATION_CODE') {
        return addToast('Código desconhecido', {appearance: 'error'})
      }
      if (status === 429) {
        return addToast(
          `Espere ${headers['try-again']} segundos para solicitar outro e-mail`,
          {appearance: 'error'}
        )
      }
      return addToast(`Erro desconhecido (${status})`, {appearance: 'error'})
    })
  }

  const cancelRegistration = () => {
    showConfirmation((confirmed) => {
      if (confirmed) {
        sendDelete<any, any, ICancelError>(`/registration/${props.code}/cancel`, {}, false, () => {
          addToast('Inscrição cancelada com sucesso!', {appearance: 'success'})
          push('/registro')
        }, (response, status) => {
          if (response.error === 'INVALID_USER') {
            return addToast('Usuário inválido', {appearance: 'error'})
          }
          if (response.error === 'UNKNOWN_REGISTRATION_CODE') {
            return addToast('Código desconhecido', {appearance: 'error'})
          }
          return addToast(`Erro desconhecido (${status})`, {appearance: 'error'})
        })
      }
    }, {
      body: `
      Sua inscrição será cancelada,
      mas você poderá refaze-la no futuro.
      Você deseja continuar?
      `,
      size: {
        height: '300px'
      }
    })
  }

  return (
    <Container>
      <Head>
        <title>SiGAÊ - Validação de registro</title>
      </Head>
      <Loading />
      <Top>
        <img src={sigaeIcon} alt="Logo do SiGAÊ" />
        <h1>Confirme o seu e-mail</h1>
      </Top>
      <Main>
        <FormContainer>
          <Text>
            <div>
              Enviamos um código para o seu e-mail.
            </div>
            <div>
              Copie o código enviado no campo abaixo.
            </div>
            <div>
              Lembre-se de verificar o lixo eletrônico.
            </div>
          </Text>
          <InputContainer>
            <PinInput type='text' fields={8} inputMode="latin" name="code"
              onChange={(v) => setEmailCode(v)}
            />
            <PrimaryButton type="submit" variant="contained" margin_top={10} disabled={emailCode.length < 8}
              height={'40px'} onClick={confirmEmail} ref={button}>
              {(!sending) && (
                'Confirmar e-mail'
              )}
              {(sending) && (
                <Spinner />
              )}
            </PrimaryButton>
            <div className="links">
              <Link className="l1" onClick={resendEmail}>
                Enviar e-mail novamente
              </Link>
              <Link className="l2" onClick={cancelRegistration}>
                Refazer a inscrição
              </Link>
            </div>
          </InputContainer>
        </FormContainer>
      </Main>
      <Footer />
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const code = context.query.code as string
  const infos = await getValidationInfos(code)
  return {
    props: {
      ...infos && {
        code: code,
        ...infos
      }
    },
    ...infos === null && {
      redirect: {
        destination: '/registro'
      }
    }
  }
}

export default RegisterValidation