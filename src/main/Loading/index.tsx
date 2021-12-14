import React from 'react'
import {Container} from './styles'
import Spinner from '../../../public/assets/spinner.svg'

const ModuloLoading: React.FC = () => {
  return (
    <Container>
      <Spinner color={'#434c9c'} />
    </Container>
  )
}

export default ModuloLoading