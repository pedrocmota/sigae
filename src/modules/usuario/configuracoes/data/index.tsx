import React from 'react'
import PrimaryInput from '../../../../components/PrimaryInput'
import Select from '../../../../components/Select'
import PrimaryButton from '../../../../components/PrimaryButton'
import Banner from '../../../../components/Banner'
import {parsePreferredName} from '../../../../../utils/parse'
import {useData} from '../../../../providers/DataContext'
import {Wrapper, Container} from './styles'

const DataConfiguration: React.FunctionComponent = () => {
  const {data, setData} = useData()

  return (
    <Wrapper>
      <Banner type="warning">
        Teste
      </Banner>
      <Container>
        <h2>Abreviação do nome</h2>
        <Select placeholder="Escolha seu nome" options={parsePreferredName(data.user!.name)}
          margin_top={12} onChange={() => null}
        />
      </Container>

      <Container>
        <h2>Endereço de e-mail</h2>
        <PrimaryInput id="email" type="email" placeholder="Digite seu Email" margin_top={12}
          error={false} onChange={(e) => {
            // setEmail(e.currentTarget.value)
            // setEmailError(e.currentTarget.value.length > 0 && !validateEmail(e.currentTarget.value))
          }} />
      </Container>

    </Wrapper>
  )
}

export default DataConfiguration