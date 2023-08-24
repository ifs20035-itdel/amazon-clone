import { Box, Grid, TextField, InputLabel, Typography, Button, Divider} from "@mui/material";
import { FC,  FormEvent } from "react";
import { Link } from "react-router-dom";
import { validateNameLength, validatePasswordLength } from "../../../shared/utils/validation/length";
import useInput from "../../../hooks/input/use-input";
import { ValidateEmail } from "../../../shared/utils/validation/email";
import { NewUser } from "../models/NewUser";

const RegistrationFormComponent: FC = () => {

  const { 
    text: name,

    shouldDisplayError: nameHasError,
    textChangeHandler:nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    clearHandler: nameClearHandler,
  } = useInput(validateNameLength);
  
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
  
  const { 
    text: confirmPassword,

    shouldDisplayError: confirmPasswordHasError,
    textChangeHandler:confirmPasswordChangeHandler,
    inputBlurHandler: confirmPasswordBlurHandler,
    clearHandler: confirmPasswordClearHandler,
  } = useInput(validatePasswordLength);

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword)return;

    if (nameHasError || emailHasError || passwordHasError || confirmPasswordHasError)return;

    if(
      name.length === 0 ||
      email.length === 0 ||
      password.length === 0 ||
      confirmPassword.length === 0
    )return;

    const newUser: NewUser = {
      name, email, password
    }

    console.log("NEW USER: ", newUser);
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
          Create account
        </Typography>

        <InputLabel sx={{fontWeight: 500, marginTop: 1, color: '#000000'}} htmlFor='name'>
          Your Name
        </InputLabel>
        <TextField 
          value={name} 
          onChange={nameChangeHandler} 
          onBlur={nameBlurHandler} 
          error={nameHasError} 
          helperText={nameHasError ? 'Enter your name' : '' } 
          type="text" name='name' id='name' variant='outlined' size='small' />

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

        <InputLabel sx={{fontWeight: 500, marginTop: 1, color: '#000000'}} htmlFor='confirmPassword'>
          Re-enter Password
        </InputLabel>
        <TextField
          value={confirmPassword} 
          onChange={confirmPasswordChangeHandler} 
          onBlur={confirmPasswordBlurHandler} 
          error={confirmPassword.length > 0 && password !== confirmPassword} 
          helperText={confirmPassword.length > 0 && password !== confirmPassword ? 'Password didn\'t match' : '' } 

          type="password" name='confirmPassword' id='confirmPassword' variant='outlined' size='small' />

        <Button type="submit" variant="contained" style={{ marginTop: '16px', height: '31px', backgroundColor: '#f0c14b', color: 'black', borderColor: '#a88734 #9c7e31 #846a29', textTransform: 'none'}}>
          Register
        </Button>
      </Grid>
    </form>

    <div style={{ marginTop: '30px'}}>
      <small>
        <span>
          By creating an account, you agree to Amazon's
        </span>
      </small>
    </div>

    <div>
      <small>
        <a href="#" style={{textDecoration: 'none'}}>{' '}Condition of use</a> {' '}and{' '}
        <a href="#" style={{textDecoration: 'none'}}>Privacy Policy</a>
      </small>
    </div>

    <Divider sx={{marginTop: '36px', marginBottom: '36px'}} />
    <div>
      <small>
        Already have an account? {' '}
        <Link to='/signin' style={{ textDecoration: 'none', color: '#0000ee'}}>Sign-In</Link>
      </small>
    </div>

    <div>
      <small>
        Buying for work?
        <a href="#" style={{textDecoration: 'none'}}>{' '}Create a free business account</a> {' '}
      </small>
    </div>

  </Box>
};

export default RegistrationFormComponent;