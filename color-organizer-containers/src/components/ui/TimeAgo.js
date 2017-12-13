import  { ago } from '../../lib/time-helpers'
import React from 'react'
const TimeAgo = ({timestamp}) => {
    return <div className = "time-ago">
        {ago(timestamp)}
    </div>
}
export default TimeAgo