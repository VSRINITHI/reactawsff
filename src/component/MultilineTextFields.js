import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function MultilineTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off" style={{backgroundColor:'lightblue'}}>
      <h1>Contact Us</h1>
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="First Name"
          multiline
          maxRows={4}
        />
        <TextField
          id="outlined-textarea"
          label="Last Name"
          // placeholder="Placeholder"
          multiline
        />
        <br/> <br/>
        <TextField
          id="outlined-multiline-static"
          label="Address"
          multiline
          rows={4}  
        />
      </div>
      <div>
        <TextField
          id="filled-multiline-flexible"
          label="Contact Number"
          multiline
          maxRows={4}
          variant="filled"
        />
        <TextField
          id="filled-textarea"
          label="Pincode"
          placeholder="Placeholder"
          multiline
          variant="filled"
        />
        <br/> <br/>
        <TextField
          id="filled-multiline-static"
          label="Your Comments!"
          multiline
          rows={4}
          variant="filled"/>
      </div>
      
    </Box>
  );
}