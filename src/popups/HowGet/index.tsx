import React from 'react'
import {ThemeProvider} from 'styled-components'
import {Wrapper, Header, Sigae, Title, Overflow} from '../PopupsComponents'
import {showPopup} from '../Popup'
import {contexts} from '../../providers/Globalizer'

const HowGet: React.FunctionComponent<any> = () => {
  return (
    <ThemeProvider theme={contexts.UIContext.theme}>
      <Wrapper>
        <Header>
          <Sigae />
          <Title>Como conseguir um código?</Title>
        </Header>
        <Overflow style={{textAlign: 'left'}}>
          Lorem ipsum
        </Overflow>
      </Wrapper>
    </ThemeProvider>
  )
}

export const showHowGet = () => {
  showPopup(HowGet, {
    showDenyButton: true,
    showConfirmButton: false,
    denyButtonText: 'Fechar',
    showClass: {
      popup: 'animated fadeIn'
    },
    hideClass: {
      popup: 'animated fadeOut'
    },
    didOpen: () => {
      const deny = document.getElementsByClassName('swal2-deny')[0] as HTMLButtonElement
      deny.style.width = '130px'
    }
  }, {
    width: '540px',
    height: '400px'
  })
}