import React, {useState, useEffect} from 'react'
import Fade from '../Fade'
import SigaeIcon from '../../../public/sigae-loading.svg'
import SigaeIconLight from '../../../public/sigae-loading-light.svg'
import {useUI} from '../../providers/UIContext'
import {Container} from './styles'

interface ILoading {
  timer?: number,
  visible?: boolean
}

const Loading: React.FunctionComponent<ILoading> = (props) => {
  const [visible, setVisible] = useState(true)
  const {themeName} = useUI()
  useEffect(() => {
    if (props.visible === undefined) {
      const counter = setTimeout(() => {
        setVisible(false)
      }, props.timer || 300)
      return () => {
        clearTimeout(counter)
      }
    }
  }, [])
  return (
    <Fade className="loadingFade" visible={props.visible !== undefined ? props.visible : visible} timer={600}
      style={{position: 'absolute', zIndex: 9000}}>
      <Container>
        {(themeName === 'LIGHT') && (
          <img src={SigaeIcon} />
        )}
        {(themeName === 'DARK') && (
          <img src={SigaeIconLight} />
        )}
      </Container>
    </Fade>
  )
}

export default Loading