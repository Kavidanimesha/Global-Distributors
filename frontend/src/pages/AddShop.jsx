import React, { useState } from 'react'
import SideBar from './SideBar'
import { Button, Grid,TextField,Typography } from '@mui/material'
import axios from "../utils/axios";
import { toast } from "react-toastify";

const AddShop = () => {

  const [ formData , setFormData ] = useState({
    shop_name: '',
    owner_name: '',
    address: '',
    contact_primary: '',
    contact_secondary: ''
  })

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post("/shop", formData);

    if (response.status === 200) {
      toast.success("Shop Created Successfully", {
          position: "top-right",
          autoClose: 5000,
        });

        // form clear
        setFormData({
          shop_name: '',
          owner_name: '',
          address: '',
          contact_primary: '',
          contact_secondary: ''
        })

    } else {
      toast.error("Something Went Wrong!", {
          position: "top-right",
          autoClose: 5000,
        });
    }
    } catch (error) {
      toast.error("Can not Create Shop", {
        position: "top-right",
        autoClose: 5000,
      });
    }
  };

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
                  <TextField fullWidth name='shop_name' value={formData.shop_name} onChange={handleChange} label='Shop Name' />
                </Grid>
                <Grid item xs={6}>
                  <TextField fullWidth name='owner_name' value={formData.owner_name} onChange={handleChange} label='Owner Name' />
                </Grid>
              </Grid>

              <Grid item xs={12} marginBottom={3}>
                <TextField fullWidth name='address' value={formData.address} onChange={handleChange} label='Adress' />
              </Grid>

              <Grid container spacing={2} marginBottom={3}>
                <Grid item xs={6}>
                  <TextField fullWidth name='contact_primary' value={formData.contact_primary} onChange={handleChange} label='Phone 1' />
                </Grid>
                <Grid item xs={6}>
                  <TextField fullWidth name='contact_secondary' value={formData.contact_secondary} onChange={handleChange} label='Phone 2' />
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