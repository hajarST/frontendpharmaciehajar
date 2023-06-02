import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
      GeoPharma
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
  const navigate = useNavigate();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  React.useEffect(() => {
    setAge(age);
  }, [age]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    console.log({
      nom: data.get("nom"),
      prenom: data.get("prenom"),
      email: data.get("email"),
      telephone: data.get("telephone"),
      password: data.get("password"),
      roles: [
        {
          id: age === 1 ? null : 2,
        },
      ],
    });
    const role = age === 1 ? null : { id: 1 };

    const response = await axios.post("http://localhost:8080/users/save", {
      nom: data.get("nom"),
      prenom: data.get("prenom"),
      email: data.get("email"),
      telephone: data.get("telephone"),
      password: data.get("password"),
      roles: [role],
    });
    navigate("/");
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "green" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="prenom"
                  required
                  fullWidth
                  id="prenom"
                  label="Prenom"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="nom"
                  label="Nom"
                  name="nom"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="telephone"
                  label="Telephone"
                  type="telephone"
                  id="telephone"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Selectioner type d'utilisation
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>Admin</MenuItem>
                    <MenuItem value={2}>Proprietaire</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: 'green' }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
// import React, { useState } from 'react';
// import axios from 'axios';
// import { Container, Form, Button } from 'react-bootstrap';

// const Signup = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const user = {
//       email: email,
//       password: password,
//       firstName: firstName,
//       lastName: lastName
//     };

//     axios.post('http://localhost:8080/users/register', user)
//       .then(response => {
//         // Gérer la réponse après l'inscription réussie
//         console.log(response.data);
//       })
//       .catch(error => {
//         // Gérer les erreurs d'inscription
//         console.log(error);
//       });
//   };

//   return (
//     <Container>
//       <h1>Inscription</h1>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group controlId="email">
//           <Form.Label>Email:</Form.Label>
//           <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         </Form.Group>
//         <Form.Group controlId="password">
//           <Form.Label>Mot de passe:</Form.Label>
//           <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//         </Form.Group>
//         <Form.Group controlId="firstName">
//           <Form.Label>Prénom:</Form.Label>
//           <Form.Control type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
//         </Form.Group>
//         <Form.Group controlId="lastName">
//           <Form.Label>Nom:</Form.Label>
//           <Form.Control type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
//         </Form.Group>
//         <Button variant="primary" type="submit">S'inscrire</Button>
//       </Form>
//     </Container>
//   );
// };

// export default Signup;
