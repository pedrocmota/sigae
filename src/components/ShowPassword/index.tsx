import React from 'react'
import styled, {css} from 'styled-components'
import VisibilityIcon from '@mui/icons-material/Visibility'
import {ISides} from '../../types/components'

interface IShowPassword extends React.HTMLAttributes<HTMLDivElement>, ISides {
  selected: boolean,
  onClick: () => void
}

const ShowPassword: React.FunctionComponent<IShowPassword> = ({right, selected, onClick, top}) => {
  return (
    <Container right={right} top={top}>
      <ShowPasswordIcon selected={selected ? 1 : 0} onClick={() => {
        if (typeof onClick == 'function') onClick()
      }} aria-label={`${selected ? 'Ocultar senha' : 'Mostrar senha'}`} />
    </Container>
  )
}

const Container = styled.div<ISides>`
  position: absolute;
  display: flex;
  align-items: center;
  ${({top}) => top && css`
    top: ${top}px;
  `}
  right: ${props => props.right || '15'}px;
  cursor: pointer;
`

interface IShowPasswordIcon {
  selected: number
}

export const ShowPasswordIcon = styled(VisibilityIcon) <IShowPasswordIcon>`
  ${({selected}) => !selected && css`
    color: ${props => props.theme.components.showPassword.background};
  `};
  ${({selected}) => selected && css`
    color: ${props => props.theme.components.showPassword.backgroundSelected};
  `};
  font-size: 24px !important;
  cursor: pointer;
`

export default ShowPassword