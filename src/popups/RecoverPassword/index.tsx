import React, {useState, useCallback} from 'react'
import {ThemeProvider} from 'styled-components'
import Swal from 'sweetalert2'
import Form from 'react-unform'
import {Wrapper, Header, Sigae, Title} from '../PopupsComponents'
import {showPopup} from '../Popup'
import {validateEmail} from '../../../utils/validation'
import {contexts} from '../../providers/Globalizer'
import {Container, Input} from './styles'
import {InputErrorIcon} from '../../components/icons'

const RecoverPassword: React.FunctionComponent<any> = () => {
  const [error, setError] = useState(false)

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.currentTarget.value
    const valido = validateEmail(email)
    if (email.length == 0) {
      setError(false)
    } else {
      setError(!valido)
    }
    const ok = document.getElementsByClassName('swal2-confirm')[0] as HTMLButtonElement
    ok.disabled = !valido
  }, [])

  return (
    <ThemeProvider theme={contexts.UIContext.theme}>
      <Wrapper>
        <Header>
          <Sigae />
          <Title>Recuperar senha</Title>
        </Header>
        <Container>
          <Form name="recovery" method="POST">
            <Input id="recoverPassword" type="email" placeholder="Digite o seu e-mail"
              error={error} onChange={onChange}>
              <InputErrorIcon visible={error ? 1 : 0} />
            </Input>
          </Form>
        </Container>
      </Wrapper>
    </ThemeProvider>
  )
}

interface IRecoveryParams {
  email: string
}

interface ISuccess {
  ok: string
}

interface IError {
  error: 'TOO_MANY_REQUESTS'
}

export const showRecoverPassword = () => {
  const {sendPost} = contexts.APIContext
  const {addToast} = contexts.ToastContext
  showPopup(RecoverPassword, {
    showDenyButton: true,
    showConfirmButton: true,
    denyButtonText: 'Fechar',
    confirmButtonText: 'Enviar e-mail',
    showClass: {
      popup: 'animated fadeIn'
    },
    hideClass: {
      popup: 'animated fadeOut'
    },
    didOpen: () => {
      const ok = document.getElementsByClassName('swal2-confirm')[0] as HTMLButtonElement
      const deny = document.getElementsByClassName('swal2-deny')[0] as HTMLButtonElement
      ok.style.width = '130px'
      deny.style.width = '130px'
      ok.disabled = true
    }
  }, {
    width: '450px',
    height: '285px'
  }).then((result) => {
    const input = document.getElementById('recoverPassword') as HTMLInputElement
    if (result.isConfirmed) {
      sendPost<IRecoveryParams, ISuccess, IError>('/codes/password/send', {
        email: input.value
      }, () => {
        setTimeout(() => {
          Swal.fire({
            icon: 'info',
            showClass: {
              popup: ''
            },
            hideClass: {
              popup: 'animated fadeOut'
            },
            html: `
            <p style="margin-bottom: 15px">
            Se este endere??o de e-mail for correto, n??s enviaremos um mensagem com um c??digo
            para que voc?? possa trocar sua senha
            </p>`
          })
        }, 1000)
      }, (response, status, headers) => {
        if (status === 429) {
          return addToast(
            `Espere ${headers['try-again']} segundos para solicitar outro e-mail`,
            {appearance: 'error'}
          )
        } else {
          return addToast('Erro desconhecido', {appearance: 'error'})
        }
      })
    }
  })
}