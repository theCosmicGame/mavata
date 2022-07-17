import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" to="/">
        Mavata
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const StyledContainer = styled(Container)`
  position: relative;

  & div {
    margin-top: 64px; /* theme.spacing(8); */
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const StyledAvatar = styled(Avatar)`
  margin: 8px; /* theme.spacing(1) */
  background-color: #9c27b0; /* theme.palette.secondary.main; */
`

const StyledForm = styled.form`
  width: 100%;
  margin-top: 8px; /* theme.spacing(1) */
`

const SubmitButton = styled(Button)`
  margin: 24px 0px 16px; /* theme.spacing(3, 0, 2); */
`

export default function SignIn({ onSignIn }) {
  return (
    <StyledContainer component="main" maxWidth="xs">
      <div>
        <StyledAvatar>
          <LockOutlinedIcon />
        </StyledAvatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <StyledForm
          onSubmit={(e) => e.preventDefault()}
          noValidate
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <SubmitButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={onSignIn}
          >
            Sign In
          </SubmitButton>
          <Grid container>
            <Grid item>
              <Link to="/auth/signup">{"Don't have an account? Sign Up"}</Link>
            </Grid>
          </Grid>
        </StyledForm>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </StyledContainer>
  );
}
