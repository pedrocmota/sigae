import {useScreenSize} from 'react-more-hooks'

let lastWidth = -1

export const onResize = (callback: (width: number) => void) => {
  const evt = () => {
    const {width} = useScreenSize()
    if (lastWidth <= 0) {
      lastWidth = width
    } else {
      if (width != lastWidth) callback(width)
    }
  }
  window.addEventListener('resize', evt, true)
  return evt
}