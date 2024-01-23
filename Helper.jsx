import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

function DynamicFields() {
  const [fields, setFields] = useState([{ phoneModel: '', amount: '' }]);
  const [accessoryData, setAccessoryData] = useState({
    accessoryType: '',
    accessoryModel: '',
    accessoryAmount: ''
  });

  const handleAddField = () => {
    setFields([...fields, { phoneModel: '', amount: '' }]);
  };

  const handleRemoveField = (indexToRemove) => {
    setFields(fields.filter((_, index) => index !== indexToRemove));
  };

  const handleChange = (index, key, value) => {
    const updatedFields = [...fields];
    updatedFields[index][key] = value;
    setFields(updatedFields);
  };

  const handleAccessoryChange = (key, value) => {
    setAccessoryData({
      ...accessoryData,
      [key]: value
    });
  };

  const handleSubmit = () => {
    console.log('Phone Data:', fields);
    console.log('Accessory Data:', accessoryData);
  };

  return (
    <div>
      {fields.map((field, index) => (
        <Grid container key={index} gap={2} margin={2} alignItems="center">
          <Grid item xs={2}>
            <TextField
              select
              fullWidth
              name='phoneModel'
              value={field.phoneModel}
              label="Phone Model"
              onChange={(e) => handleChange(index, 'phoneModel', e.target.value)}
            >
              <MenuItem value="Example1">Example1</MenuItem>
              <MenuItem value="Example2">Example2</MenuItem>
              <MenuItem value="Example3">Example3</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={2}>
            <TextField
              multiline
              fullWidth
              name='amount'
              value={field.amount}
              label='Amount'
              onChange={(e) => handleChange(index, 'amount', e.target.value)}
            />
          </Grid>
          <Grid item xs={2}>
            <Button variant="outlined" color="secondary" onClick={() => handleRemoveField(index)}>Remove</Button>
          </Grid>
        </Grid>
      ))}
      <Button variant="contained" color="primary" onClick={handleAddField}>Add</Button>

      {/* Accessory Fields */}
      <Grid container gap={2} margin={2}>
        <Grid item xs={2}>
          <TextField 
            select 
            fullWidth 
            name='accessoryType' 
            value={accessoryData.accessoryType}
            label="Accessory Type"
            onChange={(e) => handleAccessoryChange('accessoryType', e.target.value)}
          >
            {/* ... MenuItems for accessory types ... */}
          </TextField>
        </Grid>
        <Grid item xs={2}>
          <TextField 
            fullWidth 
            name='accessoryModel' 
            value={accessoryData.accessoryModel}
            label='Model'
            onChange={(e) => handleAccessoryChange('accessoryModel', e.target.value)}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField 
            fullWidth 
            name='accessoryAmount' 
            value={accessoryData.accessoryAmount}
            label='Amount'
            onChange={(e) => handleAccessoryChange('accessoryAmount', e.target.value)}
          />
        </Grid>
      </Grid>

      <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
    </div>
  );
}

export default DynamicFields;


{accessory.map((item, index) => (
  <Grid container gap={2} margin={2} key={index}>
    <Grid item xs={2}>
      <TextField
        select
        fullWidth
        name="accessoryType"
        value={
          formFields.accessoriesField.find(
            (accessory, i) => i === index
          ).accessoryType
        }
        onChange={(event) => {
          onTextFieldChange(event, "accessoriesField", index);
        }}
        label="Accessory Type"
      >
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
      <TextField
        fullWidth
        name="accessoryModel"
        value={
          formFields.accessoriesField.find(
            (accessory, i) => i === index
          ).accessoryModel
        }
        onChange={(event) => {
          onTextFieldChange(event, "accessoriesField", index);
        }}
        label="Model"
      />
    </Grid>
    <Grid item xs={2}>
      <TextField
        fullWidth
        name="accessoryAmount"
        value={
          formFields.accessoriesField.find(
            (accessory, i) => i === index
          ).accessoryAmount
        }
        onChange={(event) => {
          onTextFieldChange(event, "accessoriesField", index);
        }}
        label="Amount"
      />
    </Grid>

    <Grid item xs={2}>
      <Button
        style={{ fontSize: "20px", padding: 0 }}
        variant="contained"
        color="error"
        onClick={() => removeAccessoryField(index)}
      >
        {" "}
        -{" "}
      </Button>
    </Grid>
  </Grid>
))

const accessoryDropDown = [
  {id:1, name: 'Charger' },
  {id:2, name: 'Battery' },
  {id:3, name: 'Handsfree' },
  {id:4, name: 'Data Cable' },
  {id:5, name: 'Bluetooth Handsfree' },
  {id:6, name: 'EarBuds' },
  {id:7, name: 'Power Bank' },
  {id:8, name: 'Memmory Card' },
  {id:9, name: 'Pen Drive' },
  {id:10,name: 'Charging Dock' },
]


//////////////////////////////////////////////////////

import React, { useState } from 'react'
import SideBar from './SideBar'
import { Autocomplete, Button, Grid,TextField, Typography } from '@mui/material'

const StockEnter = () => {

  const accessoryDropDown = [ 
    'Charger',
    'Battery',
    'Handsfree',
    'Data Cable',
    'Bluetooth Handsfree',
    'EarBuds',
    'Power Bank',
    'Memmory Card',
    'Pen Drive',
    'Charging Dock'
  ]

  const example = [
    'Example1',
    'Example2',
    'Example3'
  ]
  

  const [ accessory , setAccessory] = useState([{accessoryType: '',accessoryModel: '', accessoryAmount: '' }])
  const [ phones , setPhones ] = useState([{phoneType:'', phoneModel: '', phoneAmount: ''}])
  const [ tabs , setTabs ] = useState([{tabType: '', tabModel: '', tabAmount: ''}])
  const [ musical , setMusical ] = useState([{musicalType: '', musicalModel: '', musicalAmount: ''}])


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
                        <Autocomplete fullWidth disablePortal id="combo-box-demo" options={accessoryDropDown} renderInput={(params) => <TextField {...params} value={item.accessoryType}  label="Accessory Type" />}  />
                      </Grid>
                      <Grid item xs={2}>
                          <TextField fullWidth name='accessoryModel' value={item.accessoryModel}  label='Model' />
                      </Grid>
                      <Grid item xs={2}>
                        <TextField fullWidth name='accessoryAmount' value={item.accessoryAmount}  label='Amount' />
                      </Grid>

                      <Grid item xs={2}>
                        <Button style={{fontSize: '20px', padding:0}} variant="contained" color="error"> - </Button>
                      </Grid>
                    </Grid>
            ))}
            
            <Button style={{marginLeft:'20px', marginBottom: '20px', fontSize: '20px', padding:0}} variant="contained" color="primary" onClick={addAccessoryField}> + </Button>

          {/* Phones Section */}
          <Typography marginLeft={2} variant='h5'>Phones Section</Typography>
          {phones.map((phone,index) => (
                      <Grid container gap={2} margin={2} key={index}>
                      <Grid item xs={2}>
                        <Autocomplete fullWidth disablePortal id="combo-box-demo" options={example} renderInput={(params) => <TextField {...params} name='phoneType'  value={phone.phoneType} label="Phone Model" />}  />
                      </Grid>
                      <Grid item xs={2}>
                        <TextField multiline fullWidth name='phoneModel' value={phone.phoneModel}  label='Model' />
                      </Grid>
                      <Grid item xs={2}>
                        <TextField multiline fullWidth name='phoneAmount' value={phone.phoneAmount}  label='Amount' />
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
                        <Autocomplete fullWidth disablePortal id="combo-box-demo" options={example} renderInput={(params) => <TextField name='tabType' value={tab.tabType} {...params} label="Tab Model" />}  />
                      </Grid>
                      <Grid item xs={2}>
                        <TextField multiline fullWidth name='tabModel' value={tab.tabModel} label='Model' />
                      </Grid>
                      <Grid item xs={2}>
                        <TextField multiline fullWidth name='tabAmount' value={tab.tabAmount} label='Amount' />
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
                        <Autocomplete fullWidth disablePortal id="combo-box-demo" options={example} renderInput={(params) => <TextField value={musicalItem.musicalType} {...params} label="Musical Item Type" />}  />
                      </Grid>
                      <Grid item xs={2}>
                          <TextField fullWidth name='musicalModel' value={musicalItem.musicalModel} label='Model' />
                      </Grid>
                      <Grid item xs={2}>
                        <TextField fullWidth name='musicalAmount' value={musicalItem.musicalAmount} label='Amount' />
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


import express from 'express'
import cors from 'cors'

const app = express() 

app.use(express.json())
app.use(cors())

app.listen (3001, () => {
    console.log("Server is Running")
})