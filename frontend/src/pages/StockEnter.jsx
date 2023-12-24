import React, { useState } from 'react'
import SideBar from './SideBar'
import { Button, Grid, MenuItem, TextField, Typography } from '@mui/material'

const StockEnter = () => {

  const [ accessory , setAccessory] = useState([{accessoryType: '',accessoryModel: '', accessoryAmount: '' }])
  const [ phones , setPhones ] = useState([{phoneModel: '', phoneAmount: ''}])
  const [ tabs , setTabs ] = useState([{tabModel: '', tabAmount: ''}])
  const [ musical , setMusical ] = useState([{musicalType: '', musicalModel: '', musicalAmount: ''}])

  const [ formFields , setFormFields] = useState({
    accessoriesField: [{accessoryType: '',accessoryModel: '', accessoryAmount: ''}],
    phonesField: [{phoneModel: '', phoneAmount: ''}],
    tabsField: [{tabModel: '', tabAmount: ''}],
    musicalItemsFiled: [{musicalType: '', musicalModel: '', musicalAmount: ''}]
  })

  // Add Fields section
  const addAccessoryField = () => {
    setAccessory([...accessory, {accessoryType: '',accessoryModel: '', accessoryAmount: ''}])
  }

  const addPhonesField = () => {
    setPhones([...phones, {phoneModel: '', phoneAmount: ''}])
  }

  const addTabsField = () => {
    setTabs([...tabs, {tabModel: '', tabAmount: ''}])
  }

  const addMusicalFields = () => {
    setMusical([...musical, {musicalType: '', musicalModel: '', musicalAmount: ''}])
  }

  // Remove Fields Section
  const removeAccessoryField = (indexToRemove) => {
    setAccessory(accessory.filter((_, index)=> index !== indexToRemove))
  }

  const removePhonesField = (indexToRemove) => {
    setPhones(phones.filter((_, index)=> index !== indexToRemove))
  }

  const removeTabsField = (indexToRemove) => {
    setTabs(tabs.filter((_, index)=> index !== indexToRemove))
  }

  const removeMusicalField = (indexToRemove) => {
    setMusical(musical.filter((_, index)=> index !== indexToRemove))
  }

  const handleClick = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormFields({ ...formFields, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formFields)
  }

  // const handleChangeAccessory = (index, key, value) => {
  //   const updatedAccessory = [...accessory];
  //   updatedAccessory[index][key] = value;
  //   setAccessory(updatedAccessory);
  // };

  return (
    <Grid container>
      <Grid item>
        <SideBar />
      </Grid>

      <Grid item xs={10} marginTop={12}>
        <Grid item xs={12} align='center' marginBottom={5}>
          <Typography variant='h4'> Stock Enter </Typography>
        </Grid>

        {/* Stock Enter Component Starts  */}
        <Grid>
          <form>
          {/* Accessories Section */}
          <Typography marginLeft={2} variant='h5'>Accessories Section</Typography>
            {accessory.map((item,index) => (
                      <Grid container gap={2} margin={2} key={index}>
                      <Grid item xs={2}>
                        <TextField select fullWidth name='accessoryType' value={item.accessoryType} onChange={(event) => {handleClick(event, index)}} label="Accessory Type">
                        <MenuItem> Charger </MenuItem>
                        <MenuItem> Battery </MenuItem>
                        <MenuItem> Handsfree </MenuItem>
                        <MenuItem> Data Cable </MenuItem>
                        <MenuItem> Bluetooth Handsfree </MenuItem>
                        <MenuItem> EarBuds </MenuItem>
                        <MenuItem> Power Bank </MenuItem>
                        <MenuItem> Memmory Card </MenuItem>
                        <MenuItem> Pen Drive </MenuItem>
                        <MenuItem> Charging Dock </MenuItem>
                        </TextField>
                      </Grid>
                      <Grid item xs={2}>
                          <TextField fullWidth name='accessoryModel' value={item.accessoryModel} onChange={(event) => {handleClick(event, index)}} label='Model' />
                      </Grid>
                      <Grid item xs={2}>
                        <TextField fullWidth name='accessoryAmount' value={item.accessoryAmount} onChange={(event) => {handleClick(event, index)}} label='Amount' />
                      </Grid>

                      <Grid item xs={2}>
                        <Button style={{fontSize: '20px', padding:0}} variant="contained" color="error" onClick={() => removeAccessoryField(index)}> - </Button>
                      </Grid>
                    </Grid>
            ))}
            
            <Button style={{marginLeft:'20px', marginBottom: '20px', fontSize: '20px', padding:0}} variant="contained" color="primary" onClick={addAccessoryField}> + </Button>

          {/* Phones Section */}
          <Typography marginLeft={2} variant='h5'>Phones Section</Typography>
          {phones.map((phone,index) => (
                      <Grid container gap={2} margin={2} key={index}>
                      <Grid item xs={2}>
                      <TextField select fullWidth name='phoneModel' value='' label="Phone Model">
                        <MenuItem> Example1 </MenuItem>
                        <MenuItem> Example2 </MenuItem>
                        <MenuItem> Example3 </MenuItem>
                        </TextField>
                      </Grid>
                      <Grid item xs={2}>
                        <TextField multiline fullWidth name='phoneAmount' value='' label='Amount' />
                      </Grid>

                      <Grid item xs={2}>
                        <Button style={{fontSize: '20px', padding:0}} variant="contained" color="error" onClick={() => removePhonesField(index)}> - </Button>
                      </Grid>
                    </Grid>
          ))}

          <Button style={{marginLeft:'20px', marginBottom: '20px', fontSize: '20px', padding:0}} variant="contained" color="primary" onClick={addPhonesField}> + </Button>

          {/* Tabs Section */}
          <Typography marginLeft={2} variant='h5'>Tabs Section</Typography>
          {tabs.map((tab,index) => (
                      <Grid container gap={2} margin={2} key={index}>
                      <Grid item xs={2}>
                      <TextField select fullWidth name='tabModel' value='' label="Tab Model">
                        <MenuItem> Example1 </MenuItem>
                        <MenuItem> Example2 </MenuItem>
                        <MenuItem> Example3 </MenuItem>
                        </TextField>
                      </Grid>
                      <Grid item xs={2}>
                        <TextField multiline fullWidth name='tabAmount' value='' label='Amount' />
                      </Grid>

                      <Grid item xs={2}>
                        <Button style={{fontSize: '20px', padding:0}} variant="contained" color="error" onClick={() => removeTabsField(index)}> - </Button>
                      </Grid>
                    </Grid>
          ))}

          <Button style={{marginLeft:'20px', marginBottom: '20px', fontSize: '20px', padding:0}} variant="contained" color="primary" onClick={addTabsField}> + </Button>

          {/* Musical Items Section */}
          <Typography marginLeft={2} variant='h5'>Musical Items Section</Typography>
          {musical.map((musicalItem,index) => (
                      <Grid container gap={2} margin={2} key={index}>
                      <Grid item xs={2}>
                        <TextField select fullWidth name='musicalType' value='' label="Musical Item">
                          <MenuItem> Example1 </MenuItem>
                          <MenuItem> Example2 </MenuItem>
                          <MenuItem> Example3 </MenuItem>
                        </TextField>
                      </Grid>
                      <Grid item xs={2}>
                          <TextField fullWidth name='musicalModel' value='' label='Model' />
                      </Grid>
                      <Grid item xs={2}>
                        <TextField fullWidth name='musicalAmount' value='' label='Amount' />
                      </Grid>

                      <Grid item xs={2}>
                        <Button style={{fontSize: '20px', padding:0}} variant="contained" color="error" onClick={() => removeMusicalField(index)}> - </Button>
                      </Grid>
                    </Grid>
          ))}

          <Button style={{marginLeft:'20px', marginBottom: '20px', fontSize: '20px', padding:0}} variant="contained" color="primary" onClick={addMusicalFields}> + </Button>

          <Grid item xs={12} align='center' marginTop={2}>
            <Button variant='contained' color='success'type='submit' onClick={handleSubmit}> Submit </Button>
          </Grid>
          </form>
        </Grid>        
      </Grid>
    </Grid>
  )
}

export default StockEnter

