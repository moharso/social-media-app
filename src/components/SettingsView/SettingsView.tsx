import React from 'react'
import TimeSchedule from '../TimeSchedule/TimeSchedule'
import CrossPost from '../CrossPost/CrossPost'
import TopBar from '../TopBar/TopBar'

const SettingsView = () => {
  return (
    <div>
      <TopBar></TopBar>
      <TimeSchedule></TimeSchedule>
      <CrossPost></CrossPost>
    </div>
  )
}

export default SettingsView