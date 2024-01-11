import { Autocomplete, Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

function TextFields() {
  return (
    <div>
         <Typography marginLeft={2} variant='h5'>Accessories Section</Typography>
            {accessory.map((item,index) => (
                      <Grid container gap={2} margin={2} key={index}>
                      <Grid item xs={2}>
                        <Autocomplete fullWidth disablePortal id="combo-box-demo" options={accessoryDropDown} renderInput={(params) => <TextField name='accessoryType' value={item.accessoryType} onChange={(e) => handleAccessoryChange(index, e)} {...params} label="Accessory Type" />}  />
                      </Grid>
                      <Grid item xs={2}>
                          <TextField fullWidth name='accessoryModel' value={item.accessoryModel} onChange={(e) => handleAccessoryChange(index, e)} label='Model' />
                      </Grid>
                      <Grid item xs={2}>
                        <TextField fullWidth name='accessoryAmount' value={item.accessoryAmount} onChange={(e) => handleAccessoryChange(index, e)} label='Amount' />
                      </Grid>

                      <Grid item xs={2}>
                        <Button style={{fontSize: '20px', padding:0}} variant="contained" color="error" onClick={() => removeAccessoryField(index)}> - </Button>
                      </Grid>
                    </Grid>
            ))}
            
            <Button style={{marginLeft:'20px', marginBottom: '20px', fontSize: '20px', padding:0}} variant="contained" color="primary" onClick={addAccessoryField}> + </Button>

    </div>
  )
}

export default TextFields