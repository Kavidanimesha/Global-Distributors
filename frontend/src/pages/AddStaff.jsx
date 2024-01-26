import React, { useState } from 'react'
import SideBar from './SideBar'
import { Button, Grid,TextField,Typography } from '@mui/material'
import axios from '../utils/axios'
import { toast } from 'react-toastify'

const AddStaff = () => {

  const [ formData , setFormData ] = useState({
    first_name: '',
    last_name: '',
    email: '',
    contact_primary: '',
    contact_secondary: '',
    address: ''
  })

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {

      const response = await axios.post("/staff", formData)
      console.log(response);

      if (response.status === 200) {
        toast.success("Staff Member Added", {
          position: "top-right",
          autoClose: 5000
        })

        setFormData({
          first_name: '',
          last_name: '',
          email: '',
          contact_primary: '',
          contact_secondary: '',
          address: ''
        })
      } else {
        toast.error("Something went Wrong", {
          position: "top-right",
          autoClose: 4000
        })
      }

    } catch (error) {
      toast.error("Can not Create Staff", {
        position: "top-right",
        autoClose: 4000
      })
    }
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
                  <TextField fullWidth name='first_name' value={formData.first_name} onChange={handleChange} label='First Name' />
                </Grid>
                <Grid item xs={6}>
                  <TextField fullWidth name='last_name' value={formData.last_name} onChange={handleChange} label='Last Name' />
                </Grid>
              </Grid>

              <Grid item xs={12} marginBottom={2}>
                <TextField fullWidth name='email' value={formData.email} onChange={handleChange} label='E-mail' />
              </Grid>

              <Grid container spacing={2} marginBottom={2}>
                <Grid item xs={6}>
                  <TextField fullWidth name='contact_primary' value={formData.contact_primary} onChange={handleChange} label='Phone 1' />
                </Grid>
                <Grid item xs={6}>
                  <TextField fullWidth name='contact_secondary' value={formData.contact_secondary} onChange={handleChange} label='Phone 2' />
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