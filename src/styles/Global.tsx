import {createGlobalStyle, css} from 'styled-components'

const GlobalStyles = createGlobalStyle`
  ${({theme}) => theme.title !== 'Light' && css`
    ::-webkit-scrollbar{
      width: 15px;
      height: 15px;
    }

    ::-webkit-scrollbar-track {
      background: ${props => props.theme.global.scrollbar.track.background};
      border-radius: 0px;
      box-shadow: inset 0px 0px 0px 0px ${props => props.theme.global.scrollbar.track.foreground};
    }

    ::-webkit-scrollbar-thumb {
      background: ${props => props.theme.global.scrollbar.thumb.background};
      border-radius: 0px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: ${props => props.theme.global.scrollbar.thumb.hover};
    }
  `}

  body::-webkit-scrollbar {
    width: 1em;
  }

  body::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  body::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: background-color 200ms, color 200ms;
  }

  @font-face {
    font-family: 'Comfortaa';
    src: local('Comfortaa'), url('/fonts/Comfortaa-Regular.woff') format('woff');
  }
  
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100vh;
    width: 100vw;
  }

  ::selection {
    background: ${props => props.theme.global.selection.background};
    color: ${props => props.theme.global.selection.foreground};
  }

  #__next {
    width: 100vw;
    height: 100vh;
  }

  .MuiButtonBase-root {
    text-transform: none !important;
  }

  .react-toast-notifications__container {
    z-index: 2000;
    & > div {
      height: 60px !important;
      margin-bottom: 10px;
      .react-toast-notifications__toast {
        height: 100%;
        margin-bottom: 0px !important;
        .react-toast-notifications__toast__icon-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .react-toast-notifications__toast__content {
          display: flex;
          align-items: center;
          font-size: 18px;
        }
      }
    }
  }

  .fixedPopper {
    background-color: ${props => props.theme.components.select.popup.background} !important;
    color: ${props => props.theme.components.select.popup.foreground} !important;
    ul {
      .MuiAutocomplete-option[data-focus="true"] {
        background-color: ${props => props.theme.components.select.popup.backgroundFocus};
        color: ${props => props.theme.components.select.popup.foregroundFocus};
      }
      .MuiAutocomplete-option[aria-selected="true"] {
        background-color: ${props => props.theme.components.select.popup.backgroundSelected} !important;
        color: ${props => props.theme.components.select.popup.foregroundSelected} !important;
      }
    }
  }

  .MuiAutocomplete-noOptions {
    color: ${props => props.theme.components.select.popup.foreground} !important;
  }

  .MuiTooltip-popper {
    z-index: 10500 !important;
  }

  .MuiTooltip-popper > div {
    background-color: ${props => props.theme.global.tooltip.background};
    color: ${props => props.theme.global.tooltip.foreground};
  }

  .MuiMenu-root {
    .MuiPaper-root {
      background: transparent;
    }
    ul {
      display: flex;
      flex-direction: column;
      width: 100%;
      background-color: ${props => props.theme.global.menu.background};
      li {
        width: 100%;
        min-height: 38px;
        padding-left: 15px;
        padding-right: 15px;
        color: ${props => props.theme.global.menu.foreground};
        text-align: left !important;
      }
      li.Mui-selected {
        background-color: ${props => props.theme.global.menu.selected.background} !important;
        color: ${props => props.theme.global.menu.selected.foreground} !important;
      }
    }
  }

  .animated {
    -webkit-animation-duration: 300ms;
    animation-duration: 300ms;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both
  }

  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0
    }
    to {
      opacity: 1
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0
    }
    to {
      opacity: 1
    }
  }

  .fadeIn {
    -webkit-animation-name: fadeIn;
    animation-name: fadeIn;
  }

  @-webkit-keyframes fadeOut {
    0% {
      opacity: 1
    }
    to {
      opacity: 0;
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 1
    }
    to {
      opacity: 0;
    }
  }

  .fadeOut {
    -webkit-animation-name: fadeOut;
    animation-name: fadeOut;
  }
`

export default GlobalStyles