import React, {memo} from 'react'
import {Container, Sigae, Copyright} from './styles'

const Footer: React.FunctionComponent = (props) => {
  return (
    <Container>
      <Sigae>
        <div>Sistema de Gerenciamento de</div>
        <div className="footer_right">Atendimento ao Estudante</div>
      </Sigae>
      <Copyright>
        © 2020/2021 SiGAÊ | Desenvolvimento:
        <a className="ifba_big" href="https://portal.ifba.edu.br/" target="_blank" rel="noreferrer">
          Instituto Federal da Bahia
        </a>
        <a className="ifba_small" href="https://portal.ifba.edu.br/" target="_blank" rel="noreferrer">
          IFBA
        </a>
      </Copyright>
    </Container>
  )
}

export default memo(Footer)