import React from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { NavLink } from 'react-router-dom'

interface NavButtonProps {
    buttonText: string;
    to: string;
    onClick?: () => any;
}

const NavButton = ({buttonText, to, onClick}: NavButtonProps) => {
  return (
    <div>
        <Stack spacing={2} direction='row' padding={5}>
          <NavLink to={to}>
            <Button variant='contained' onClick={onClick}>{buttonText}</Button>
            </NavLink>
        </Stack>
    </div>
  )
}

export default NavButton