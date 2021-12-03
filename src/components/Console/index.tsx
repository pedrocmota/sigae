import React from 'react'
import {v4 as uuid4} from 'uuid'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import Slide from '@material-ui/core/Slide'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import {TransitionProps} from '@material-ui/core/transitions'
import Collapsible from './Collapsible'
import {Dialog, ConsoleBar, Container, EmptyText} from './styles'
import {useConsole} from '../../providers/ConsoleContext'
import {Delete, Close, Brush} from '@material-ui/icons'
import siIcon from '../../../public/si.svg'
import {useUI} from '../../providers/UIContext'

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {children?: React.ReactElement},
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

const Console: React.FunctionComponent = () => {
  const {openConsole, setOpenConsole, entries, clearConsole} = useConsole()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const {themeName, changeTheme} = useUI()
  return (
    <Dialog fullScreen open={openConsole}
      onClose={() => setOpenConsole(false)} TransitionComponent={Transition}>
      <ConsoleBar>
        <div className="consoleBar left">
          <img src={siIcon} width={40} alt="Logo em miniatura do SiGAÊ" />
          <h2>Console do SiGAÊ</h2>
        </div>
        <div className="consoleBar right">
          <Tooltip title="Alterar tema">
            <IconButton className="themes" edge="start" color="inherit"
              aria-label="alterar tema" onClick={(e) => {
                setAnchorEl(e.currentTarget)
              }}>
              <Brush />
            </IconButton>
          </Tooltip>
          <Tooltip title="Limpar console">
            <IconButton className="clear" edge="start" color="inherit"
              onClick={clearConsole} aria-label="limpar">
              <Delete />
            </IconButton>
          </Tooltip>
          <Tooltip title="Fechar console">
            <IconButton className="close" edge="start" color="inherit"
              onClick={() => setOpenConsole(false)} aria-label="close">
              <Close />
            </IconButton>
          </Tooltip>
          <Menu
            id="themes"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
          >
            <MenuItem selected={themeName === 'LIGHT'} onClick={() => {
              setAnchorEl(null)
              changeTheme('LIGHT')
            }}>Tema claro</MenuItem>
            <MenuItem selected={themeName === 'DARK'} onClick={() => {
              setAnchorEl(null)
              changeTheme('DARK')
            }}>Tema escuro</MenuItem>
          </Menu>
        </div>
      </ConsoleBar>
      <Container isEmpty={entries.length == 0}>
        {entries.map((item) => (
          <Collapsible {...item} key={uuid4()} />
        ))}
        {entries.length == 0 && (
          <EmptyText>O console, por enquanto, está vazio.</EmptyText>
        )}
      </Container>
    </Dialog>
  )
}

export default Console