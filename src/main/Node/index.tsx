import React, {useState} from 'react'
import {createContext, useContextSelector} from 'use-context-selector'
import {Container, Top, Bottom, Arrow} from './styles'
import SVGIcon from '@mui/material/SvgIcon'

export interface INode {
  title: string,
  Icon?: typeof SVGIcon,
  showable: boolean,
  moduloAssociado?: string
}

export interface INodeContext {
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const NodeContext = createContext<INodeContext>({} as INodeContext)

export const useNode = () => {
  const open = useContextSelector(NodeContext, (v) => v.open)
  const setOpen = useContextSelector(NodeContext, (v) => v.setOpen)
  return {
    open,
    setOpen
  }
}

const Node: React.FunctionComponent<INode> = ({Icon, ...props}) => {
  const [open, setOpen] = useState(false)

  const validChildren = () => {
    const children = props.children as any
    if (Array.isArray(children)) {
      return children.some((e) => e?.props?.showable === true)
    } else {
      return children?.props?.showable || false
    }
  }

  return (
    <>
      {props.showable && validChildren() && (
        <NodeContext.Provider value={{
          open,
          setOpen
        }}>
          <Container open={open} tabIndex={0} className="node"
            onKeyDown={(e) => {
              const inNode = document.activeElement?.classList.contains('node')
              if (e.key == 'Enter' && inNode) setOpen(!open)
              if (e.key == 'ArrowRight' && inNode) setOpen(true)
              if (e.key == 'ArrowLeft' && inNode) setOpen(false)
            }}>
            <Top open={open} onClick={() => {
              setOpen(!open)
            }}>
              {Icon && (
                <Icon />
              )}
              <p>{props.title}</p>
              <Arrow id="arrow" open={open} />
            </Top>
            <Bottom open={open}>
              {props.children}
            </Bottom>
          </Container>
        </NodeContext.Provider>
      )}
    </>
  )
}

export default Node