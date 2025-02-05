import {
  Container,
  Stack,
  Card,
  Typography,
  TextField,
  Button,
  Paper,
  FormControl,
} from "@mui/material";
import { NavBar } from "../../components/NavBar";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Alert from "@mui/material/Alert";
import { AuthContext } from "../../context/authContext";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { user, login } = useContext(AuthContext);

  useEffect(() => {
    if (user) return navigation("/feature");
  }, []);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  async function handleSingIn() {
    console.log("handleSignIn");
    const sucess = await login(email, password);
    if (sucess) {
      navigation("/feature");
      setEmail("");
      setPassword("");
    } else alert("ERROOOOOU");
  }
  const [dados, setDados] = useState();
  function saveArquivoNaApiDoHumbertim() {
    const url = "http://localhost:9090/"; // API emulada do python, link pra ela
    // GET - PEGAR ou POST - ENVIAR

    fetch(url + "/modelos", {
      method: "POST",
      body: JSON.stringify({
        infor1: "sei lá",
        info2: "outro dado",
      }),
    })
      .then((resposta) => {
        return resposta.json();
      })
      .then((json) => {
        setDados(json);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleTextFieldPassword(event) {
    setPassword(event.target.value);
  }
  function handleTextFieldUser(event) {
    setEmail(event.target.value);
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
        <Paper
          sx={{
            background: "#464953",
            marginTop: "20vh",
            width: "20rem",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            boxShadow: 2,
            borderRadius: 5,
            border: 1,
            borderColor: "#4169e1",
          }}
          elevation={24}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "Fira Code",
              fontWeight: 1000,
              marginTop: "1rem",
              fontSize: "25px",
              color: "white",
            }}
          >
            Login
          </Typography>
          <Typography
            sx={{ marginTop: "2rem", fontFamily: "Fira Code", color: "white" }}
          >
            Insira o usuário:
          </Typography>
          <FormControl
            sx={{
              width: "15rem",
              borderRadius: 2,
            }}
            variant="filled"
            onChange={handleTextFieldUser}
            value={email}
          >
            <InputLabel
              htmlFor="email"
              sx={{
                color: "rgba(255, 255, 255, 0.5)",
                fontFamily: "Fira Code",
              }}
            >
              exe@email.com
            </InputLabel>
            <OutlinedInput
              id="email"
              type="email"
              endAdornment={
                <InputAdornment position="end" sx={{}}></InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Typography
            sx={{ marginTop: "2rem", fontFamily: "Fira Code", color: "white" }}
          >
            Insira a senha:
          </Typography>
          <FormControl
            sx={{
              width: "15rem",
              borderRadius: 2,
            }}
            variant="filled"
            onChange={handleTextFieldPassword}
            value={password}
          >
            <InputLabel
              htmlFor="password"
              sx={{
                color: "rgba(255, 255, 255, 0.5)",
                fontFamily: "Fira Code",
              }}
            >
              senha
            </InputLabel>
            <OutlinedInput
              id="password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    sx={{ color: "white" }}
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Button
            sx={{
              marginTop: "2rem",
              marginBottom: "2rem",
              background: "blue",
              color: "white",
              fontWeight: 700,
              borderRadius: 2,
              boxShadow: 2,
              width: "10rem",
              fontFamily: "Fira Code",
            }}
            onClick={handleSingIn}
          >
            Entrar
          </Button>
        </Paper>
      </Container>
    </Stack>
  );
}
