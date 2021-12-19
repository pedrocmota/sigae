import styled from 'styled-components'
import {CardActionArea} from '@material-ui/core'

interface IContainer {
  selected: boolean
}

export const Card = styled(CardActionArea)`
  margin-top: 4px;
  margin-bottom: 4px;
`

export const Container = styled.div<IContainer>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 8px;
  padding-right: 8px;
  border: solid 1px ${props => props.selected ? '#adadad' : '#dadada'};
  border-radius: 2px;
  box-shadow: 0px 1px 1px -1px rgb(0 0 0 / 10%), 0px 1px 1px 0px rgb(0 0 0 / 6%), 0px 1px 1px 0px rgb(0 0 0 / 6%);
  transition: 100ms border;
`

export const Top = styled.div`
  display: inline-flex;
  width: 100%;
  font-size: 16px;
  align-items: center;
  svg {
    margin-right: 3px;
  }
`

export const Bottom = styled.div`
  width: 100%;
  text-align: left;
  font-size: 16px;
  margin-top: 8px;
`

export const Selected = styled.div`
  margin-left: 4px;
  color: #32323D;
  font-weight: 550;
`