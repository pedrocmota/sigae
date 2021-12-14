import React from 'react'
import {ThemeProvider} from 'styled-components'
import getConfig from 'next/config'
import {showPopup} from '../Popup'
import {Wrapper, Header, Sigae} from '../PopupsComponents'
import {contexts} from '../../providers/Globalizer'
import {Container} from './styles'
import {IPublicRuntimeConfig} from '../../../server/types/next'

const About: React.FunctionComponent = () => {
  const {publicRuntimeConfig} = getConfig() as IPublicRuntimeConfig

  return (
    <ThemeProvider theme={contexts.UIContext.theme}>
      <Wrapper>
        <Header>
          <Sigae />
        </Header>
        <Container>
          <div>Repositório do SiGAÊ:
            <a href={publicRuntimeConfig?.repository} className="git"
              target="_blank" rel="noreferrer">Link repositório</a>
          </div>
          <div className="version">
            <div>Versão atual: <b>v{publicRuntimeConfig?.version || 'Desconhecida'}</b></div>
          </div>
          <div className="dev">Desenvolvido por:</div>
          <a href="http://lattes.cnpq.br/5108386712552461" target="_blank" rel="noreferrer">
            Pedro Henrique Cerqueira Mota
          </a>
          <a href="http://lattes.cnpq.br/8880633529133641" target="_blank" rel="noreferrer">
            João Costa dos Santos Neto
          </a>
          <div className="dev">Sob orientação de:</div>
          <a href="http://lattes.cnpq.br/6588253220386279" target="_blank" rel="noreferrer">
            Ana Carolina Sokolonski Anton
          </a>
        </Container>
      </Wrapper>
    </ThemeProvider>
  )
}

export const showAbout = () => {
  showPopup(About, {
    showDenyButton: true,
    showConfirmButton: false,
    denyButtonText: 'Fechar',
    showClass: {
      popup: 'animated fadeIn'
    },
    hideClass: {
      popup: 'animated fadeOut'
    }
  }, {
    width: '560px',
    height: '460px'
  })
}

export default showAbout