import React, { useState } from 'react'
import SideBar from './SideBar'
import { Button, Grid,TextField,Typography } from '@mui/material'

const AddStaff = () => {

  const [ formData , setFormData ] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone1: '',
    phone2: '',
    address: ''
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
          <Typography variant='h4'> Add Staff </Typography>
        </Grid>

            <form style={{marginLeft:'20px'}}>
              <Grid container spacing={2} marginBottom={2}>
                <Grid item xs={6}>
                  <TextField fullWidth name='firstName' value={formData.firstName} onChange={handleChange} label='First Name' />
                </Grid>
                <Grid item xs={6}>
                  <TextField fullWidth name='lastName' value={formData.lastName} onChange={handleChange} label='Last Name' />
                </Grid>
              </Grid>

              <Grid item xs={12} marginBottom={2}>
                <TextField fullWidth name='email' value={formData.email} onChange={handleChange} label='E-mail' />
              </Grid>

              <Grid container spacing={2} marginBottom={2}>
                <Grid item xs={6}>
                  <TextField fullWidth name='phone1' value={formData.phone1} onChange={handleChange} label='Phone 1' />
                </Grid>
                <Grid item xs={6}>
                  <TextField fullWidth name='phone2' value={formData.phone2} onChange={handleChange} label='Phone 2' />
                </Grid>
              </Grid>

              <Grid item xs={12} marginBottom={3}>
                <TextField fullWidth name='address' value={formData.address} onChange={handleChange} label='Adress' />
              </Grid>

              <Grid item xs={12} align='center'>
                <Button variant='contained' color='success' onClick={handleSubmit}> Submit </Button>
              </Grid>
            </form>
        </Grid>
      </Grid>
  )
}

export default AddStaff