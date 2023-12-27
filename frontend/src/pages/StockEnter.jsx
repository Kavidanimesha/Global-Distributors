import React, { useState } from 'react'
import SideBar from './SideBar'
import { Autocomplete, Button, Grid,TextField, Typography } from '@mui/material'

const StockEnter = () => {

  const accessoryDropDown = [
    { label: 'The Godfather', id: 1 },
    { label: 'Pulp Fiction', id: 2 },
  ];

  const example = [
    'Example1',
    'Example2',
    'Example3'
  ]
  

  const [ accessory , setAccessory] = useState([{accessoryType: '',accessoryModel: '', accessoryAmount: '' }])
  const [ phones , setPhones ] = useState([{phoneModel: '', phoneAmount: ''}])
  const [ tabs , setTabs ] = useState([{tabModel: '', tabAmount: ''}])
  const [ musical , setMusical ] = useState([{musicalType: '', musicalModel: '', musicalAmount: ''}])

  const [formData, setFormData] = useState({
    accessoriesField: [{accessoryType: '',accessoryModel: '', accessoryAmount: ''}],
    phonesField: [{phoneModel: '', phoneAmount: ''}],
    tabsField: [{tabModel: '', tabAmount: ''}],
    musicalItemsField: [{musicalType: '', musicalModel: '', musicalAmount: ''}]
  });


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

  //HandleChanges
  const handleAccessoryChange = (index, event) => {
    const { name, value } = event.target;
    const updatedAccessories = [...accessory];
    updatedAccessories[index][name] = value;
    setAccessory(updatedAccessories);

    const updatedFormData = {
      ...formData,
      accessoriesField: updatedAccessories
    };
    setFormData(updatedFormData);
  };

  const handlePhoneChange = (index, event) => {
    const { name, value } = event.target;
    const updatedPhones = [...phones];
    updatedPhones[index][name] = value;
    setPhones(updatedPhones);

    const updatedFormData = {
      ...formData,
      phonesField: updatedPhones
    };
    setFormData(updatedFormData);
  };

  const handleTabChange = (index, event) => {
    const { name, value } = event.target;
    const updatedTabs = [...tabs];
    updatedTabs[index][name] = value;
    setTabs(updatedTabs);

    const updatedFormData = {
      ...formData,
      tabsField: updatedTabs
    };
    setFormData(updatedFormData);
  };

  const handleMusicalItemChange = (index, event) => {
    const { name, value } = event.target;
    const updatedMusicalItems = [...musical];
    updatedMusicalItems[index][name] = value;
    setMusical(updatedMusicalItems);

    const updatedFormData = {
      ...formData,
      musicalItemsField: updatedMusicalItems
    };
    setFormData(updatedFormData);
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };


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

          {/* Phones Section */}
          <Typography marginLeft={2} variant='h5'>Phones Section</Typography>
          {phones.map((phone,index) => (
                      <Grid container gap={2} margin={2} key={index}>
                      <Grid item xs={2}>
                        <Autocomplete fullWidth disablePortal id="combo-box-demo" options={example} renderInput={(params) => <TextField onChange={(e) => handlePhoneChange(index, e)} name='phoneModel' value={phone.phoneModel} {...params} label="Phone Model" />}  />
                      </Grid>
                      <Grid item xs={2}>
                        <TextField multiline fullWidth name='phoneAmount' value={phone.phoneAmount} onChange={(e) => handlePhoneChange(index, e)} label='Amount' />
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
                        <Autocomplete name= 'tabModel' fullWidth disablePortal id="combo-box-demo" options={example} renderInput={(params) => <TextField name= 'tabModel'  value={tab.tabModel} onChange={(e) => handleTabChange(index, e)} {...params} label="Tab Model" />}  />
                      </Grid>
                      <Grid item xs={2}>
                        <TextField multiline fullWidth name='tabAmount' onChange={(e) => handleTabChange(index, e)} value={tab.tabAmount} label='Amount' />
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
                        <Autocomplete fullWidth disablePortal id="combo-box-demo" options={example} renderInput={(params) => <TextField name='musicalType' value={musicalItem.musicalType} onChange={(e) => handleMusicalItemChange(index, e)} {...params} label="Musical Item Type" />}  />
                      </Grid>
                      <Grid item xs={2}>
                          <TextField fullWidth name='musicalModel' onChange={(e) => handleMusicalItemChange(index, e)} value={musicalItem.musicalModel} label='Model' />
                      </Grid>
                      <Grid item xs={2}>
                        <TextField fullWidth name='musicalAmount' onChange={(e) => handleMusicalItemChange(index, e)} value={musicalItem.musicalAmount} label='Amount' />
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

