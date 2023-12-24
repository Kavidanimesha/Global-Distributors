import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

function DynamicFields() {
  const [fields, setFields] = useState([{ phoneModel: '', amount: '' }]);

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
    </div>
  );
}

export default DynamicFields;


<Grid container gap={2} margin={2}>
<Grid item xs={2}>
  <TextField select fullWidth name='accessoryType' value='' label="Accessory Type">
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
    <TextField fullWidth name='accessoryModel' value='' label='Model' />
</Grid>
<Grid item xs={2}>
  <TextField fullWidth name='accessoryAmount' value='' label='Amount' />
</Grid>
</Grid>