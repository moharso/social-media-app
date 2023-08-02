import React from 'react'
import NavButton from '../../../reusableComponents/navButton/NavButton'

const Confirmation = () => {
  return (
    <div>
      <NavButton buttonText='Edit' to='/post'></NavButton>
      <NavButton buttonText='Back to calendar' to='/'></NavButton>
    </div>
  )
}

export default Confirmation