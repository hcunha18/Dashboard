import {
  Container,
  Stack,
  Card,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { NavBar } from "../../components/NavBar";

export default function Login() {
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
          />
          <Button
            sx={{
              marginTop: "2rem",
              marginBottom: "2rem",
              background: "blue",
              color: "white",
              fontWeight: 500,
              borderRadius: 2,
              ":houver": { backgroundColor: "#8bbfff" },
            }}
          >
            Entrar
          </Button>
        </Card>
      </Container>
    </Stack>
  );
}
