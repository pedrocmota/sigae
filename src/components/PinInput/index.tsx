import React, {useEffect, useRef} from 'react'
import {ReactCodeInputProps} from 'react-code-input'
import {InputStyled} from './styles'
import {inServer} from '../../../utils/index'

interface IPinInput extends ReactCodeInputProps {
  onAction?: (v: string) => void
}

const PinInput: React.FC<IPinInput> = ({onAction, ...props}) => {
  const input = useRef<any>(null)
  useEffect(() => {
    if (input.current) {
      const inputs = input.current.textInput as HTMLInputElement[]
      const last = inputs[inputs.length - 1]
      inputs.forEach((el) => {
        el.placeholder = '●'
      })
      last.onkeydown = (e) => {
        if (e.key == 'Enter' && typeof onAction == 'function' && last.value != '') {
          onAction(inputs.map(a => a.value).join(''))
        }
      }
    }
  }, [])
  return (
    <div suppressHydrationWarning>
      {!inServer() && (
        <InputStyled {...props} ref={input} />
      )}
    </div>
  )
}

export default PinInput