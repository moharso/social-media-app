import React from 'react'
import NavButton from '../../reusableComponents/navButton/NavButton'

const TopBar = () => {
  return (
    <div>
        <ul>
        <li>Content</li>
        <li>Settings</li>
        <li>Confirmation</li>
        </ul>
        <NavButton buttonText='close' to='/' />
    </div>
  )
}

export default TopBar