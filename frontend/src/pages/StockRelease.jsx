import React from 'react'
import SideBar from '../pages/SideBar'
import { Grid, Typography } from '@mui/material'

const StockRelease = () => {
  return (
    <Grid container>
      <Grid item>
        <SideBar />
      </Grid>

      <Grid item xs={10} marginTop={12}>
        <Grid item xs={12} align='center'>
          <Typography variant='h4'> Stock Release </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default StockRelease
