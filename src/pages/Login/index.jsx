import {
  Container,
  Stack,
  Card,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { NavBar } from "../../components/NavBar";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../server/firebase.js";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();

  // function handleSingIn() {
  //   signInWithEmailAndPassword(user, password)
  //     .then((userCredential) => {
  //       const usuario = userCredential.user;
  //       if (usuario) {
  //         console.log("Erro ao autenticar usuário");
  //       } else {
  //         navigation.navigate("Feature"); // Navega para a tela "Feature"
  //       }
  //       console.log("arlindo");
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.log(
  //         `Erro ao autenticar usuário: ${errorCode} - ${errorMessage}`
  //       );
  //     });
  //   setUser("");
  //   setPassword("");
  // }
  function handleSingIn() {
    signInWithEmailAndPassword(auth, user, password)
      .then((userCredential) => {
        const usuario = userCredential.user;
        return usuario;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  function handleTextFieldPassword() {
    setPassword(event.target.value);
  }
  function handleTextFieldUser() {
    setUser(event.target.value);
  }
  return (
    <Stack sx={{ minHeight: "100vh", background: "#27292f" }}>
      <NavBar />
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card
          sx={{
            marginTop: "20vh",
            width: "23rem",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            boxShadow: 2,
            borderRadius: 5,
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "Fira Code",
              fontWeight: 1000,
              marginTop: "1rem",
              fontSize: "25px",
            }}
          >
            Login
          </Typography>
          <Typography sx={{ marginTop: "2rem", fontFamily: "Fira Code" }}>
            Insira o usuário:
          </Typography>
          <TextField
            id="outlined-basic"
            label="Usuário"
            variant="outlined"
            fontFamily="Fira Code"
            sx={{
              fontFamily: "Fira Code",
              color: "white",
            }}
            onChange={handleTextFieldUser}
            value={user}
          />
          <Typography sx={{ marginTop: "2rem", fontFamily: "Fira Code" }}>
            {" "}
            Insira a senha:
          </Typography>
          <TextField
            id="password"
            label="Senha"
            variant="outlined"
            fontFamily="Fira Code"
            sx={{}}
            onChange={handleTextFieldPassword}
            value={password}
          />
          <Button
            sx={{
              marginTop: "2rem",
              marginBottom: "2rem",
              background: "blue",
              color: "black",
              fontWeight: 700,
              borderRadius: 2,
              boxShadow: 2,
              width: "10rem",
            }}
            onClick={
              handleSingIn ? () => navigation("/feature") : console.log("erro")
            }
          >
            Entrar
          </Button>
        </Card>
      </Container>
    </Stack>
  );
}
