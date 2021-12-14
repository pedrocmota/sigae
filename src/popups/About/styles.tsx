import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  width: 100%;
  margin-top: 15px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 17px;
  a {
    color: #039be5;
  }
  .version {
    margin-top: 15px;
    font-size: 17px;
  }
  .dev {
    margin-top: 14px;
    margin-bottom: 8px;
    font-size: 17px;
    font-weight: bold;
  }
  .git {
    margin-left: 6px;
  }
`