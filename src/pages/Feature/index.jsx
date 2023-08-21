import {
  Button,
  Container,
  Stack,
  Box,
  Typography,
  Divider,
  FormControl,
  Alert,
} from "@mui/material";
import Modal from '@mui/material/Modal';
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import { NavBar } from "../../components/NavBar";
import "./index.css";
import { api } from "../../utils/api";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';

export default function Feature() {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  function handleClose(){
    setisOpen(false);
    setdadosApi('');
  };
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
        "http://200.131.41.200:5000/dado",
        req
      );
      setisOpen(true);
      setdadosApi(data)
    } catch (erro) {
      alert("ALGO NÃO OCORREU COMO PLENEJADO");
    }
  }

  function resultado(){
    if (dadosApi["status"]=="CANCELADO"){
      return <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}><PersonIcon sx={{ color: 'red', width: '8rem', height: '8rem', marginBottom: '1.1rem'}}/><Typography sx={{fontFamily: 'Fira Code'}}>Perfil do aluno: CANCELADO</Typography></Box>
    }
    else {
      return <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}><PersonIcon sx={{ color: 'green', width: '8rem', height: '8rem', marginBottom: '1.1rem'}}/><Typography sx={{fontFamily: 'Fira Code'}}>Perfil do aluno: ATIVO</Typography></Box>
    }
  }

  const modelo = {'status': ''};
  const [dadosApi, setdadosApi] = useState(modelo);
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
  const { user } = useContext(AuthContext);
  const navigation = useNavigate();
  useEffect(() => {
    if (!user) return navigation("/Login");
  }, []);
  const [isOpen, setisOpen] = useState(false);
  return (
    <Stack sx={{ minHeight: "100vh", background: "#fff" }}>
      <NavBar />
      <Divider variant="middle" color='#4169e1' />
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Stack
          sx={{ display: "flex", alignItems: "center", marginTop: "2rem" }}
        >
          <Typography sx={{ color: "black", fontFamily: 'Fira Code', fontSize: '25px' }}>
            Preencha os campos para realizar a previsão
          </Typography>
            <Container sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  {/* Semestre sem Disciplinas */}
                  <Typography
                    sx={{
                      fontFamily: "Fira Code",
                      color: "black",
                      fontSize: '15px',
                      marginTop: "3rem",
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
                    size="small"
                    onChange={handleNewSemestre}
                    value={semestreSemDisciplina}
                  >
                    <InputLabel
                      htmlFor="semestre"
                      sx={{
                        color: "#CCC",
                        fontSize: '12px',
                        fontFamily: "Fira Code",
                      }}
                    >
                      ex: 1, 2, ...
                    </InputLabel>
                    <OutlinedInput
                      id="semestre"
                      type="Number"
                      label="Semestre"
                      sx={{ color: "black", fontFamily: "Fira Code", fontSize: '14px' }}
                    />
                  </FormControl>
                  {/*  */}
                  {/* Quantidade de Reprovação por Nota e Falta */}
                  <Typography
                    sx={{
                      fontFamily: "Fira Code",
                      color: "black",
                      fontSize: '15px',
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
                    size="small"
                    onChange={handleNewNotaFalta}
                    value={repNotaFalta}
                  >
                    <InputLabel
                      htmlFor="notafalta"
                      sx={{
                        color: "#CCC",
                        fontSize: '12px',
                        fontFamily: "Fira Code",
                      }}
                    >
                      ex: 1, 2, ...
                    </InputLabel>
                    <OutlinedInput
                      id="notafalta"
                      type="Number"
                      label="notafalta"
                      sx={{ color: "black", fontFamily: "Fira Code", fontSize: '14px' }}
                    />
                  </FormControl>
                  {/*  */}
                  {/* Quantidade Reprovação Por Nota */}
                  <Typography
                    sx={{
                      fontFamily: "Fira Code",
                      color: "black",
                      fontSize: '15px',
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
                    size="small"
                    onChange={handleNewNota}
                    value={repNota}
                  >
                    <InputLabel
                      htmlFor="notafalta"
                      sx={{
                        color: "#CCC",
                        fontSize: '12px',
                        fontFamily: "Fira Code",
                      }}
                    >
                      ex: 1, 2, ...
                    </InputLabel>
                    <OutlinedInput
                      id="notafalta"
                      type="Number"
                      label="notafalta"
                      sx={{ color: "black", fontFamily: "Fira Code", fontSize: '14px' }}
                    />
                  </FormControl>
                  {/*  */}
                  {/* Total de Horas Flexibilizadas Realizadas */}
                  <Typography
                    sx={{
                      fontFamily: "Fira Code",
                      color: "black",
                      fontSize: '15px',
                      marginTop: "1rem",
                    }}
                  >
                    Total de Horas Flexibilizadas Realizadas:
                  </Typography>
                  <FormControl
                    sx={{
                      width: "15rem",
                      borderRadius: 2,
                      marginBottom: "0rem",
                    }}
                    variant="filled"
                    size="small"
                    onChange={handleNewTotalHFR}
                    value={totalHFR}
                  >
                    <InputLabel
                      htmlFor="totalHFR"
                      sx={{
                        color: "#CCC",
                        fontSize: '12px',
                        fontFamily: "Fira Code",
                      }}
                    >
                      ex: 200, 120, ...
                    </InputLabel>
                    <OutlinedInput
                      id="totalHFR"
                      type="Number"
                      label="totalHFR"
                      sx={{ color: "black", fontFamily: "Fira Code", fontSize: '14px' }}
                    />
                  </FormControl>
                  {/*  */}
                  {/* Média da Frequência */}
                  <Typography
                    sx={{
                      fontFamily: "Fira Code",
                      color: "black",
                      fontSize: '15px',
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
                    size="small"
                    variant="filled"
                    onChange={handleNewFrequencia}
                    value={mediaFrequencia}
                  >
                    <InputLabel
                      htmlFor="Frequencia"
                      sx={{
                        color: "#CCC",
                        fontSize: '12px',
                        fontFamily: "Fira Code",
                      }}
                    >
                      ex: 92.1, 56.7, ...
                    </InputLabel>
                    <OutlinedInput
                      id="Frequencia"
                      type="Number"
                      label="Frequencia"
                      sx={{ color: "black", fontFamily: "Fira Code", fontSize: '14px' }}
                    />
                  </FormControl>
                  {/*  */}
                  {/* Total de Horas Obrigatórias Realizadas */}
                  <Typography
                    sx={{
                      fontFamily: "Fira Code",
                      color: "black",
                      fontSize: '15px',
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
                    size="small"
                    onChange={handleNewTotalHOR}
                    value={totalHOR}
                  >
                    <InputLabel
                      htmlFor="TotalHOR"
                      sx={{
                        color: "#CCC",
                        fontSize: '12px',
                        fontFamily: "Fira Code",
                      }}
                    >
                      ex: 1200, 980, ...
                    </InputLabel>
                    <OutlinedInput
                      id="TotalHOR"
                      type="Number"
                      label="TotalHOR"
                      sx={{ color: "black", fontFamily: "Fira Code", fontSize: '14px' }}
                    />
                  </FormControl>
                  {/*  */}
                  {/* Média Geral */}
                  <Typography
                    sx={{
                      fontFamily: "Fira Code",
                      color: "black",
                      fontSize: '15px',
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
                    size="small"
                    onChange={handleNewGeral}
                    value={mediaGeral}
                  >
                    <InputLabel
                      htmlFor="Geral"
                      sx={{
                        color: "#CCC",
                        fontSize: '12px',
                        fontFamily: "Fira Code",
                      }}
                    >
                      ex: 0.62, 0.93, ...
                    </InputLabel>
                    <OutlinedInput id="Geral" type="Number" label="notafalta"  sx={{ color: "black", fontFamily: "Fira Code", fontSize: '14px' }}/>
                  </FormControl>
                <Button
                  sx={{
                    width: "5rem",
                    height: "2.5rem",
                    marginTop: '3rem',
                    background: "blue",
                    fontFamily: "Fira Code",
                    color: "white",
                  }}
                  onClick={handleSubmit}
                >
                  Enviar
                </Button>
            </Container>
        </Stack>
        <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{fontFamily: 'Fira Code', textAlign: 'center', marginBottom: '1.1rem'}}>
            O algoritimo relacionou o aluno ao seguinte perfil
          </Typography>
          {resultado()}
        </Box>
      </Modal>
      </Container>
    </Stack>
  );
}
