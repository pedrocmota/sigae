import React from 'react'
import {GetServerSideProps} from 'next'
import Head from 'next/head'
import dayjs from 'dayjs'
import {ModuleWrapper, ModuleContainer, ModuleHeader} from '../../../../main/ModuleComponents'
import KeyIcon from '@mui/icons-material/Key'
import Table, {Row, Cell} from '../../../../components/Table'
import RedButton from '../../../../components/RedButton'
import {showConfirmation} from '../../../../popups/Confirmation'

import {getInitialProps} from '../../../../../server/models/Props'
import {notLogged} from '../../../../../utils/redirect'
import {getSessionsList} from '../../../../../server/models/Sessions'
import {ISessions} from '../../../../../server/schemas/Sessions'

interface ISessoes {
  sessions: ISessions[]
}

const Sessoes: React.FunctionComponent<ISessoes> = (props) => {
  const finishSession = (index: number) => {
    showConfirmation((confirmed) => {
      if (confirmed) {
        console.log(index)
      }
    }, {
      title: 'Finalizar sessão',
      body: `
      Deseja finalizar a sessão?
      `,
      hideIcon: true,
      size: {
        width: '380px',
        height: '200px'
      }
    })
  }

  return (
    <ModuleWrapper>
      <Head>
        <title>SiGAÊ - Sessões atuais</title>
      </Head>
      <ModuleHeader title="Sessões ativas" Icon={KeyIcon} />
      <ModuleContainer>
        <Table columns={[
          <th key="col1">Navegador</th>,
          <th key="col2" style={{width: '200px'}}>Data/horário</th>,
          <th key="col3">Ip</th>,
          <th key="col4" style={{width: '50px'}}>Ação</th>
        ]}>
          {props.sessions.map((session, i) => {
            return (
              <Row key={session._id}>
                <Cell>{session.agent}</Cell>
                <Cell>{dayjs.unix(session.createAt).format('DD/MM/YYYY HH:mm:ss')}</Cell>
                <Cell>{session.ip}</Cell>
                <Cell>
                  <RedButton width="200px" disabled={session.actual} onClick={() => finishSession(i)}>
                    {session.actual ? 'Sessão atual' : 'Finalizar sessão'}
                  </RedButton>
                </Cell>
              </Row>
            )
          })}
        </Table>
      </ModuleContainer>
    </ModuleWrapper>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const userProps = await getInitialProps(context.req.cookies.session)
  return {
    ...!userProps.auth && {
      redirect: {
        destination: notLogged()
      }
    },
    props: {
      ...(userProps.auth && userProps.user) && {
        sessions: await getSessionsList(userProps.user.id, context.req.cookies.session)
      }
    }
  }
}

export default Sessoes