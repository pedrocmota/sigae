import React from 'react'
import Head from 'next/head'
import {GetServerSideProps} from 'next'
import {ModuleWrapper, ModuleContainer, ModuleHeader} from '../../../../main/ModuleComponents'
import SettingsIcon from '@mui/icons-material/Settings'
import Tab, {TabPanel, TabHeader} from '../../../../components/TabBox'
import DataConfiguration from '../../../../modules/user/configuration/data'
import NotificationsConfiguration from '../../../../modules/user/configuration/notifications'
import ProfileConfiguration from '../../../../modules/user/configuration/profile'
import {useData} from '../../../../providers/DataContext'
import {isAuth} from '../../../../../server/models/Props'
import {notLogged} from '../../../../../utils/redirect'

interface IConfigurações {
  //children: React.ReactNode
}

const Configurações: React.FunctionComponent<IConfigurações> = () => {
  const {data} = useData()

  return (
    <ModuleWrapper>
      <Head>
        <title>SiGAÊ - Dados e configurações</title>
      </Head>
      <ModuleHeader title="Dados e configurações" Icon={SettingsIcon} />
      <ModuleContainer>
        <Tab initialValue="1" tabs={[
          <TabHeader label="Dados pessoais" value="1" key="1" />,
          <TabHeader label="Notificações" value="2" key="2" />,
          <TabHeader label="Foto de perfil" value="3" key="3" disabled={!data.permissions?.changeAvatar} />
        ]}>
          <TabPanel value="1">
            <DataConfiguration />
          </TabPanel>
          <TabPanel value="2">
            <NotificationsConfiguration />
          </TabPanel>
          <TabPanel value="3">
            <ProfileConfiguration />
          </TabPanel>
        </Tab>
      </ModuleContainer>
    </ModuleWrapper >
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const auth = await isAuth(context.req.cookies?.session)
  return {
    ...!auth && {
      redirect: {
        destination: notLogged()
      }
    },
    props: {}
  }
}

export default Configurações