import React, {memo} from 'react'
import Lines from '../Lines'
import {Container, InfoContainer, Avatar, Name, LinesContainer} from './styles'
import {useMain} from '../index'
import {useData} from '../../providers/DataContext'

const Sidebar: React.FunctionComponent = () => {
  const {openSidebar} = useMain()
  const {data} = useData()

  return (
    <Container open={openSidebar} suppressHydrationWarning>
      <InfoContainer>
        <Avatar src={'/api/user/profile'} alt="Foto de perfil do usuário atual" />
        <Name>
          {data.user?.preferredName && (
            data.user?.preferredName
          )}
          {!data.user?.preferredName && (
            'Visitante'
          )}
        </Name>
      </InfoContainer>
      <LinesContainer>
        <Lines />
      </LinesContainer>
    </Container>
  )
}

export default memo(Sidebar)