import React, {memo} from 'react'
import {Container, Left, Right, HamburguerContainer} from './styles'
import {useMain} from '../index'
import {inServer} from '../../../utils'
import Sigae from '../../../public/sigae-light.svg'

const Header: React.FC = () => {
  const {openSidebar, setOpenSidebar} = useMain()
  return (
    <Container>
      <Left suppressHydrationWarning>
        {!inServer() && (
          <HamburguerContainer data-activates="slide-out" className="button-collapse">
            <div className={
              `hamburger hamburger--collapse js-hamburger
            ${openSidebar ? 'is-active' : ''}
          `} onClick={() => {setOpenSidebar(!openSidebar)}}>
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </div>
          </HamburguerContainer>
        )}
        <img src={Sigae} width={200} />
      </Left>
      <Right>
      </Right>
    </Container>
  )
}

export default memo(Header)