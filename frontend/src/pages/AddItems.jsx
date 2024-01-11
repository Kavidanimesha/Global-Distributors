import React, { useState } from 'react'
import SideBar from './SideBar'
import { Button, Grid,MenuItem,TextField, Typography } from '@mui/material'

const AddItems = () => {

  const accessoryDropDown = [
    {name:'charger' , id: 1},
    {name:'Data Cable' , id: 2},
    {name:'Head Sets' , id: 3},
  ]

  const example = [
    {name:'example1' , id: 1},
    {name:'example2' , id: 2},
    {name:'example3' , id: 3},
  ]
  

  const [ accessory , setAccessory] = useState([{accessoryType: '',accessoryModel: '', accessoryPrice: '' }])
  const [ phones , setPhones ] = useState([{phoneType: '', phoneModel: '', phonePrice: ''}])
  const [ tabs , setTabs ] = useState([{tabType: '', tabModel: '', tabPrice: ''}])
  const [ musical , setMusical ] = useState([{musicalType: '', musicalModel: '', musicalPrice: ''}])

  const [formData, setFormData] = useState({
    accessoriesField: [{accessoryType: '',accessoryModel: '', accessoryPrice: ''}],
    phonesField: [{phoneType: '', phoneModel: '', phonePrice: ''}],
    tabsField: [{tabType: '', tabModel: '', tabPrice: ''}],
    musicalItemsField: [{musicalType: '', musicalModel: '', musicalPrice: ''}]
  });


  // Add Fields section
  const addAccessoryField = () => {
    setAccessory([...accessory, {accessoryType: '',accessoryModel: '', accessoryPrice: ''}])
  }

  const addPhonesField = () => {
    setPhones([...phones, {phoneType: '', phoneModel: '', phonePrice: ''}])
  }

  const addTabsField = () => {
    setTabs([...tabs, {tabType: '', tabModel: '', tabPrice: ''}])
  }

  const addMusicalFields = () => {
    setMusical([...musical, {musicalType: '', musicalModel: '', musicalPrice: ''}])
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
          <Typography variant='h4'> Add Items </Typography>
        </Grid>

        {/* Stock Enter Component Starts  */}
        <Grid>
          <form>
          {/* Accessories Section */}
          <Typography marginLeft={2} variant='h5'>Accessories Section</Typography>
            {accessory.map((item,index) => (
                      <Grid container gap={2} margin={2} key={index}>
                      <Grid item xs={2}>
                        <TextField fullWidth select name='accessoryType' label='Accessory Type' onChange={(e) => handleAccessoryChange(index, e)}>
                            {accessoryDropDown.map((item)=>(
                                <MenuItem key={item.id} value={item.name}> {item.name} </MenuItem>
                            ))}
                        </TextField>
                      </Grid>
                      <Grid item xs={2}>
                          <TextField fullWidth name='accessoryModel' value={item.accessoryModel} onChange={(e) => handleAccessoryChange(index, e)} label='Model' />
                      </Grid>
                      <Grid item xs={2}>
                        <TextField fullWidth name='accessoryPrice' value={item.accessoryPrice} onChange={(e) => handleAccessoryChange(index, e)} label='Price' />
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
                        <TextField fullWidth select name='phoneType' label='Phone Type' onChange={(e) => handlePhoneChange(index, e)}>
                            {example.map((item)=>(
                                <MenuItem key={item.id} value={item.name}> {item.name} </MenuItem>
                            ))}
                        </TextField>
                      </Grid>
                      <Grid item xs={2}>
                        <TextField multiline fullWidth name='phoneModel' value={phone.phoneModel} onChange={(e) => handlePhoneChange(index, e)} label='Model' />
                      </Grid>
                      <Grid item xs={2}>
                        <TextField multiline fullWidth name='phonePrice' value={phone.phonePrice} onChange={(e) => handlePhoneChange(index, e)} label='Price' />
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
                        <TextField fullWidth select name='tabType' label='Tab Type' onChange={(e) => handleTabChange(index, e)}>
                            {example.map((item)=>(
                                <MenuItem key={item.id} value={item.name}> {item.name} </MenuItem>
                            ))}
                        </TextField>
                      </Grid>
                      <Grid item xs={2}>
                        <TextField multiline fullWidth name='tabModel' onChange={(e) => handleTabChange(index, e)} value={tab.tabModel} label='Model' />
                      </Grid>
                      <Grid item xs={2}>
                        <TextField multiline fullWidth name='tabPrice' onChange={(e) => handleTabChange(index, e)} value={tab.tabPrice} label='Price' />
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
                        <TextField fullWidth select name='musicalType' label='Musical Item Type' onChange={(e) => handleMusicalItemChange(index, e)}>
                            {example.map((item)=>(
                                <MenuItem key={item.id} value={item.name}> {item.name} </MenuItem>
                            ))}
                        </TextField>
                      </Grid>
                      <Grid item xs={2}>
                          <TextField fullWidth name='musicalModel' onChange={(e) => handleMusicalItemChange(index, e)} value={musicalItem.musicalModel} label='Model' />
                      </Grid>
                      <Grid item xs={2}>
                        <TextField fullWidth name='musicalPrice' onChange={(e) => handleMusicalItemChange(index, e)} value={musicalItem.musicalPrice} label='Price' />
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

export default AddItems