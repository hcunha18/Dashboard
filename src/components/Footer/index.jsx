import { Stack, Container, Typography, Divider } from "@mui/material";

export function Footer() {
  return (
    <Stack
      sx={{
        height: "10rem",
        width: "100%",
        marginTop: "1rem",
        boxShadow: 1,
      }}
    >
      <Divider color = '#4d61fc'  variant='middle' sx={{marginBottom: '1rem'}}/>
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Stack
          sx={{ marginTop: "1rem", display: "flex", flexDirection: "column" }}
        >
          <Typography
            sx={{ fontFamily: "Fira Code", color: "#a59dad", fontSize: "18px" }}
          >
            Contato Alunos
          </Typography>{" "}
          <Typography
            sx={{
              fontFamily: "Fira Code",
              fontSize: "12px",
              marginTop: "0.75rem",
            }}
          >
            humbertomottadacunha@gmail.com
          </Typography>
          <Typography
            sx={{
              fontFamily: "Fira Code",
              fontSize: "12px",
              marginTop: "0.75rem",
            }}
          >
            rafaelaobraga@hotmail.com
          </Typography>
        </Stack>
        <Stack
          sx={{ marginTop: "1rem", display: "flex", flexDirection: "column" }}
        >
          <Typography
            sx={{
              fontFamily: "Fira Code",
              color: "#a59dad",
              fontSize: "18px",
              textAlign: "center",
            }}
          >
            Sobre
          </Typography>{" "}
          <Typography
            sx={{
              fontFamily: "Fira Code",
              fontSize: "12px",
              marginTop: "0.75rem",
              textAlign: "center",
            }}
          >
            Projeto desenvolvido por alunos do CEFET/MG campus Leopoldina.
          </Typography>
        </Stack>
        <Stack
          sx={{ marginTop: "1rem", display: "flex", flexDirection: "column" }}
        >
          <Typography
            sx={{ fontFamily: "Fira Code", color: "#a59dad", fontSize: "18px" }}
          >
            Contato Coordenadores
          </Typography>{" "}
          <Typography
            sx={{
              fontFamily: "Fira Code",
              fontSize: "12px",
              marginTop: "0.75rem",
            }}
          >
            gabriella@cefetmg.br
          </Typography>
          <Typography
            sx={{
              fontFamily: "Fira Code",
              fontSize: "12px",
              marginTop: "0.75rem",
            }}
          >
            luisaugusto@cefetmg.br
          </Typography>
          <Typography
            sx={{
              fontFamily: "Fira Code",
              fontSize: "12px",
              marginTop: "0.75rem",
            }}
          >
            luan@cefetmg.br
          </Typography>
        </Stack>
      </Container>
    </Stack>
  );
}
