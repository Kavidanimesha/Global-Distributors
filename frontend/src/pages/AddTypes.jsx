import React, { useState } from "react";
import SideBar from "./SideBar";
import { Button, Grid, TextField, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "../utils/axios";
import { toast } from "react-toastify";


const rows = [
  { id: 1, type: "Mouse", description: "N/A", category: "Phone" },
  { id: 2, type: "Keyboard", description: "N/A", category: "Tab" },
  { id: 3, type: "Router", description: "N/A", category: "Accessory" },
];

const AddTypes = () => {

    const [formData , setFormData ] = useState({
        type: '',
        description: '',
        category: ''
    })

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
          const response = await axios.post("/type", formData);
    
        if (response.status === 200) {
          toast.success("Type Created Successfully", {
              position: "top-right",
              autoClose: 5000,
            });
    
            // form clear
            setFormData({
              type: '',
              description: '',
              category: ''
            })
    
        } else {
          toast.error("Something Went Wrong!", {
              position: "top-right",
              autoClose: 5000,
            });
        }
        } catch (error) {
          toast.error("Can not Create Type", {
            position: "top-right",
            autoClose: 5000,
          });
        }
    }

  return (
    <Grid container>
      <Grid item>
        <SideBar />
      </Grid>

      <Grid item xs={10} marginTop={12}>
        <Grid item xs={12} align="center" marginBottom={5}>
          <Typography variant="h4"> Add Types </Typography>
        </Grid>

        <form style={{marginLeft: '20px'}}>
            <Grid item xs={4} display={'flex'} flexDirection={'column'} gap={2} marginBottom={2}>
                <TextField name='type' label='Type' value={formData.type} onChange={handleChange} />
                <TextField name='description' label='Description' value={formData.description} onChange={handleChange} />
                <TextField name='category' label='Category' value={formData.category} onChange={handleChange} />
            </Grid>

            <Button variant="contained" type="submit" color="success" onClick={handleSubmit}> Add </Button>
        </form>

        <Grid container margin={2}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Category</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.type}</TableCell>
                    <TableCell>{item.description}</TableCell>
                    <TableCell>{item.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AddTypes;
