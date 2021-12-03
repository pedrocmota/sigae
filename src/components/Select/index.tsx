import React, {useMemo, useRef} from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete'
import InputText, {IInput} from '../PrimaryInput'
import {Container, Arrow} from './styles'
import {IMargin} from '../../types/components'

export interface IOptions {
  value: string,
  grupo?: string
}

export type options = String[] | {
  [key: string]: String[]
}

interface ISelect extends IMargin {
  placeholder: string,
  options: options,
  defaultValue?: string | string[],
  multiple?: boolean,
  disabled?: boolean,
  onChange?: (obj: any, event?: React.ChangeEvent<{}>) => void,
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>,
  inputStyles?: IInput,
  input?: React.FC
}

const Select: React.FunctionComponent<ISelect> = ({
  inputStyles, input, options, defaultValue, onChange,
  margin_top, margin_bottom, margin_left, margin_right,
  ...props}) => {
  const selectedCounter = useRef<number>(
    defaultValue == undefined ? 0 : defaultValue.length
  )
  return (
    <Autocomplete
      options={process(options) as IOptions[]}
      {...(defaultValue ? {
        defaultValue: processDefaultValue(defaultValue)
      } : {})}
      noOptionsText="Nada encontrado"
      getOptionLabel={(option: any) => option.value}
      groupBy={(option: any) => option.grupo}
      getOptionSelected={(option: any, value: any) => {
        return option.value === value.value
      }}
      disableCloseOnSelect={props.multiple == true}
      onChange={(ev: any, value: any) => {
        if (Array.isArray(value)) {
          selectedCounter.current = value.length
        }
        if (onChange) {
          if (!value) return onChange('', ev)
          if (!props.multiple) {
            return onChange(value.value, ev)
          } else {
            return onChange((value as any[]).map((v) => v.value), ev)
          }
        }
      }}
      classes={{
        paper: 'fixedPopper',
        input: 'input'
      }}
      renderInput={(params) => {
        const Input = useMemo(() => {
          return input == undefined ? InputText : input
        }, [])
        const placeholder = useMemo(() => {
          if (props.multiple != true) return props.placeholder
          if (selectedCounter.current == 0) return props.placeholder
          if (selectedCounter.current == 1) return `${selectedCounter.current} opção foi selecionada`
          if (selectedCounter.current > 1) return `${selectedCounter.current} opções foram selecionadas`
        }, [props.placeholder, selectedCounter.current, props.multiple])
        return (
          <Container ref={params.InputProps.ref} margin_top={margin_top} margin_bottom={margin_bottom}
            margin_left={margin_left} margin_right={margin_right}
          >
            <Input {...params.inputProps} placeholder={placeholder} {...inputStyles} padding_right={30}
              {...(props.disabled ? {value: ''} : {})} />
            <Arrow width={28} height={28} />
          </Container>
        )
      }}
      {...props}
    />
  )
}

const process = (options: options) => {
  if (Array.isArray(options)) {
    return options.map((v) => {
      return {value: v}
    })
  } else {
    var returnArray = []
    Object.keys(options).forEach((key) => {
      const array = options[key]
      returnArray = returnArray.concat(
        array.map((v) => {
          return {value: v}
        }) as any
      )
    })
    return returnArray
  }
}

const processDefaultValue = (defaultValue: string | string[]) => {
  if (typeof defaultValue === 'string') {
    return {value: defaultValue}
  } else {
    return process(defaultValue)
  }
}

export default Select