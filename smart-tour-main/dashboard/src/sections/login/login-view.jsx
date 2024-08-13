import { useState } from 'react';

import Box from '@mui/material/Box';
// import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import { alpha, useTheme } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import Alert from '@mui/material/Alert';
import axios from 'axios';

import { useRouter } from 'src/routes/hooks';

import { bgGradient } from 'src/theme/css';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function LoginView() {
  const theme = useTheme();

  const router = useRouter();

  const [email, setEmail] = useState('');
const [password, setPassword] = useState('');


  const [showPassword, setShowPassword] = useState(false);
  const [errors, seterrors] = useState("");

  const handleLogin = async () => {
    try {

     
      // Make a POST request to your backend API with the login credentials
      const response = await axios.post(`${import.meta.env.VITE_APP_BACKEND}/user/login`, {
        email,
        password,
      });
  
      // Handle the response from the backend (you can customize this based on your backend)
      console.log('Login successful:', response.data);

      localStorage.setItem("token",response.data.data.token)
      seterrors("")
  
      // Redirect to the dashboard or perform other actions upon successful login
      router.push('/');
    } catch (error) {
      // Handle errors (e.g., display error message to the user)
      console.error('Login failed:', error.message);
      seterrors("Invalid admin credentials")
    }
  };
  

  const renderForm = (
    <>
      <Stack spacing={5} m={2}>
        <TextField name="email" label="Email address"   onChange={(e) => setEmail(e.target.value)} />

        <TextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

{errors &&(
        <Alert variant="filled" severity="error">
{errors}
</Alert>
      )}
      </Stack>
{/* 
      <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ my: 3 }}>
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack> */}



      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        color="inherit"
        onClick={handleLogin}
      >
        Login
      </LoadingButton>
    </>
  );

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_4.jpg',
        }),
        height: 1,
      }}
    >

      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card
          sx={{
            p: 5,
            width: 1,
            maxWidth: 420,
          }}
          align='center'
        >
          <img alt="icon"  src="/assets/images/logo.png" width="50%"/>
          <Typography variant="h4" align='center'>Admin Sign In</Typography>
          {renderForm}
        </Card>
      </Stack>
    </Box>
  );
}
