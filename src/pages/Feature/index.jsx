import {
  Avatar,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { NavBar } from "../../components/NavBar";
import "./index.css";

export default function Feature() {
  return (
    <Stack sx={{ minHeight: "100vh", background: "#27292f" }}>
      <NavBar />
      <Stack
        sx={{
          backgroundImage:
            "url(https://th.bing.com/th/id/OIP.I5baqsWGBDlScotZyh3z8gHaE7?pid=ImgDet&rs=1)",
          height: "100vh",
          width: "75vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontFamily: "Fira Code",
            fontWeight: 800,
            marginTop: "3rem",
          }}
        >
          Adicione os dados para realizar a previsão
        </Typography>

        <Stack>
          <Typography
            sx={{
              marginTop: "2rem",
              textAlign: "start",
              color: "white",
              fontWeight: 500,
              fontFamily: "Fira Code",
            }}
          >
            Informação:
          </Typography>
          <TextField
            label="Digite..."
            id="outlined-size-small"
            // defaultValue=""
            size="small"
            variant="filled"
            sx={{ background: "white", borderRadius: 2 }}
          />
        </Stack>
        <Stack>
          <Typography
            sx={{
              marginTop: "2rem",
              textAlign: "start",
              color: "white",
              fontWeight: 500,
              fontFamily: "Fira Code",
            }}
          >
            Informação:
          </Typography>
          <TextField
            label="Digite..."
            id="outlined-size-small"
            // defaultValue=""
            size="small"
            variant="filled"
            sx={{ background: "white", borderRadius: 2 }}
          />
        </Stack>
        <Stack>
          <Typography
            sx={{
              marginTop: "2rem",
              textAlign: "start",
              color: "white",
              fontWeight: 500,
              fontFamily: "Fira Code",
            }}
          >
            Informação:
          </Typography>
          <TextField
            label="Digite..."
            id="outlined-size-small"
            // defaultValue=""
            size="small"
            variant="filled"
            sx={{ background: "white", borderRadius: 2 }}
          />
        </Stack>
        <Button
          variant="outlined"
          sx={{ marginTop: "1.5rem", color: "white", fontFamily: "Fira Code" }}
        >
          Submit
        </Button>
      </Stack>
    </Stack>
  );
}
