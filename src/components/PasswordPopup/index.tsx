import React, {useMemo, memo} from 'react'
import Colorbar from '../Colorbar'
import Requirement from './components/Requirement'
import {useUI} from '../../providers/UIContext'
import {passwordStrength} from '../../utils/Validation'
import {FadeContainer, InternalContainer} from './styles'

interface IPopupSenha {
  visible: boolean,
  password: string
}

const PasswordPopup: React.FunctionComponent<IPopupSenha> = ({password, ...props}) => {
  const {theme} = useUI()
  const strength = useMemo(() => passwordStrength(password), [password])
  const [text, color, barStrength] = useMemo(() => {
    if (strength.strength === 0) {
      return ['Inválida', theme.components.passwordPopup.colors.bad, 0]
    }
    if (strength.strength === 1) {
      return ['Muito fraca', theme.components.passwordPopup.colors.bad, 10]
    }
    if (strength.strength === 2) {
      return ['Fraca', theme.components.passwordPopup.colors.bad, 20]
    }
    if (strength.strength === 3) {
      return ['Média', theme.components.passwordPopup.colors.medium, 40]
    }
    if (strength.strength === 4) {
      return ['Forte', theme.components.passwordPopup.colors.good, 100]
    }
    return ['Desconhecida', theme.components.passwordPopup.colors.bad]
  }, [password])
  return (
    <FadeContainer className="passwordPopup" visible={props.visible} timer={200}>
      <InternalContainer color={color}>
        <div className="top">
          <span className="text">Força da senha:</span>
          <span className="color">
            {text}
          </span>
          <Colorbar style={{marginTop: '10px'}} percentage={barStrength!}
            background={theme.components.passwordPopup.colorBar.background}
            foreground={theme.components.passwordPopup.colorBar.foreground}
          />
        </div>
        <div className="bottom">
          <Requirement text="Entre 6 e 500 caracteres: " realized={strength.validSize} />
          <Requirement text="Presença de números: " realized={strength.validNumbers} />
          <Requirement text="Presença de maiúsculas: " realized={strength.validUppercase} />
          <Requirement text="Presença de especiais: " realized={strength.validSpecials} />
        </div>
      </InternalContainer>
    </FadeContainer>
  )
}

export default memo(PasswordPopup)