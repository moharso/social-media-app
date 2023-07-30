import React from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

interface NavButtonProps {
    buttonText: string;
}

const NavButton = ({buttonText}: NavButtonProps) => {
  return (
    <div>
        <Stack spacing={2} direction='row' padding={5}>
            <Button variant='contained'>{buttonText}</Button>
        </Stack>
    </div>
  )
}

export default NavButton