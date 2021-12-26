import styled, {css} from 'styled-components'
import {IBanner} from './index'

export const BannerWrapper = styled.div<IBanner>`
  display: flex;
  align-items: center;
  width: 100%;
  border-left: solid 2px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  svg {
    margin-right: 10px;
  }
  ${({type}) => type === 'neutral' && css`
    background-color: rgba(52,152,219,0.2);
    color: #292929;
    border-color: #3498db;
    .colored {
      color: #3498db;
    }
  `}
  ${({type}) => type === 'success' && css`
    background-color: rgba(37,162,90,0.2);;
    color: #292929;
    border-color: #25a25a;
  .colored {
    color: #25a25a;
  }
  `}
  ${({type}) => type === 'warning' && css`
    background-color: rgba(194,157,11,0.2);;
    color: #292929;
    border-color: #c29d0b;
  .colored {
    color: #c29d0b;
  }
  `}
  ${({type}) => type === 'error' && css`
    background-color: rgba(231,76,60,0.2);
    color: #292929;
    border-color: #e74c3c;
  .colored {
    color: #e74c3c;
  }
  `}

  ${({margin}) => margin?.top && css`
    margin-top: ${margin.top}px !important;
  `}
  ${({margin}) => margin?.bottom && css`
  margin-bottom: ${margin.bottom}px !important;
  `}
  ${({margin}) => margin?.left && css`
  margin-left: ${margin.left}px !important;
  `}
  ${({margin}) => margin?.right && css`
  margin-right: ${margin.right}px !important;
  `}
`