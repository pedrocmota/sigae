import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    ${props => props.theme.pages.login.gradient.start},
    ${props => props.theme.pages.login.gradient.end}
  );
`

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 720px;
  height: 538px;
  box-shadow: 6px 6px 5px 0px rgba(0, 0, 0, 0.1);
  background-color: ${props => props.theme.pages.login.container};
  border-radius: 5px;
  overflow: hidden;
  @media (max-width: 780px) {
    width: 100%;
    height: 100%;
  } 
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  h1 {
    white-space: nowrap;
    font-size: 20px;
    text-align: center;
    font-weight: 500 !important;
    margin-top: 10px;
    margin-bottom: 10px;
    line-height: 1.1;
    color: ${props => props.theme.pages.login.title};
  }
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 70%;
  padding-top: 20px;
  margin-bottom: 40px;
  @media (max-width: 780px) {
    width: 80%;
    margin-bottom: 0px;
    margin-top: 50px;
  }
  @media (max-width: 400px) {
    width: 85%;
  }
  @media (max-height: 600px) {
    margin-top: 25px;
  }
`

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: ${props => props.theme.pages.login.footer.background};
    font-weight: 500;
    color: ${props => props.theme.pages.login.footer.foreground};
  a {
    color: ${props => props.theme.pages.login.footer.link.foreground};
    text-decoration: none;
    padding-left: 6px;
    &:hover {
      color: ${props => props.theme.pages.login.footer.link.foregroundHover};
      text-decoration: underline;
    }
  }
`

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 12px;
  .column {
    text-align: center;
  }
  @media (max-width: 436px) {
    flex-direction: column;
    justify-content: center;
    .leftLink {
      margin-top: 25px;
      display: inline-flex;
    }
    .rightLink {
      margin-top: 25px;
      display: inline-flex;
    }
  }
`

export const LinksRow = styled.div`
  position: relative;
  height: 24px;
  font-size: 16px;
  font-weight: 500;
  white-space: nowrap;
  color: ${props => props.theme.pages.login.links.foreground};
  user-select: none;
  transition: color 0.7s;
  a {
    color: unset !important;
    text-decoration: none !important;
  }
  &:hover {
    color: ${props => props.theme.pages.login.links.foregroundHover};
    cursor: pointer;
    padding-bottom: 2px;
  }
  &:after {
    position: absolute;
    display: block;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 50%;
    content: "";
    background: none repeat scroll 0 0 transparent;
    background: ${props => props.theme.pages.login.links.foregroundAfter};
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
  }
  &:hover:after {
    position: absolute;
    width: 100%;
    left: 0;
  }
  @media (max-width: 436px) {
    font-size: 20px;
  }
`