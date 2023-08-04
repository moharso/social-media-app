import React from 'react'
import NavButton from '../../../reusableComponents/navButton/NavButton'
import myUsersList from '../../data/data'

const Confirmation = () => {
  const userName = myUsersList[0].userName

  return (
    <div>
      <div>
        <h2>Your post is scheduled</h2>
        <label>{userName}</label>
      </div>
      <NavButton buttonText='Schedule a new post' to='/post'></NavButton>
      <NavButton buttonText='Back to calendar' to='/'></NavButton>
    </div>
  )
}

export default Confirmation