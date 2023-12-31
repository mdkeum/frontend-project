import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from '../components/copyright';
import { baseUrl } from "../config"


const defaultTheme = createTheme();

export default function LogIn() {
  let [username, setUsername] = React.useState("");
  let [password, setPassword] = React.useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    await fetch(
      `${baseUrl}/api/auth/signin`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          username, password
        })
      })
      .then(response => { return response.json(); })
      .then(responseData => {
        if (responseData.message == 'success') {
          const email = sessionStorage.setItem("email", responseData.email);
          window.location.replace('/');
        } else {
          alert(responseData.message)
        }
      })

  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log In
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={e => setUsername(e.target.value)}
              value={username}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={e => setPassword(e.target.value)}
              value={password}
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Log In
            </Button>
            <Link href="/registration" variant="body2">
              {"Don't have an account? Register"}
            </Link>
          </Box>
        </Box>
      </Container>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </ThemeProvider>
  );
}