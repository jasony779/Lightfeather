import React from "react";
import { Typography } from "@mui/material";
import {Checkbox, CardContent, CardActions, Card, Box } from "@mui/material";
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';


const MainCard = ({children}) => {
  const [name, setName] = React.useState('Composed TextField');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  return (
    <Card sx={{width:800, height:500}}>
    <Typography variant='h4' sx={{bgcolor:'#78909c'}}>Notification Form</Typography>
    <CardContent sx={{width:1, height:1,bgcolor:'#b0bec5'}}>{children}</CardContent>
    <FormControl variant="standard">
        <InputLabel htmlFor="component-simple">Name</InputLabel>
        <Input id="component-simple" value={name} onChange={handleChange} />
      </FormControl>
    </Card>
  ) 
}

export default MainCard
