import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import Footer from "../components/Footer";
// Styling Imports
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Paper,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function Signup(props) {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        username: formState.username,
        email: formState.email,
        password: formState.password,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "./assets/images/backgrounds/cover2.png"
            })`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleFormSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                type="username"
                autoComplete="username"
                autoFocus
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                type="email"
                autoComplete="email"
                autoFocus
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </Box>
            <Grid container>
              <Grid item xs>
              <Link href="/Home" variant="body2">← Go to Login</Link>
              </Grid>
            </Grid>
            {/* Error Message for invalid username */}
            {/* {error ? (
              <div>
                <p className="error-text">
                  The provided credentials are incorrect
                </p>
              </div>
            ) : // <Modal
            //   open={error.message}
            //   onClose={handleClose}
            //   aria-labelledby="modal-modal-title"
            //   aria-describedby="modal-modal-description"
            // >
            //   <Box sx={style}>
            //     <Typography
            //       id="modal-modal-title"
            //       variant="h6"
            //       component="h2"
            //     >
            //       Great minds think alike!
            //     </Typography>
            //     <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            //       Unfortunatly this username or email is already taken...
            //     </Typography>
            //   </Box>
            // </Modal>
            null} */}
            <Footer sx={{ mt: 5 }} />
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
