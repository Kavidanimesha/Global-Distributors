import React, { useState } from 'react'
import SideBar from './SideBar'
import { Button, Grid,TextField,Typography } from '@mui/material'

const AddShop = () => {

  const [ formData , setFormData ] = useState({
    shopName: '',
    ownerName: '',
    address: '',
    phone1: '',
    phone2: ''
  })

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <Grid container>
      <Grid item>
        <SideBar />
      </Grid>

      <Grid item xs={10} marginTop={12}>
        <Grid item xs={12} align='center' marginBottom={5}>
          <Typography variant='h4'> Add Shop </Typography>
        </Grid>

            <form style={{marginLeft:'20px'}}>
              <Grid container spacing={2} marginBottom={2}>
                <Grid item xs={6}>
                  <TextField fullWidth name='shopName' value={formData.shopName} onChange={handleChange} label='Shop Name' />
                </Grid>
                <Grid item xs={6}>
                  <TextField fullWidth name='ownerName' value={formData.ownerName} onChange={handleChange} label='Owner Name' />
                </Grid>
              </Grid>

              <Grid item xs={12} marginBottom={3}>
                <TextField fullWidth name='address' value={formData.address} onChange={handleChange} label='Adress' />
              </Grid>

              <Grid container spacing={2} marginBottom={3}>
                <Grid item xs={6}>
                  <TextField fullWidth name='phone1' value={formData.phone1} onChange={handleChange} label='Phone 1' />
                </Grid>
                <Grid item xs={6}>
                  <TextField fullWidth name='phone2' value={formData.phone2} onChange={handleChange} label='Phone 2' />
                </Grid>
              </Grid>

              <Grid item xs={12} align='center'>
                <Button variant='contained' color='success' onClick={handleSubmit}> Submit </Button>
              </Grid>
            </form>
        </Grid>
      </Grid>
  )
}

export default AddShop