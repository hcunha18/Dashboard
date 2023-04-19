import {
  Avatar,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { NavBar } from "../../components/NavBar";

export default function Feature() {
  return (
    <Stack sx={{ minHeight: "100vh", background: "#27292f" }}>
      <NavBar />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            color: "white",
            fontSize: "22px",
            marginTop: "2rem",
            maxWidth: "32rem",
          }}
        >
          Com o objetivo de intervir antes da evasão do aluno do curso foi
          criado o modelo a seguir
        </Typography>
        <Typography
          sx={{ fontStyle: "italic", color: "white", marginTop: "2rem" }}
        >
          Atenção: O modelo criado pode não condizer com a realidade
        </Typography>
        <Avatar
          src="/broken-image.jpg"
          sx={{ margin: "3rem", width: "7rem", height: "7rem" }}
        />
        <Typography sx={{ color: "white", marginTop: "1rem" }}>
          Horas Obrigatorias Integralizadas:
        </Typography>
        <TextField
          label="Ex:1540"
          variant="filled"
          sx={{
            color: "white",
            marginTop: "0.25rem",
            background: "white",
            borderRadius: 2,
            width: "25rem",
          }}
        />
        <Typography sx={{ color: "white", marginTop: "1rem" }}>!!!:</Typography>
        <TextField
          label="***"
          variant="filled"
          sx={{
            color: "white",
            marginTop: "0.25rem",
            background: "white",
            borderRadius: 2,
            width: "25rem",
          }}
        />
        <Typography sx={{ color: "white", marginTop: "1rem" }}>!!!:</Typography>
        <TextField
          label="***"
          variant="filled"
          sx={{
            color: "white",
            marginTop: "0.25rem",
            background: "white",
            borderRadius: 2,
            width: "25rem",
          }}
        />

        <Button
          variant="contained"
          sx={{
            marginTop: "2rem",
            width: "10rem",
            height: "3rem",
            borderRadius: 5,
          }}
        >
          Subimit
        </Button>
      </Container>
    </Stack>
  );
}
