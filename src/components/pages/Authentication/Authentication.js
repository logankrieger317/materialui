import React from 'react'
import Navbar from '../../Navbar/navbar'
import { Grid } from '@mui/material'
import BackButton from '../../CommonButton/BackButton'

function Authentication() {
  return (
    <Grid item xs={8} style={{marginLeft:'300px'}}>
    <BackButton/>
      <Navbar />
        This is the Authentication page
    
    </Grid>
  )
}

export default Authentication