import {createGlobalStyle} from 'styled-components'

const PopupStyles = createGlobalStyle`
  .swal2-popup {
    display: flex !important;
    flex-direction: column !important;
    padding-left: 0px !important;
    padding-right: 0px !important;
    background-color: ${props => props.theme.components.popup.background} !important;
    padding-top: 0px;
    padding-bottom: 5px;
  }

  .swal2-actions {
    margin-top: 0px;
    width: 100%;
    height: 50px;
  }

  .swal2-confirm, .swal2-deny {
    min-width: 100px !important;
  }

  .swal2-html-container {
    display: flex !important;
    flex-direction: column;
    flex: 1;
    margin-left: 15px !important;
    margin-right: 15px !important;
    margin-top: 0px !important;
    color: ${props => props.theme.components.popup.foreground} !important;
    .styledContainer {
      height: 100%;
      .componentContainer {
        height: calc(100% - 100px);
        overflow-y: auto;
      }
    }
  }

  .swal2-content {
    display: flex;
    flex: 1 !important;
    max-height: calc(100% - 60px);
    padding-left: 20px;
    padding-right: 20px;
    text-align: left !important;
  }

  .swal2-content-height-100 {
    .swal2-content {
      max-height: none !important;
    }
  }

  .swal2-confirm {
    background-color: ${props => props.theme.components.popup.okButton.background} !important;
    color: ${props => props.theme.components.popup.okButton.foreground} !important;
    &:disabled {
      background-color: ${props => props.theme.components.popup.okButton.disabled.background} !important;
      color: ${props => props.theme.components.popup.okButton.disabled.foreground} !important;
      background-image: none !important;
    }
  }

  .swal2-deny {
    background-color: ${props => props.theme.components.popup.cancelButton.background} !important;
    color: ${props => props.theme.components.popup.cancelButton.foreground} !important;
    &:disabled {
      background-color: ${props => props.theme.components.popup.cancelButton.disabled.background} !important;
      color: ${props => props.theme.components.popup.cancelButton.disabled.foreground} !important;
      background-image: none !important;
    }
  }
`

export default PopupStyles