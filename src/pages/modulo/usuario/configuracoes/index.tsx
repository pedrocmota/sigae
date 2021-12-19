import React from 'react'
import {ModuleWrapper, ModuleContainer, ModuleHeader} from '../../../../main/ModuleComponents'
import SettingsIcon from '@mui/icons-material/Settings'
import Tab, {TabPanel, TabHeader} from '../../../../components/TabBox'


interface IConfigurações {
  //children: React.ReactNode
}

const Configurações: React.FunctionComponent<IConfigurações> = () => {
  return (
    <ModuleWrapper>
      <ModuleHeader title="Dados e configurações" Icon={SettingsIcon} />
      <ModuleContainer>
        <Tab initialValue={'1'} tabs={[
          <TabHeader label="Dados pessoais" value="1" key="1" />,
          <TabHeader label="Notificações" value="2" key="2" />,
          <TabHeader label="Foto de perfil" value="3" key="3" />
        ]}>
          <TabPanel value="1">Item One</TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </Tab>
      </ModuleContainer>
    </ModuleWrapper >
  )
}

export default Configurações