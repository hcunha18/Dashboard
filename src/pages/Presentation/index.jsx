import "./index.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { NavBar } from "../../components/NavBar";
import React, { useCallback, useState } from "react";
import { Container, Divider, Stack, Typography } from "@mui/material";
import { PieGraph } from "../../components/PieGraph";
import { BarGraph } from "../../components/BarGraph";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// cancelado x quantidade de reprovação por nota
const RepPorNota = [
  { name: "0", value: 17 },
  { name: "1", value: 1 },
  { name: "5", value: 4 },
  { name: "7", value: 2 },
  { name: "8", value: 10 },
  { name: "9", value: 2 },
];
// cancelado x quantidade de reprovação por falta
const RepPorFalta = [
  { name: "0", value: 21 },
  { name: "1", value: 1 },
  { name: "2", value: 2 },
  { name: "3", value: 3 },
  { name: "5", value: 3 },
  { name: "6", value: 1 },
  { name: "8", value: 5 },
];
// cancelado x quantidade de aprovação
const Aprovacao = [
  { name: "0", value: 26 },
  { name: "1", value: 1 },
  { name: "2", value: 1 },
  { name: "3", value: 4 },
  { name: "4", value: 1 },
  { name: "12", value: 2 },
  { name: "16", value: 1 },
];

const dataEscola = [
  {
    name: "Pública",
    value: 25,
  },
  {
    name: "Particular",
    value: 11,
  },
];
// ATIVO/CANCELADO FEMINO
const AtivoCanceladoFem = [
  {
    name: "Ativo",
    value: 7,
  },
  {
    name: "Cancelado",
    value: 10,
  },
];

const AlunosAtivosAcimaeAbaixodaMediaHoras = [
  {
    name: "Acima",
    value: 27,
  },
  {
    name: "Abaixo",
    value: 8,
  },
];

const AlunosCanceladoAcimaeAbaixodaMediaHorasCancelados = [
  {
    name: "Acima",
    value: 8,
  },
  {
    name: "Abaixo",
    value: 28,
  },
];

const AlunosCanceladoAcimaeAbaixodaMediaHoras = [
  {
    name: "Acima",
    value: 2,
  },
  {
    name: "Abaixo",
    value: 34,
  },
];

// ATIVO/CANCELADO MASCULINO
const AtivoCanceladoMasc = [
  {
    name: "Ativo",
    value: 29,
  },
  {
    name: "Cancelado",
    value: 26,
  },
];

const TotalDeSemestreAlunonoCurso = [
  { name: "0", value: 17 },
  { name: "1", value: 12 },
  { name: "2", value: 2 },
  { name: "3", value: 4 },
  { name: "4", value: 1 },
];

const CanceladoSemestreSemDisciplinas = [
  { name: "0", value: 20 },
  { name: "1", value: 12 },
  { name: "2", value: 3 },
  { name: "3", value: 1 },
];

const AtivoSemestreSemDisciplinas = [
  { name: "0", value: 28 },
  { name: "1", value: 0 },
  { name: "2", value: 5 },
  { name: "3", value: 2 },
  { name: "4", value: 1 },
];

const data = [
  { name: "1", value: 19 },
  { name: "2", value: 7 },
  { name: "3", value: 10 },
];

export default function Presentation() {
  // xs extrapequeno sm small pequeno md medium lg large xl extra large
  return (
    <div className="container">
      <NavBar />
      <Container sx={{ marginTop: 6 }}>
        <Typography
          sx={{
            fontFamily: "Fira Code",
            marginBottom: 10,
            fontSize: "25px",
            lineHeight: "90%",
            textAlign: "center",
            fontWeight: 500,
          }}
        >
          INTRODUÇÃO
        </Typography>
        <Typography
          sx={{
            fontFamily: "Fira Code",
            marginBottom: 10,
            fontSize: "18px",
            lineHeight: "150%",
            textAlign: "justify",
            fontWeight: 100,
          }}
        >
          Apesar do Art. 205 da Constituição Brasileira [SENADO FEDERAL, 1988]
          garantir que “a educação, direito de todos e dever do Estado e da
          família, será promovida e incentivada com a colaboração da sociedade,
          visando ao pleno desenvolvimento da pessoa, seu preparo para o
          exercício da cidadania e sua qualificação para o trabalho”,
          constata-se que a evasão escolar vem aumentando ao decorrer de cada
          dia. Conforme levantamento realizado pelo Datafolha a pedido do C6
          Bank, 8,4% dos estudantes (cerca de 4 milhões) com idade entre 6 e 34
          anos abandonaram a escola durante a pandemia de Covid19. Já a taxa de
          abandono no âmbito do ensino superior é de cerca de 16,3% dos
          estudantes [SALDAÑA, 2021]. <br /> Caracteriza-se como evasão escolar
          quando tratamos de “um aluno que não retornou à instituição de ensino
          para dar continuidade em seu aprendizado ou não fez sua rematrícula,
          por exemplo”. Considerando como contexto para a realização do presente
          projeto de pesquisa o curso de Engenharia de Computação, ofertado no
          campus Leopoldina desde o segundo semestre letivo do ano de 2018, cabe
          ressaltar que o mesmo conta com um total de 143 alunos ATIVOS, dos
          quais 28 alunos NÃO realizaram sua matrícula no segundo semestre
          letivo de 2022, ou seja, pode-se considerar que estes 28 (19% dos
          ativos) são alunos propensos à evasão, haja vista que ainda têm a
          possibilidade de realizar a matrícula em disciplinas em um próximo
          período, conforme normas acadêmicas vigentes. Além disso, cabe
          ressaltar que atualmente há um total de 36 alunos que realizaram o
          CANCELAMENTO de sua matrícula e realmente desvincularam-se / evadiram
          do curso. Levando em consideração o cenário apresentado, tem-se como
          problema de pesquisa do presente projeto a seguinte questão: “Quais as
          principais causas/padrões referentes à evasão escolar no contexto do
          curso de Engenharia de Computação do CEFET-MG, campus Leopoldina e
          como evitá-las?”. <br /> Buscando entender melhor o problema foi
          levantado alguns dados a fim de traçar um perfil e prever quais
          possíveis alunos tendem a evadir do curso. Juntamente a isso foi
          criada algumas correlações entre os dados apresentados, tais como as
          representadas abaixo:
        </Typography>
        {/* Semestres realizados */}
        <Accordion
          sx={{ background: "#27292f", color: "white" }}
          TransitionProps={{ unmountOnExit: true }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ fontFamily: "Fira Code" }}>
              Semestres realizados
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  marginTop: 10,
                  fontFamily: "Fira Code",
                  marginBottom: 10,
                  fontSize: "25px",
                  lineHeight: "90%",
                  maxWidth: "23rem",
                  fontWeight: 500,
                  textAlign: "center",
                }}
              >
                Semestres Realizados
              </Typography>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={10}
                divider={
                  <Divider orientation="vertical" flexItem color={"#FFF"} />
                }
              >
                <Stack
                  sx={{
                    maxWidth: { xs: 330, sm: 400, md: 470, lg: 1000 },
                    height: { xs: 250, sm: 300, md: 400 },
                    width: "100%",
                  }}
                >
                  <BarGraph content={TotalDeSemestreAlunonoCurso} />
                </Stack>
                <Stack sx={{ maxWidth: 600, width: "100%" }}>
                  <Typography
                    sx={{
                      marginBottom: "1.6rem",
                      fontSize: "18px",
                      fontFamily: "Fira Code",
                    }}
                  >
                    Gráfico Quantidade de Semestres x Quantidade de alunos
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontFamily: "Fira Code",
                    }}
                  >
                    O gráfico ao lado mostra a quantidade de semestres que o
                    aluno com a matrícula cancelada permaneceu no curso. <br />
                    Calculado a partir do semestre de ingresso e com o semestre
                    de saída, obtivemos este gráfico para sabermos como ocorre a
                    evasão do curso. <br /> A partir dele, conseguimos ver que o
                    maior número de cancelados evadem do curso sem mesmo cursar
                    um período, e outra grande parte evade após cursar o
                    primeiro período, mostrando que se não há uma identificação
                    inicial com o curso o aluno ingressante desistiu sem mesmo
                    tentar. <br />
                    Em conversa com a coordenadora do projeto e os demais
                    envolvidos no processo, chegamos a conclusão que, o grande
                    número de cancelamentos/evasão no início do curso provém da
                    dificuldade de adaptação dos alunos aprovados, a aprovação
                    em outras universidades como também o grande déficit de
                    aprendizado.
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </AccordionDetails>
        </Accordion>
        {/* Quantidade de semestre sem disciplinas dos alunos cancelados */}
        <Accordion
          sx={{ background: "#27292f", color: "white" }}
          TransitionProps={{ unmountOnExit: true }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ fontFamily: "Fira Code" }}>
              Quantidade de Semestre Sem disciplinas dos alunos cancelados
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  marginTop: 10,
                  fontFamily: "Fira Code",
                  marginBottom: 10,
                  fontSize: "25px",
                  lineHeight: "90%",
                  maxWidth: "23rem",
                  fontWeight: 500,
                  textAlign: "center",
                }}
              >
                Quantidade de Semestre Sem disciplinas dos alunos cancelados
              </Typography>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={10}
                divider={
                  <Divider orientation="vertical" flexItem color={"#FFF"} />
                }
              >
                <Stack
                  sx={{
                    maxWidth: { xs: 330, sm: 400, md: 470, lg: 1000 },
                    height: { xs: 250, sm: 300, md: 400 },
                    width: "100%",
                  }}
                >
                  <BarGraph content={CanceladoSemestreSemDisciplinas} />
                </Stack>
                <Stack sx={{ maxWidth: 600, width: "100%" }}>
                  <Typography
                    sx={{
                      marginBottom: "1.6rem",
                      fontSize: "18px",
                      fontFamily: "Fira Code",
                    }}
                  >
                    Quantidade de alunos(Y) X Quantidade de Semestres(X)
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontFamily: "Fira Code",
                    }}
                  >
                    O gráfico ao lado mostra a relação da quantidade de
                    semestres que o aluno cancelado teve matriculado no curso,
                    porém sem nenhuma disciplina. <br />
                    Dado retirado dos históricos individuais de cada aluno.
                    <br />O gráfico ao lado ilustra que os alunos que cancelaram
                    a matrícula, não costumam ter semestres sem disciplinas
                    majoritariamente, cancelam logo após o último período
                    cursado.
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </AccordionDetails>
        </Accordion>
        {/* Motivo trancamento */}
        <Accordion
          sx={{ background: "#27292f", color: "white" }}
          TransitionProps={{ unmountOnExit: true }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ fontFamily: "Fira Code" }}>
              Motivo Trancamento
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  marginTop: 10,
                  fontFamily: "Fira Code",
                  marginBottom: 10,
                  fontSize: "25px",
                  lineHeight: "90%",
                  maxWidth: "23rem",
                  fontWeight: 500,
                  textAlign: "center",
                }}
              >
                Motivo Trancamento
              </Typography>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={10}
                divider={
                  <Divider orientation="vertical" flexItem color={"#FFF"} />
                }
              >
                <Stack
                  sx={{
                    maxWidth: { xs: 330, sm: 400, md: 470, lg: 1000 },
                    height: { xs: 250, sm: 300, md: 400 },
                    width: "100%",
                  }}
                >
                  <BarGraph content={data} />
                </Stack>
                <Stack sx={{ maxWidth: 600, width: "100%" }}>
                  <Typography
                    sx={{
                      marginBottom: "1.6rem",
                      fontSize: "18px",
                      fontFamily: "Fira Code",
                    }}
                  >
                    Quantidade de alunos(Y) X Motivo de trancamento(X)
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontFamily: "Fira Code",
                    }}
                  >
                    Com este gráfico é possível relatar todos os motivos de
                    cancelamento registrado no sistema da universidade, sendo
                    eles: <br />
                    <br />
                    Solicitação espontânea(1): Quando o próprio aluno pede para
                    cancelar a matrícula.
                    <br />
                    <br />
                    Efetivação de novo cadastro(2): Troca de curso na mesma
                    instituição, no caso do CEFET/MG campus Leopoldina, quando o
                    estudante muda de Engenharia de Controle e Automação para
                    Computação.
                    <br />
                    <br />
                    Abandono(3): Passou do período imposto para término do curso
                    ou não realizou matrícula em períodos subsequentes.
                    <br />
                    <br />
                    Com o gráfico, conseguimos perceber que o menor motivo de
                    cancelamento é para mudar de curso na mesma instituição, ou
                    seja, pode não haver a identificação com o curso e o aluno
                    procurar por outra área.
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </AccordionDetails>
        </Accordion>
        {/* Cancelamento X Reprovação por nota */}
        <Accordion
          sx={{ background: "#27292f", color: "white" }}
          TransitionProps={{ unmountOnExit: true }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ fontFamily: "Fira Code" }}>
              Cancelado x Quantidade de reprovação por nota
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  marginTop: 10,
                  fontFamily: "Fira Code",
                  marginBottom: 10,
                  fontSize: "25px",
                  lineHeight: "90%",
                  maxWidth: "23rem",
                  fontWeight: 500,
                  textAlign: "center",
                }}
              >
                Cancelado x Quantidade de reprovação por nota
              </Typography>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={10}
                divider={
                  <Divider orientation="vertical" flexItem color={"#FFF"} />
                }
              >
                <Stack
                  sx={{
                    maxWidth: { xs: 330, sm: 400, md: 470, lg: 1000 },
                    height: { xs: 250, sm: 300, md: 400 },
                    width: "100%",
                  }}
                >
                  <BarGraph content={RepPorNota} />
                </Stack>
                <Stack sx={{ maxWidth: 600, width: "100%" }}>
                  <Typography
                    sx={{
                      marginBottom: "1.6rem",
                      fontSize: "18px",
                      textAlign: "center",
                      fontFamily: "Fira Code",
                    }}
                  >
                    Quantidade de alunos cancelados(Y) X Quantidade de
                    reprovação por nota(X)
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontFamily: "Fira Code",
                    }}
                  >
                    Com o gráfico ao lado conseguimos ilustrar que o maior
                    número de reprovação por nota é 0 e o segundo maior é 8 que
                    corresponde a quantidade de disciplinas no primeiro período
                    no caso de computação. Podemos relacionar essa quantidade de
                    reprovação com a desistência após o primeiro contato com o
                    curso.
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </AccordionDetails>
        </Accordion>
        {/* Cancelamento X Reprovação por falta */}
        <Accordion
          sx={{ background: "#27292f", color: "white" }}
          TransitionProps={{ unmountOnExit: true }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ fontFamily: "Fira Code" }}>
              Cancelado x Quantidade de reprovação por falta
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  marginTop: 10,
                  fontFamily: "Fira Code",
                  marginBottom: 10,
                  fontSize: "25px",
                  lineHeight: "90%",
                  maxWidth: "23rem",
                  fontWeight: 500,
                  textAlign: "center",
                }}
              >
                Cancelado x Quantidade de reprovação por falta
              </Typography>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={10}
                divider={
                  <Divider orientation="vertical" flexItem color={"#FFF"} />
                }
              >
                <Stack
                  sx={{
                    maxWidth: { xs: 330, sm: 400, md: 470, lg: 1000 },
                    height: { xs: 250, sm: 300, md: 400 },
                    width: "100%",
                  }}
                >
                  <BarGraph content={RepPorFalta} />
                </Stack>
                <Stack sx={{ maxWidth: 600, width: "100%" }}>
                  <Typography
                    sx={{
                      marginBottom: "1.6rem",
                      fontSize: "18px",
                      textAlign: "center",
                      fontFamily: "Fira Code",
                    }}
                  >
                    Quantidade de alunos cancelados(Y) X Quantidade de
                    reprovação por falta(X)
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontFamily: "Fira Code",
                    }}
                  >
                    Neste gráfico ocorre a mesma situação do gráfico anterior,
                    ou seja, o maior número de reprovação por nota é 0 e a
                    próxima quantidade de reprovação é 8.
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </AccordionDetails>
        </Accordion>
        {/* Cancelamento X Aprovação */}
        <Accordion
          sx={{ background: "#27292f", color: "white" }}
          TransitionProps={{ unmountOnExit: true }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ fontFamily: "Fira Code" }}>
              Cancelado x Quantidade de Aprovação
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  marginTop: 10,
                  fontFamily: "Fira Code",
                  marginBottom: 10,
                  fontSize: "25px",
                  lineHeight: "90%",
                  maxWidth: "23rem",
                  fontWeight: 500,
                  textAlign: "center",
                }}
              >
                Cancelado x Quantidade de Aprovação
              </Typography>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={10}
                divider={
                  <Divider orientation="vertical" flexItem color={"#FFF"} />
                }
              >
                <Stack
                  sx={{
                    maxWidth: { xs: 330, sm: 400, md: 470, lg: 1000 },
                    height: { xs: 250, sm: 300, md: 400 },
                    width: "100%",
                  }}
                >
                  <BarGraph content={Aprovacao} />
                </Stack>
                <Stack sx={{ maxWidth: 600, width: "100%" }}>
                  <Typography
                    sx={{
                      marginBottom: "1.6rem",
                      fontSize: "18px",
                      textAlign: "center",
                      fontFamily: "Fira Code",
                    }}
                  >
                    Quantidade de alunos cancelados(Y) X Quantidade Aprovação(X)
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontFamily: "Fira Code",
                    }}
                  >
                    O gráfico ao lado ilustra a quantidade de aprovação entre os
                    alunos cancelados.
                    <br />O maior número de aprovação dos cancelados reside em
                    0, ou seja, evadem após não ter exito nas disciplinas
                    cursadas.
                    <br />
                    Podemos relacionar este número de aprovação baixa, a
                    dificuldade inicial do aluno que ingressa no curso de
                    Engenharia de Computação no CEFET/MG Campus Leopoldina.
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </AccordionDetails>
        </Accordion>
        {/* Quantidade de alunos Ativos X Quantidade de alunos Cancelados do sexo Masculino */}
        <Accordion
          sx={{ background: "#27292f", color: "white" }}
          TransitionProps={{ unmountOnExit: true }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ fontFamily: "Fira Code" }}>
              Relação Ativo Cancelado Masculino
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  marginTop: 10,
                  fontFamily: "Fira Code",
                  marginBottom: 10,
                  fontSize: "25px",
                  lineHeight: "90%",
                  maxWidth: "23rem",
                  fontWeight: 500,
                  textAlign: "center",
                }}
              >
                Relação Ativo Cancelado Masculino
              </Typography>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={10}
                divider={
                  <Divider orientation="vertical" flexItem color={"#FFF"} />
                }
              >
                <Stack
                  sx={{
                    maxWidth: { xs: 330, sm: 400, md: 470, lg: 1000 },
                    height: { xs: 350, sm: 300, md: 400 },
                    width: "100%",
                  }}
                >
                  <PieGraph content={AtivoCanceladoMasc} />
                </Stack>
                <Stack sx={{ maxWidth: 600, width: "100%" }}>
                  <Typography
                    sx={{
                      marginBottom: "1.6rem",
                      fontSize: "18px",
                      textAlign: "center",
                      fontFamily: "Fira Code",
                    }}
                  >
                    Quantidade de alunos Ativos X Quantidade de alunos
                    Cancelados do sexo Masculino
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontFamily: "Fira Code",
                    }}
                  >
                    No gráfico ao lado, exibimos a relação quantitativa de
                    alunos ainda no curso (Ativo) e a quantidade de alunos que
                    já não estão mais no curso (Cancelados), ambos os dados
                    quantitativos correspondem ao gênero masculino.
                    <br />
                    Percebemos que a quantidade de alunos ativos é maior que a
                    quantidade de alunos cancelados.
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </AccordionDetails>
        </Accordion>
        {/* Quantidade de alunos Ativos X Quantidade de alunos Cancelados do
                sexo Feminino */}
        <Accordion
          sx={{ background: "#27292f", color: "white" }}
          TransitionProps={{ unmountOnExit: true }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ fontFamily: "Fira Code" }}>
              Relação Ativo Cancelado Feminino
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  marginTop: 10,
                  fontFamily: "Fira Code",
                  marginBottom: 10,
                  fontSize: "25px",
                  lineHeight: "90%",
                  maxWidth: "23rem",
                  fontWeight: 500,
                  textAlign: "center",
                }}
              >
                Relação Ativo Cancelado Feminino
              </Typography>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={10}
                divider={
                  <Divider orientation="vertical" flexItem color={"#FFF"} />
                }
              >
                <Stack
                  sx={{
                    maxWidth: { xs: 330, sm: 400, md: 470, lg: 1000 },
                    height: { xs: 350, sm: 300, md: 400 },
                    width: "100%",
                  }}
                >
                  <PieGraph content={AtivoCanceladoFem} />
                </Stack>
                <Stack sx={{ maxWidth: 600, width: "100%" }}>
                  <Typography
                    sx={{
                      marginBottom: "1.6rem",
                      fontSize: "18px",
                      textAlign: "center",
                      fontFamily: "Fira Code",
                    }}
                  >
                    Quantidade de alunos Ativos X Quantidade de alunos
                    Cancelados do sexo Feminino
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontFamily: "Fira Code",
                    }}
                  >
                    No gráfico ao lado, exibimos a relação quantitativa de
                    alunos ainda no curso (Ativo) e a quantidade de alunos que
                    já não estão mais no curso (Cancelados), ambos os dados
                    quantitativos correspondem ao gênero femino.
                    <br />
                    Percebemos que a quantidade de alunos cancelados é maior que
                    a quantidade de alunos ativos.
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </AccordionDetails>
        </Accordion>
        {/* Quantidade de Cancelados Acima X Abaixo da Média das horas obrigatórias */}
        <Accordion
          sx={{ background: "#27292f", color: "white" }}
          TransitionProps={{ unmountOnExit: true }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ fontFamily: "Fira Code" }}>
              Cancelados Acima e Abaixo da Media Global de Horas Obrigatorias
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  marginTop: 10,
                  fontFamily: "Fira Code",
                  marginBottom: 10,
                  fontSize: "25px",
                  lineHeight: "90%",
                  maxWidth: "23rem",
                  fontWeight: 500,
                  textAlign: "center",
                }}
              >
                Cancelados Acima e Abaixo da Media Global de Horas Obrigatorias
              </Typography>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={10}
                divider={
                  <Divider orientation="vertical" flexItem color={"#FFF"} />
                }
              >
                <Stack
                  sx={{
                    maxWidth: { xs: 330, sm: 400, md: 470, lg: 1000 },
                    height: { xs: 350, sm: 300, md: 400 },
                    width: "100%",
                  }}
                >
                  <PieGraph content={AlunosCanceladoAcimaeAbaixodaMediaHoras} />
                </Stack>
                <Stack sx={{ maxWidth: 600, width: "100%" }}>
                  <Typography
                    sx={{
                      marginBottom: "1.6rem",
                      fontSize: "18px",
                      textAlign: "center",
                      fontFamily: "Fira Code",
                    }}
                  >
                    Quantidade de Cancelados Acima X Abaixo da Média das horas
                    obrigatórias
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontFamily: "Fira Code",
                    }}
                  >
                    Para esboçar este gráfico foi considerado a média das horas
                    integralizadas de ambas as classes, tanto a classe de aluno
                    cancelado quanto a classe de aluno ativo, obtivemos a média
                    de 796,07 horas.
                    <br />
                    Relacionando aos cancelados obtivemos um total de apenas
                    5.56% alunos acima dessa média, ou seja, os alunos que têm
                    sua matrícula cancelada não chegam a ter um maior contato
                    com o curso.
                    <br />
                    Destacando a maior necessidade de manter o aluno no curso
                    nos períodos iniciais.
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </AccordionDetails>
        </Accordion>
        {/* Quantidade de Ativos Acima X Abaixo da Média das horas obrigatórias */}
        <Accordion
          sx={{ background: "#27292f", color: "white" }}
          TransitionProps={{ unmountOnExit: true }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ fontFamily: "Fira Code" }}>
              Ativos Acima e Abaixo da Media Global de Horas Obrigatorias
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  marginTop: 10,
                  fontFamily: "Fira Code",
                  marginBottom: 10,
                  fontSize: "25px",
                  lineHeight: "90%",
                  maxWidth: "23rem",
                  fontWeight: 500,
                  textAlign: "center",
                }}
              >
                Ativos Acima e Abaixo da Media Global de Horas Obrigatorias
              </Typography>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={10}
                divider={
                  <Divider orientation="vertical" flexItem color={"#FFF"} />
                }
              >
                <Stack
                  sx={{
                    maxWidth: { xs: 330, sm: 400, md: 470, lg: 1000 },
                    height: { xs: 350, sm: 300, md: 400 },
                    width: "100%",
                  }}
                >
                  <PieGraph content={AlunosAtivosAcimaeAbaixodaMediaHoras} />
                </Stack>
                <Stack sx={{ maxWidth: 600, width: "100%" }}>
                  <Typography
                    sx={{
                      marginBottom: "1.6rem",
                      fontSize: "18px",
                      textAlign: "center",
                      fontFamily: "Fira Code",
                    }}
                  >
                    Quantidade de Ativos Acima X Abaixo da Média das horas
                    obrigatórias
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontFamily: "Fira Code",
                    }}
                  >
                    Para esboçar este gráfico foi considerado a média das horas
                    integralizadas de ambas as classes, tanto a classe de aluno
                    cancelado quanto a classe de aluno ativo, obtivemos a média
                    de 796,07 horas.
                    <br />
                    Relacionando aos cancelados obtivemos um total de 77.14%
                    alunos acima dessa média, ou seja, os alunos que têm sua
                    matrícula Ativa chegam a ter um maior contato com o curso.
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </AccordionDetails>
        </Accordion>
        {/* Media de horas obrigatorias dos cancelados */}
        <Accordion
          sx={{ background: "#27292f", color: "white" }}
          TransitionProps={{ unmountOnExit: true }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ fontFamily: "Fira Code" }}>
              Cancelados Acima e Abaixo da Média de Horas Obrigatorias dos
              cancelados
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  marginTop: 10,
                  fontFamily: "Fira Code",
                  marginBottom: 10,
                  fontSize: "25px",
                  lineHeight: "90%",
                  maxWidth: "23rem",
                  fontWeight: 500,
                  textAlign: "center",
                }}
              >
                Cancelados Acima e Abaixo da Média de Horas Obrigatorias dos
                cancelados
              </Typography>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={10}
                divider={
                  <Divider orientation="vertical" flexItem color={"#FFF"} />
                }
              >
                <Stack
                  sx={{
                    maxWidth: { xs: 330, sm: 400, md: 470, lg: 1000 },
                    height: { xs: 350, sm: 300, md: 400 },
                    width: "100%",
                  }}
                >
                  <PieGraph
                    content={AlunosCanceladoAcimaeAbaixodaMediaHorasCancelados}
                  />
                </Stack>
                <Stack sx={{ maxWidth: 600, width: "100%" }}>
                  <Typography
                    sx={{
                      marginBottom: "1.6rem",
                      fontSize: "18px",
                      textAlign: "center",
                      fontFamily: "Fira Code",
                    }}
                  >
                    Acima x Abaixo da média de horas integralizada dos
                    cancelados
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontFamily: "Fira Code",
                    }}
                  >
                    Neste gráfico, mostramos os alunos cancelados que estão
                    acima da média de horas integralizadas dos cancelados, sendo
                    ela de 90 horas, ou seja, bem menor que a média de horas
                    quando juntamos as duas classes.
                    <br />
                    Entretanto, mesmo com o drástico decaimento das horas, ainda
                    obtivemos um índice baixo de alunos acima, sendo ele de
                    22.22%.
                    <br />
                    Podemos concluir que, os alunos cancelados possuem as horas
                    zeradas ou bem próximo disso.
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </AccordionDetails>
        </Accordion>
        {/* Escolaridade dos cancelados */}
        <Accordion
          sx={{ background: "#27292f", color: "white" }}
          TransitionProps={{ unmountOnExit: true }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ fontFamily: "Fira Code" }}>
              Escolaridade dos Cancelados
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  marginTop: 10,
                  fontFamily: "Fira Code",
                  textAlign: "center",
                  marginBottom: 10,
                  fontSize: "25px",
                  lineHeight: "90%",
                  maxWidth: "23rem",
                  fontWeight: 500,
                }}
              >
                Escolaridade dos Cancelados
              </Typography>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={10}
                divider={
                  <Divider orientation="vertical" flexItem color={"#FFF"} />
                }
              >
                <Stack
                  sx={{
                    maxWidth: { xs: 330, sm: 400, md: 470, lg: 1000 },
                    height: { xs: 350, sm: 300, md: 400 },
                    width: "100%",
                  }}
                >
                  <PieGraph content={dataEscola} />
                </Stack>
                <Stack sx={{ maxWidth: 600, width: "100%" }}>
                  <Typography
                    sx={{
                      marginBottom: "1.6rem",
                      fontSize: "18px",
                      textAlign: "center",
                      fontFamily: "Fira Code",
                    }}
                  >
                    Escola pública x Escola particular
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontFamily: "Fira Code",
                    }}
                  >
                    O gráfico ilustra a quantidade de alunos cuja matrícula foi
                    cancelada, que ingressaram no curso após vir no ensino
                    público ou particular.
                    <br />
                    Conseguimos ver que há um maior índice de cancelamento dos
                    alunos que vieram de escola pública, representando 69.44%
                    dos alunos cancelados.
                    <br />
                    Apontando que, os alunos que provêm do ensino público estão
                    menos preparados e tendem a cancelar suas matrículas.
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </AccordionDetails>
        </Accordion>
      </Container>
    </div>
  );
}
