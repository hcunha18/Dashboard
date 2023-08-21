import {
    Container,
    Stack,
    Typography,
    Button,
    Paper,
    FormControl,
    Divider,
  } from "@mui/material";
  import AccountCircleIcon from '@mui/icons-material/AccountCircle';
  import "./index.css"
  import { NavBar } from "../../components/NavBar";
  import { useContext, useEffect, useState } from "react";
  import { useNavigate } from "react-router-dom";
  import OutlinedInput from "@mui/material/OutlinedInput";
  import InputLabel from "@mui/material/InputLabel";
  import Visibility from "@mui/icons-material/Visibility";
  import VisibilityOff from "@mui/icons-material/VisibilityOff";
  import IconButton from "@mui/material/IconButton";
  import InputAdornment from "@mui/material/InputAdornment";
  import { AuthContext } from "../../context/authContext";
  import styled, { keyframes } from 'styled-components';

  import PersonPinCircleSharpIcon from '@mui/icons-material/PersonPinCircleSharp';
  import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';

  export default function NewLogin() {
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
      <Stack sx={{ minHeight: "100vh", background: "#fff" }}>
        <NavBar />
        <Divider variant="middle" color='#4169e1' />
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: 'column',
            alignItems: 'center'
          }}
        > 
            <Paper
              sx={{
                background: "#fff",
                marginTop: "15vh",
                width: "20rem",
                height: '25rem',
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
                  color: "#000",
                }}
              >
                Login
              </Typography>
              <AccountCircleIcon sx={{width: '35px', height: '35px', marginBottom: 0, paddingBottom: 0}}/>
              <Typography
                sx={{ marginTop: "1rem", fontFamily: "Fira Code", color: "#000" }}
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
                sx={{ marginTop: "2rem", fontFamily: "Fira Code", color: "black" }}
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
  
//   const animation = keyframes`
//   0% {
//     transform: rotate( 0deg ) ; scale( 1 );
//   }
//   25% {
//     transform: rotate( 15deg ) ; scale( 1 );
//   }
//   50% {
//     transform: rotate( -180deg ) ; scale( 1.4 );
//   }
//   100% {
//     transform: rotate( -360deg ) ; scale( 1 );
//   } 
// `

// const Wrapper = styled.span`
//     display: inline-block;
//     animation-name: ${animation};
//     animation-duration: 15s;
//     animation-fill-mode: forwards;
//     animation-iteration-count: infinite;
//     animation-timing-function: linear;
// `