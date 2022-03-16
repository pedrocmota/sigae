import React from 'react'
import {ThemeProvider} from 'styled-components'
import {Wrapper, Header, Sigae, Title, MultiLine} from '../PopupsComponents'
import {showPopup} from '../Popup'
import {contexts} from '../../providers/Globalizer'
import {ISize} from '../../types/components'

interface IConfirmation {
  title?: string,
  body?: string,
  yes?: string,
  no?: string,
  hideIcon?: boolean,
  size?: ISize
}

const Confirmation: React.FunctionComponent<IConfirmation> = (props) => {
  return (
    <ThemeProvider theme={contexts.UIContext.theme}>
      <Wrapper>
        <Header>
          {(!props.hideIcon) && (
            <Sigae />
          )}
          <Title>
            {props?.title || 'Deseja continuar?'}
          </Title>
        </Header>
        <MultiLine>
          {props?.body || 'Deseja continuar?'}
        </MultiLine>
      </Wrapper>
    </ThemeProvider>
  )
}

export const showConfirmation = (callback: (confirmed: boolean) => void, props?: IConfirmation) => {
  showPopup<IConfirmation>(Confirmation, {
    showDenyButton: true,
    showConfirmButton: true,
    confirmButtonText: props?.yes || 'Sim',
    denyButtonText: props?.no || 'Não',
    showClass: {
      popup: 'animated fadeIn'
    },
    hideClass: {
      popup: 'animated fadeOut'
    },
    didOpen: () => {
      const confirm = document.getElementsByClassName('swal2-confirm')[0] as HTMLButtonElement
      const deny = document.getElementsByClassName('swal2-deny')[0] as HTMLButtonElement
      confirm.style.width = '150px'
      deny.style.width = '150px'
    }
  }, {
    width: props?.size?.width || '380px',
    height: props?.size?.height || '200px'
  }, props).then((res) => {
    callback(res.isConfirmed)
  })
}