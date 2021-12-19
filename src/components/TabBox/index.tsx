import React, {useState} from 'react'
import MaterialTab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import Panel from '@mui/lab/TabPanel'

interface ITab {
  initialValue: string,
  tabs: JSX.Element[],
  children: React.ReactNode
}

const TabBox: React.FunctionComponent<ITab> = (props) => {
  const [value, setValue] = useState(props.initialValue)

  const handleChange = (e: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <TabContext value={value}>
      <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
        <TabList onChange={handleChange}>
          {props.tabs.map((Tab) => {
            return Tab
          })}
        </TabList>
      </Box>
      {props.children}
    </TabContext>
  )
}

export const TabHeader = MaterialTab
export const TabPanel = Panel

export default TabBox