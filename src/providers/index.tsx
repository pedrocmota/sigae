import React from 'react'
import {DataProvider} from './DataContext'
import {UIProvider} from './UIContext'
import {ConsoleProvider} from '../providers/ConsoleContext'
import {ToastProvider} from 'react-toast-notifications'
import {APIProvider} from './APIContext'
import Globalizer from './Globalizer'

const Providers: React.FunctionComponent<any> = (props) => {
  return (
    <DataProvider {...props}>
      <UIProvider {...props}>
        <ConsoleProvider>
          <ToastProvider autoDismiss={true} autoDismissTimeout={4500}>
            <APIProvider>
              <Globalizer>
                {props.children}
              </Globalizer>
            </APIProvider>
          </ToastProvider>
        </ConsoleProvider>
      </UIProvider>
    </DataProvider>
  )
}

export default Providers