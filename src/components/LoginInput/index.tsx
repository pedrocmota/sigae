import React, {useState, useCallback, forwardRef} from 'react'
import {Container, Input, Placeholder} from './styles'
import {IMargin, IPadding} from '../../types/components'

export interface LoginInput extends React.InputHTMLAttributes<HTMLInputElement>, IMargin, IPadding {
  error?: boolean,
  width?: string,
  height?: string,
  fontSize?: number,
  borderSize?: number
}

const LoginInput: React.ForwardRefRenderFunction<HTMLInputElement, LoginInput> = ({
  children, error, ...props
}, ref) => {
  const [visible, setVisible] = useState(false)

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (visible) {
      if (value.length == 0) setVisible(false)
    } else {
      if (value.length > 0) setVisible(true)
    }
  }, [visible, setVisible])

  return (
    <Container margin_left={props.margin_left} margin_right={props.margin_right}
      margin_top={props.margin_top} margin_bottom={props.margin_bottom}>
      <Placeholder className="placeholder" visible={visible} error={error}>
        {props.placeholder}
      </Placeholder>
      <Input error={error || false} spellCheck={false} {...props} ref={ref}
        padding_left={props.padding_left} padding_right={props.padding_right}
        padding_top={props.padding_top} padding_bottom={props.padding_bottom}
        onChange={(e) => {
          onChange(e)
          if (props.onChange) {
            props.onChange(e)
          }
        }} />
      {children}
    </Container>
  )
}

export default forwardRef(LoginInput)