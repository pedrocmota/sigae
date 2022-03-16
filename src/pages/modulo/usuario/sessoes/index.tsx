import React, {useState} from 'react'
import {GetServerSideProps} from 'next'
import Head from 'next/head'
import dayjs from 'dayjs'
import {ModuleWrapper, ModuleContainer, ModuleHeader} from '../../../../main/ModuleComponents'
import KeyIcon from '@mui/icons-material/Key'
import Table, {Row, Cell} from '../../../../components/Table'
import RedButton from '../../../../components/RedButton'
import {showConfirmation} from '../../../../popups/Confirmation'
import {useAPI} from '../../../../providers/APIContext'
import {useToasts} from 'react-toast-notifications'

import {getInitialProps} from '../../../../../server/models/Props'
import {notLogged} from '../../../../../utils/redirect'
import {getSessionsList} from '../../../../../server/models/Sessions'
import {ISessions} from '../../../../../server/schemas/Sessions'

interface ISessoes {
  sessions: ISessions[]
}

interface IFinishSessionRequest {
  sessionID: string
}

const Sessoes: React.FunctionComponent<ISessoes> = (props) => {
  const [sessions, setSessions] = useState(props.sessions)
  const {sendDelete} = useAPI()
  const {addToast} = useToasts()

  const finishSession = (sessionID: string) => {
    showConfirmation((confirmed) => {
      if (confirmed) {
        sendDelete<IFinishSessionRequest, any, any>('/sessions/logout/id', {
          sessionID: sessionID
        }, () => {
          setSessions(sessions => sessions.filter((session) => session._id !== sessionID))
          addToast('Sessão finalizada com sucesso!', {appearance: 'success'})
        }, (response, status) => {
          addToast(`Erro ao deletar sessão. Status: ${status}`, {appearance: 'error'})
        })
      }
    }, {
      title: 'Finalizar sessão',
      body: `
      Deseja finalizar a sessão?
      `,
      hideIcon: true
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
          {sessions.map((session) => {
            return (
              <Row key={session._id}>
                <Cell>{session.agent}</Cell>
                <Cell>{dayjs.unix(session.createAt).format('DD/MM/YYYY HH:mm:ss')}</Cell>
                <Cell>{session.ip}</Cell>
                <Cell>
                  <RedButton
                    width="200px"
                    disabled={session.isCurrent}
                    onClick={() => finishSession(session._id)}
                  >
                    {session.isCurrent ? 'Sessão atual' : 'Finalizar sessão'}
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