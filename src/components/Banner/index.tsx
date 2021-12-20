import React from 'react'
import {BannerWrapper} from './styles'

export type bannerTypes = 'neutral' | 'success' | 'warning' | 'error'

export interface IBanner extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode,
  type: bannerTypes
}

const Banner: React.FunctionComponent<IBanner> = (props) => {
  return (
    <BannerWrapper margin={{bottom: 10}} {...props}>
      {props.children}
    </BannerWrapper>
  )
}

export default Banner