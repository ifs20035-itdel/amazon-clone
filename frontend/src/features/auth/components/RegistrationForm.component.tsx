import { Box, Grid, TextField, InputLabel, Typography, Button, Divider } from "@mui/material";
import { FC,  FormEvent } from "react";

const RegistrationFormComponent: FC = () => {
  return <Box sx={
      {
        border:1, 
        padding: 2, 
        borderColor: '#cccccc', 
        width: '350px', 
        marginTop: 2
      }
    }>

    <form>
      <Grid container direction='column' justifyContent='flex-start'>

        <Typography variant="h4" component='h1'>
          Create account
        </Typography>

        <InputLabel sx={{fontWeight: 500, marginTop: 1, color: '#000000'}} htmlFor='name'>
          Your Name
        </InputLabel>
        <TextField type="text" name='name' id='name' variant='outlined' size='small' />

        <InputLabel sx={{fontWeight: 500, marginTop: 1, color: '#000000'}} htmlFor='email'>
          Email
        </InputLabel>
        <TextField type="text" name='email' id='email' variant='outlined' size='small' />


      </Grid>
    </form>

  </Box>
};

export default RegistrationFormComponent;