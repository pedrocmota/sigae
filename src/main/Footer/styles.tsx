import styled from 'styled-components'

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  min-height: 150px;
  background-color: ${props => props.theme.components.footer.background};
  @media (max-height: 820px) {
    height: 120px !important;
    min-height: 120px !important;
  }
`

export const Sigae = styled.div`
  display: inline-flex;
  font-size: 20px;
  text-align: center;
  color: ${props => props.theme.components.footer.sigae};
  .footer_right {
    margin-left: 5px;
  }
  @media (max-width: 600px) {
    display: inline-block;
  }
`

export const Copyright = styled.div`
  font-size: 17px;
  color: ${props => props.theme.components.footer.copyright};
  margin-top: 30px;
  a {
    margin-left: 5px;
    transition: color 300ms;
    text-decoration: none;
    color: ${props => props.theme.components.footer.link};
    &:hover {
      color: ${props => props.theme.components.footer.linkHover};
      text-decoration: underline;
    }
  }
  .ifba_small {
    display: none;
  }
  @media (max-width: 544px) {
    .ifba_small {
      display: inline;
    }
    .ifba_big {
      display: none;
    }
    margin-top: 20px;
  }
  @media (max-width: 320px) {
    font-size: 15px;
  }
`