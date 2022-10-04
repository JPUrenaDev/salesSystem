import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields() {
  return (
    <>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '30ch' },
        display:'block'
      }}
      noValidate
      autoComplete="off"

    >
      <TextField id="outlined-basic" label="Nombre" variant="outlined" />
      <TextField id="outlined-basic" label="Apellido" variant="outlined" />
    
      
    </Box>
     <Box
     component="form"
     sx={{
       '& > :not(style)': { m: 1, width: '30ch' },
       display:'block'
     }}
     noValidate
     autoComplete="off"

   >
     <TextField id="outlined-basic" label="Nombre" variant="outlined" />
     <TextField id="outlined-basic" label="Apellido" variant="outlined" />
     
     
   </Box>
   </>
  );
}