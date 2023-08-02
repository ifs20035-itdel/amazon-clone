import { Box, Grid, TextField, InputLabel, Typography, Button, Divider} from "@mui/material";
import { FC,  FormEvent } from "react";
import { Link } from "react-router-dom";

const LoginFormComponent: FC = () => {

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Clicked");
  }

  return <Box sx={
      {
        border:1, 
        padding: 2, 
        borderColor: '#cccccc', 
        width: '350px', 
        marginTop: 2
      }
    }>

    <form onSubmit={onSubmitHandler}>
      <Grid container direction='column' justifyContent='flex-start'>

        <Typography variant="h4" component='h1'>
          Sign-In
        </Typography>

        <InputLabel sx={{fontWeight: 500, marginTop: 1, color: '#000000'}} htmlFor='email'>
          Email
        </InputLabel>
        <TextField type="text" name='email' id='email' variant='outlined' size='small' />

        <InputLabel sx={{fontWeight: 500, marginTop: 1, color: '#000000'}} htmlFor='password'>
          Password
        </InputLabel>
        <TextField type="password" name='password' id='password' variant='outlined' size='small' />

        <Button type="submit" variant="contained" style={{ marginTop: '16px', height: '31px', backgroundColor: '#f0c14b', color: 'black', borderColor: '#a88734 #9c7e31 #846a29', textTransform: 'none'}}>
          Sign-In
        </Button>
      </Grid>
    </form>

    <Divider sx={{marginTop: '36px', marginBottom: '36px'}} />
    <div>
      <small>
        Don't have an account yet? {' '}
        <Link to='/register' style={{ textDecoration: 'none', color: '#0000ee'}}>Register</Link>
      </small>
    </div>

  </Box>
};

export default LoginFormComponent;