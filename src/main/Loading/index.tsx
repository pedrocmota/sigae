import React from 'react'
import {Container} from './styles'
import Spinner from '../../../public/assets/spinner.svg'

const ModuloLoading: React.FC = () => {
  return (
    <Container>
      <Spinner />
    </Container>
  )
}

export default ModuloLoading