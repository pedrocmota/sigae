import React from 'react'
import SwalAlert, {SweetAlertOptions} from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {ISize} from '../types/components'

export const showPopup = async <T extends unknown>(Component: React.FunctionComponent<any>,
  options: SweetAlertOptions, size?: ISize, props?: T
) => {
  const Swal = withReactContent(SwalAlert)
  return Swal.fire({
    ...options,
    html: (
      <Component {...props} />
    ),
    didOpen: (componente) => {
      if (size?.width) componente.style.width = size?.width
      if (size?.height) componente.style.height = size?.height
      if (options.didOpen) {
        options.didOpen(componente)
      }
    }
  })
}