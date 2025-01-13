/** @format */

import React from 'react'
import { Button } from '@mui/material'

export default function HeaderItem({ children }: { children?: React.ReactNode }) {
  return (
    <Button sx={{ marginLeft: '20px' }} color={'inherit'} size={'large'}>
      {children}
    </Button>
  )
}
