import React from 'react'
import {withStyles} from '@material-ui/core/styles'
import Tooltip, {TooltipProps} from '@material-ui/core/Tooltip'

const Toolip: React.FC<TooltipProps> = (props) => {
  const LightTooltip = withStyles(() => ({
    tooltip: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#323232',
      color: '#ffffff',
      fontSize: 15,
      height: 36
    }
  }))(Tooltip)
  return (
    <LightTooltip {...props} enterTouchDelay={0}>
      {props.children as any}
    </LightTooltip>
  )
}

export default Toolip