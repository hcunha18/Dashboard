import {
  Avatar,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
  Paper,
  FormControl,
} from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import { NavBar } from "../../components/NavBar";
import "./index.css";
import { api } from "../../utils/api";
import { useState } from "react";
import { alignProperty } from "@mui/material/styles/cssUtils";

export default function Feature() {
  async function handleSubmit() {
    const req = {
      semestreSemDisciplina,
      repNotaFalta,
      repNota,
      mediaFrequencia,
      mediaGeral,
      totalHOR,
      totalHFR,
    };
    try {
      const { data } = await api.post(
        "https://evasaoengenharia.projetoscomputacao.com.br/API",
        req
      );
      console.log(data);
      setDadosPython(data);
    } catch (erro) {
      console.log("erro", erro);
    }
  }
  const [semestreSemDisciplina, setsemestreSemDisciplina] = useState("");
  function handleNewSemestre(event) {
    setsemestreSemDisciplina(event.target.value);
  }
  const [repNotaFalta, setrepNotaFalta] = useState("");
  function handleNewNotaFalta(event) {
    setrepNotaFalta(event.target.value);
  }
  const [repNota, setrepNota] = useState("");
  function handleNewNota(event) {
    setrepNota(event.target.value);
  }
  const [mediaFrequencia, setmediaFrequencia] = useState("");
  function handleNewFrequencia(event) {
    setmediaFrequencia(event.target.value);
  }
  const [totalHOR, settotalHOR] = useState("");
  function handleNewTotalHOR(event) {
    settotalHOR(event.target.value);
  }
  const [mediaGeral, setmediaGeral] = useState("");
  function handleNewGeral(event) {
    setmediaGeral(event.target.value);
  }
  const [totalHFR, settotalHFR] = useState("");
  function handleNewTotalHFR(event) {
    settotalHFR(event.target.value);
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
        <Stack
          sx={{ display: "flex", alignItems: "center", marginTop: "2rem" }}
        >
          <Typography sx={{ color: "white" }}>
            Preencha os campos para realizar a previsão
          </Typography>
          <Paper
            sx={{
              background: "#464953",
              minWidth: "40rem",
              display: "flex",
              alignItems: "",
              flexDirection: "column",
              boxShadow: 2,
              borderRadius: 5,
              border: 1,
              borderColor: "#4169e1",
              minHeight: "20rem",
            }}
            elevation={24}
          >
            <Container>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",

                  alignItems: "center",
                }}
              >
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginRight: "3rem",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Fira Code",
                      color: "white",
                      fontSize: 12,
                      marginTop: "1rem",
                    }}
                  >
                    Semestre Sem Disciplina:
                  </Typography>
                  <FormControl
                    sx={{
                      width: "15rem",
                      borderRadius: 2,
                    }}
                    variant="filled"
                    onChange={handleNewSemestre}
                    value={semestreSemDisciplina}
                  >
                    <InputLabel
                      htmlFor="semestre"
                      sx={{
                        color: "rgba(255, 255, 255, 0.5)",
                        fontFamily: "Fira Code",
                      }}
                    >
                      ex: 1, 2, ...
                    </InputLabel>
                    <OutlinedInput
                      id="semestre"
                      type="Number"
                      label="Semestre"
                      sx={{ color: "white", fontFamily: "Fira Code" }}
                    />
                  </FormControl>
                  <Typography
                    sx={{
                      fontFamily: "Fira Code",
                      color: "white",
                      fontSize: 12,
                      marginTop: "1rem",
                    }}
                  >
                    Quantidade Reprovação Nota e Falta:
                  </Typography>
                  <FormControl
                    sx={{
                      width: "15rem",
                      borderRadius: 2,
                    }}
                    variant="filled"
                    onChange={handleNewNotaFalta}
                    value={repNotaFalta}
                  >
                    <InputLabel
                      htmlFor="notafalta"
                      sx={{
                        color: "rgba(255, 255, 255, 0.5)",
                        fontFamily: "Fira Code",
                      }}
                    >
                      ex: 1, 2, ...
                    </InputLabel>
                    <OutlinedInput
                      id="notafalta"
                      type="Number"
                      label="notafalta"
                      sx={{ color: "white", fontFamily: "Fira Code" }}
                    />
                  </FormControl>
                  <Typography
                    sx={{
                      fontFamily: "Fira Code",
                      color: "white",
                      fontSize: 12,
                      marginTop: "1rem",
                    }}
                  >
                    Quantidade Reprovação Por Nota:
                  </Typography>
                  <FormControl
                    sx={{
                      width: "15rem",
                      borderRadius: 2,
                    }}
                    variant="filled"
                    onChange={handleNewNota}
                    value={repNota}
                  >
                    <InputLabel
                      htmlFor="notafalta"
                      sx={{
                        color: "rgba(255, 255, 255, 0.5)",
                        fontFamily: "Fira Code",
                      }}
                    >
                      ex: 1, 2, ...
                    </InputLabel>
                    <OutlinedInput
                      id="notafalta"
                      type="Number"
                      label="notafalta"
                      sx={{ color: "white", fontFamily: "Fira Code" }}
                    />
                  </FormControl>
                  <Typography
                    sx={{
                      fontFamily: "Fira Code",
                      color: "white",
                      fontSize: 12,
                      marginTop: "1rem",
                    }}
                  >
                    Total de Horas Flexibilizadas Realizadas:
                  </Typography>
                  <FormControl
                    sx={{
                      width: "15rem",
                      borderRadius: 2,
                      marginBottom: "1rem",
                    }}
                    variant="filled"
                    onChange={handleNewTotalHFR}
                    value={totalHFR}
                  >
                    <InputLabel
                      htmlFor="totalHFR"
                      sx={{
                        color: "rgba(255, 255, 255, 0.5)",
                        fontFamily: "Fira Code",
                      }}
                    >
                      ex: 200, 120, ...
                    </InputLabel>
                    <OutlinedInput
                      id="totalHFR"
                      type="Number"
                      label="totalHFR"
                      sx={{ color: "white", fontFamily: "Fira Code" }}
                    />
                  </FormControl>
                </Stack>
                <Stack sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    sx={{
                      fontFamily: "Fira Code",
                      color: "white",
                      fontSize: 12,
                      marginTop: "1rem",
                    }}
                  >
                    Média da Frequência:
                  </Typography>
                  <FormControl
                    sx={{
                      width: "15rem",
                      borderRadius: 2,
                    }}
                    variant="filled"
                    onChange={handleNewFrequencia}
                    value={mediaFrequencia}
                  >
                    <InputLabel
                      htmlFor="Frequencia"
                      sx={{
                        color: "rgba(255, 255, 255, 0.5)",
                        fontFamily: "Fira Code",
                      }}
                    >
                      ex: 92.1, 56.7, ...
                    </InputLabel>
                    <OutlinedInput
                      id="Frequencia"
                      type="Number"
                      label="Frequencia"
                      sx={{ color: "white", fontFamily: "Fira Code" }}
                    />
                  </FormControl>
                  <Typography
                    sx={{
                      fontFamily: "Fira Code",
                      color: "white",
                      fontSize: 12,
                      marginTop: "1rem",
                    }}
                  >
                    Total de Horas Obrigatórias Realizada:
                  </Typography>
                  <FormControl
                    sx={{
                      width: "15rem",
                      borderRadius: 2,
                    }}
                    variant="filled"
                    onChange={handleNewTotalHOR}
                    value={totalHOR}
                  >
                    <InputLabel
                      htmlFor="TotalHOR"
                      sx={{
                        color: "rgba(255, 255, 255, 0.5)",
                        fontFamily: "Fira Code",
                      }}
                    >
                      ex: 1200, 980, ...
                    </InputLabel>
                    <OutlinedInput
                      id="TotalHOR"
                      type="Number"
                      label="TotalHOR"
                      sx={{ color: "white", fontFamily: "Fira Code" }}
                    />
                  </FormControl>
                  <Typography
                    sx={{
                      fontFamily: "Fira Code",
                      color: "white",
                      fontSize: 12,
                      marginTop: "1rem",
                    }}
                  >
                    Média Geral:
                  </Typography>
                  <FormControl
                    sx={{
                      width: "15rem",
                      borderRadius: 2,
                    }}
                    variant="filled"
                    onChange={handleNewGeral}
                    value={mediaGeral}
                  >
                    <InputLabel
                      htmlFor="Geral"
                      sx={{
                        color: "rgba(255, 255, 255, 0.5)",
                        fontFamily: "Fira Code",
                      }}
                    >
                      ex: 0.62, 0.93, ...
                    </InputLabel>
                    <OutlinedInput id="Geral" type="Number" label="notafalta" />
                  </FormControl>
                </Stack>
                <Button
                  sx={{
                    width: "5rem",
                    height: "2.5rem",
                    marginLeft: "2rem",
                    marginRight: "2rem",
                    background: "blue",
                    fontFamily: "Fira Code",
                    color: "white",
                  }}
                  onClick={handleSubmit}
                >
                  Enviar
                </Button>
              </Stack>
            </Container>
          </Paper>
        </Stack>
      </Container>
    </Stack>
  );
}
