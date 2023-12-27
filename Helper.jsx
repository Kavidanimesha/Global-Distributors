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