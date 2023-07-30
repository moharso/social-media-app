import React from 'react'
import TimeSchedule from '../TimeSchedule/TimeSchedule'
import CrossPost from '../CrossPost/CrossPost'
import TopBar from '../TopBar/TopBar'
import NavButton from '../../reusableComponents/navButton/NavButton'


const SettingsView = () => {

  return (
    <div>
      <TopBar></TopBar>
      <TimeSchedule></TimeSchedule>
      <CrossPost></CrossPost>
      <NavButton buttonText='return'></NavButton>
      <NavButton buttonText='next'></NavButton>
    </div>
  )
}

export default SettingsView