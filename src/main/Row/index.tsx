import React, {useEffect} from 'react'
import Link from 'next/link'
import {LinkContainer} from './styles'
import {useNode} from '../Node'
import SVGIcon from '@mui/material/SvgIcon'

export interface IRow {
  title: string,
  Icon?: typeof SVGIcon,
  selected?: boolean,
  showable: boolean,
  module?: string,
  onAction?: () => void
}

const Row: React.FunctionComponent<IRow> = ({Icon, ...props}) => {
  const {setOpen} = useNode()

  const onKeyUp = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && props.onAction) {
      props.onAction()
    }
  }

  useEffect(() => {
    if (props?.selected && setOpen) {
      setOpen(true)
    }
  }, [])

  return (
    <>
      {props.showable && (
        <>
          {!props.module && (
            <LinkContainer className="row" onClick={props.onAction} onKeyUp={onKeyUp} tabIndex={0}
              active={props.selected || false}>
              {Icon && (
                <Icon />
              )}
              <p>{props.title}</p>
            </LinkContainer>
          )}
          {props.module && (
            <Link href={props.module}>
              <LinkContainer className="row" onClick={props.onAction} onKeyUp={onKeyUp} tabIndex={0}
                active={props.selected || false}>
                {Icon && (
                  <Icon />
                )}
                <p>{props.title}</p>
              </LinkContainer>
            </Link>
          )}
        </>
      )}
    </>
  )
}

export default Row