import React from 'react'
import PrimaryInput from '../../../../components/PrimaryInput'
import Select from '../../../../components/Select'
import PrimaryButton from '../../../../components/PrimaryButton'
import Banner from '../../../../components/Banner'
import Anchor from '../../../../components/Anchor'
import {WarningIcon} from '../../../../components/icons'
import {parsePreferredName} from '../../../../../utils/parse'
import {useData} from '../../../../providers/DataContext'
import {Wrapper, Container} from './styles'

const DataConfiguration: React.FunctionComponent = () => {
  const {data, setData} = useData()

  return (
    <Wrapper>
      <Banner type="warning">
        <WarningIcon className="colored" />
        <div>
          Você ainda não confirmou o novo endereço de e-mail.
          <br />
          Para fazer essa alteração, clique <Anchor>aqui</Anchor>
          <br />
          Caso queira cancelar a alteração, clique <Anchor>aqui</Anchor>
        </div>
      </Banner>
      <Container>
        <h2>Abreviação do nome</h2>
        <Select placeholder="Escolha seu nome" height="45px" options={parsePreferredName(data.user!.name)}
          margin={{top: 12}} onChange={() => null}
        />
      </Container>

      <Container>
        <h2>Endereço de e-mail</h2>
        <PrimaryInput id="email" value={data.user?.email} height="45px" type="email" placeholder="Digite seu Email" margin={{top: 12}}
          error={false} onChange={(e) => {
            // setEmail(e.currentTarget.value)
            // setEmailError(e.currentTarget.value.length > 0 && !validateEmail(e.currentTarget.value))
          }} />
      </Container>

    </Wrapper>
  )
}

export default DataConfiguration