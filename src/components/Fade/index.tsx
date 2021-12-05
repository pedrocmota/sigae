import React, {useState, useRef, useEffect} from 'react'
import {useDidMountEffect, useForceUpdate} from 'react-more-hooks'

interface IFade extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode,
  style?: any,
  visible: boolean,
  timer?: number
}

const Fade: React.FunctionComponent<IFade> = ({children, style, visible = true, timer = 300, ...props}) => {
  const [render, setRender] = useState(visible)
  const first = useRef(true)
  const force = useForceUpdate()

  useEffect(() => {
    if (visible) setRender(true)
  }, [visible])

  const onAnimationEnd = () => {
    if (!visible) setRender(false)
  }

  useDidMountEffect(() => {
    first.current = false
    force()
  }, [visible])

  const animation = (() => {
    if (first.current) {
      return ''
    } else {
      return `${visible ? 'container_fadeIn' : 'container_fadeOut'} ${timer}ms`
    }
  })()

  return (
    <>
      {render && (
        <div {...props}
          style={{
            animation: animation,
            ...style
          }}
          onAnimationEnd={onAnimationEnd}
        >
          {children}
        </div>
      )}
    </>
  )
}

export default Fade