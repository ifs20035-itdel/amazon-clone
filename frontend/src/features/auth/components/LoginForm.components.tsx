import { Box, Grid, TextField, InputLabel, Typography, Button, Divider} from "@mui/material";
import { FC,  FormEvent } from "react";
import { Link } from "react-router-dom";
import useInput from "../../../hooks/input/use-input";
import { validatePasswordLength } from "../../../shared/utils/validation/length";
import { ValidateEmail } from "../../../shared/utils/validation/email";

const LoginFormComponent: FC = () => {

  const { 
    text: email,

    shouldDisplayError: emailHasError,
    textChangeHandler:emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    clearHandler: emailClearHandler,
  } = useInput(ValidateEmail);
  
  const { 
    text: password,

    shouldDisplayError: passwordHasError,
    textChangeHandler:passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    clearHandler: passwordClearHandler,
  } = useInput(validatePasswordLength);

  const clearForm = () => {
    emailClearHandler();
    passwordClearHandler();
  }

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if ( emailHasError || passwordHasError )return;

    if(
      email.length === 0 ||
      password.length === 0
    )return;

    console.log("USER: ", email, password);
    
    clearForm();
  }

  return (
    <>
      <Box sx={
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
            <TextField
              value={email} 
              onChange={emailChangeHandler} 
              onBlur={emailBlurHandler} 
              error={emailHasError} 
              helperText={emailHasError ? 'Enter your email' : '' } 

              type="email" name='email' id='email' variant='outlined' size='small' />

            <InputLabel sx={{fontWeight: 500, marginTop: 1, color: '#000000'}} htmlFor='password'>
              Password
            </InputLabel>
            <TextField
              value={password} 
              onChange={passwordChangeHandler} 
              onBlur={passwordBlurHandler} 
              error={passwordHasError} 
              helperText={passwordHasError ? 'Enter your password' : '' } 
              type="password" name='password' id='password' variant='outlined' size='small' placeholder="Minimum 6 characters required" />

            <Button type="submit" variant="contained" style={{ marginTop: '16px', height: '31px', backgroundColor: '#f0c14b', color: 'black', borderColor: '#a88734 #9c7e31 #846a29', textTransform: 'none'}}>
              Continue
            </Button>
          </Grid>
        </form>

        <div style={{ marginTop: '30px'}}>
          <small>
            <span>
              By continuing, you agree to Amazon's
            </span>
          </small>
        </div>

        <div>
          <small>
            <a href="#" style={{textDecoration: 'none'}}>{' '}Conditios of Use</a> {' '}and{' '}
            <a href="#" style={{textDecoration: 'none'}}>Privacy Notice</a>
          </small>
        </div>
      </Box>

      <div style={{ marginTop: '16px', }}>
        <Divider>
          <small style={{ color: '#767676'}}>
            New to Amazon?
          </small>
        </Divider>

        <Link to='/register' style={{ textDecoration: 'none', color: '#0000ee'}}>
          <Button type="submit" variant="contained" style={{ marginTop: '12px',width: '100%', height: '25px', color: 'black',backgroundColor: 'white',  textTransform: 'none'}}>
            Create your Amazon Account
          </Button>
        </Link>
      </div>
    </>
  )
};

export default LoginFormComponent;