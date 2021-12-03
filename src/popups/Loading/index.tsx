import React from 'react'
import {ThemeProvider} from 'styled-components'
import {Wrapper, Header, Sigae, Center} from '../PopupsComponents'
import {showPopup} from '../Popup'
import {contexts} from '../../providers/Globalizer'
import {Spinner} from '../../components/icons'

const Loading: React.FunctionComponent<any> = () => {
  const {theme} = contexts.UIContext
  return (
    <ThemeProvider theme={contexts.UIContext.theme}>
      <Wrapper>
        <Header>
          <Sigae />
        </Header>
        <Center style={{width: '100%', height: '100%'}}>
          <Spinner size={'70px'} aria-labelledby="Carregando..." color={
            theme.popups.loading.spinner
          } />
        </Center>
      </Wrapper>
    </ThemeProvider>
  )
}

export const showLoading = () => {
  showPopup(Loading, {
    showDenyButton: false,
    showConfirmButton: false,
    allowOutsideClick: false,
    showClass: {
      popup: 'animated fadeIn'
    },
    hideClass: {
      popup: 'animated fadeOut'
    }
  }, {
    width: '480px',
    height: '320px'
  })
}