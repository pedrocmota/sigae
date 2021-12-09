import React, {useState, useEffect} from 'react'
import {ThemeProvider} from 'styled-components'
import axios from 'axios'
import {Wrapper, Header, Sigae, Title, Overflow} from '../PopupsComponents'
import {showPopup} from '../Popup'
import {contexts} from '../../providers/Globalizer'

const ConfirmPolicy: React.FunctionComponent<any> = () => {
  const [policy, setPolicy] = useState('')

  useEffect(() => {
    axios.get('/policy.html').then((response) => {
      setPolicy(response.data)
    }).catch(() => {
      setPolicy('Erro ao carregar')
    })
  }, [])

  return (
    <ThemeProvider theme={contexts.UIContext.theme}>
      <Wrapper>
        <Header>
          <Sigae />
          <Title>Política do SiGAÊ</Title>
        </Header>
        <Overflow style={{textAlign: 'left'}} dangerouslySetInnerHTML={{__html: policy}} />
      </Wrapper>
    </ThemeProvider>
  )
}

export const showConfirmPolicy = (callback: (confirmed: boolean) => void) => {
  showPopup(ConfirmPolicy, {
    showDenyButton: true,
    showConfirmButton: true,
    confirmButtonText: 'Concordo',
    denyButtonText: 'Não concordo',
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
    width: '740px',
    height: '600px'
  }).then((res) => {
    callback(res.isConfirmed)
  })
}