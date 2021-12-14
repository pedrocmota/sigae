import React from 'react'
import {useRouter} from 'next/router'
import queryString from 'query-string'
import Row from '../Row'
import Node from '../Node'
import {useData} from '../../providers/DataContext'
import {useAPI} from '../../providers/APIContext'
import {useConsole} from '../../providers/ConsoleContext'

import {showPolicy} from '../../popups/Policy'
import {showAbout} from '../../popups/About'

import HomeIcon from '@mui/icons-material/Home'
import VpnKeyIcon from '@mui/icons-material/VpnKey'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import CalendarIcon from '@mui/icons-material/PermContactCalendar'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import SchoolIcon from '@mui/icons-material/School'
// import GroupIcon from '@mui/icons-material/Group'
import PersonIcon from '@mui/icons-material/Person'
import SettingsIcon from '@mui/icons-material/Settings'
import EngineeringIcon from '@mui/icons-material/Engineering'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'

const Lines: React.FunctionComponent = () => {
  const {pathname, push} = useRouter()
  const {data} = useData()
  const {sendDelete} = useAPI()
  const {setOpenConsole} = useConsole()

  const urlParsed = queryString.parse(location.search)

  return (
    <>
      <Row title="Início" Icon={HomeIcon} module="/" selected={
        pathname === '/'
      } showable onAction={() => { }} />

      <Row title="Fazer login" Icon={VpnKeyIcon} showable={
        !data.auth
      } onAction={() => {
        push('/login')
      }} />
      <Row title="Registrar conta" Icon={AddCircleIcon} showable={
        !data.auth
      } onAction={() => {
        push('/registro')
      }} />

      <Row title="Calendário" Icon={CalendarIcon} module="/modulo/calendario" selected={
        pathname.startsWith('/modulo/calendario')
      } showable />

      <Node title="Turmas" Icon={SchoolIcon} showable>
        <Row title="Turmas inscritas" module="/modulo/turmas/inscritas" selected={
          pathname.startsWith('/modulo/turmas/inscritas')
        } showable={data.permissions?.enterClasses || false} />

        <Row title="Minhas turmas" module="/modulo/turmas/minhas" selected={
          pathname.startsWith('/modulo/turmas/minhas')
        } showable={data.permissions?.createClasses || false} />

        <Row title="Criar turma" module="/modulo/turmas/criar" selected={
          pathname.startsWith('/modulo/turmas/criar')
        } showable={data.permissions?.createClasses || false} />
      </Node>

      <Node title="Atividades" Icon={MenuBookIcon} showable>
        <Row title="Atribuídas" module="/modulo/atividades" selected={
          pathname.startsWith('/modulo/atividades') && urlParsed.filtro !== 'pendentes'
        } showable={data.permissions?.enterClasses || false} />

        <Row title="Pendentes" module="/modulo/atividades?filtro=pendentes" selected={
          pathname.startsWith('/modulo/atividades') && urlParsed.filtro === 'pendentes'
        } showable={data.permissions?.enterClasses || false} />
      </Node>

      <Node title="Meu usuário" Icon={PersonIcon} showable>
        <Row title="Minha estatísticas" module="/modulo/usuario/estatisticas" selected={
          pathname.startsWith('/modulo/usuario/estatisticas')
        } showable={data.auth || false} />

        <Row title="Dados e configurações" module="/modulo/usuario/configuracoes" selected={
          pathname.startsWith('/modulo/usuario/configuracoes')
        } showable={data.auth || false} />

        <Row title="Alterar senha" showable={data.auth} onAction={() => { }} />
      </Node>

      <Node title="Configurações" Icon={SettingsIcon} showable>
        <Row title="Alterar tema" showable onAction={() => {

        }} />
        <Row title="Abrir o console" showable onAction={() => setOpenConsole(true)} />

        <Row title="Termos de uso" showable onAction={showPolicy} />

        <Row title="Sobre o SiGAÊ" showable onAction={showAbout} />
      </Node>

      <Node title="Chamados" Icon={EngineeringIcon} showable>
        <Row title="Meus chamados abertos" module="/modulo/chamados?filtro=abertos" selected={
          pathname.startsWith('/modulo/chamados') && urlParsed.filtro === 'abertos'
        } showable={data.auth || false} />

        <Row title="Meus chamados" module="/modulo/chamados" selected={
          pathname.startsWith('/modulo/chamados') && urlParsed.filtro !== 'abertos'
        } showable={data.auth || false} />

        <Row title="Abrir chamado" module="/modulo/chamados/abrir" selected={
          pathname.startsWith('/modulo/chamados/abrir')
        } showable={data.auth || false} />
      </Node>

      <Row title="Finalizar sessão" Icon={ExitToAppIcon} showable={
        data.auth
      } onAction={() => {
        sendDelete('/sessions/logout/cookie', {}, false, () => {
          window.location.reload()
        }, () => { })
      }} />
    </>
  )
}

export default Lines