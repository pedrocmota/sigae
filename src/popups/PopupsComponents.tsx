import React from 'react'
import styled from 'styled-components'
import sigaeSVG from '../../public/sigae.svg'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  iframe {
    width: 100%;
    height: 100%;
  }
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
  margin-top: 6px;
`

export const Sigae: React.FunctionComponent = () => {
  return (
    <img src={sigaeSVG} width={150} height={52} alt="Logo do SiGÊ" />
  )
}

export const Title = styled.h2`
  padding-top: 6px;
  font-size: 20px;
  color: ${props => props.theme.components.popup.title};
`

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`

export const Overflow = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: auto;
  margin-bottom: 10px;
  font-size: 16px;
`

export const MultiLine = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  font-size: 18px;
  white-space: pre-line;
`