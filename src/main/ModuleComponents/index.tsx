import React from 'react'
import styled from 'styled-components'
import Toolip from '../../components/Toolip'
import SVGIcon from '@mui/material/SvgIcon'

export const ModuleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-left: 10px;
  padding-right: 10px;
`

export const ModuleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-grow: 1;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  overflow-x: auto;
`

const Header = styled.div`
  display: flex;
  width: 100%;
  min-height: 56px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 24px;
  padding-bottom: 20px;
  @media (max-height: 820px) {
    padding-bottom: 10px;
  }
`

const Title = styled.div`
  display: inline-flex;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.pages.main.moduleController.color};
  min-height: 33px;
  color: ${props => props.theme.pages.main.moduleController.color};
  transition: color 50ms;
  user-select: none;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.pages.main.moduleController.hover} !important;
    border-bottom: 1px solid ${props => props.theme.pages.main.moduleController.hover};
  }
  .icon {
    width: 30px;
    height: 30px;
    color: inherit;
  }
  .title {
    font-size: 26px;
    color: inherit;
    padding-left: 5px;
  }
`

interface IModuleHeader {
  title: string,
  Icon: typeof SVGIcon
}

export const ModuleHeader: React.FunctionComponent<IModuleHeader> = ({title, Icon}) => {
  return (
    <Header>
      <Toolip title={title}>
        <Title>
          <Icon className="icon" />
          <span className="title">{title}</span>
        </Title>
      </Toolip>
    </Header>
  )
}