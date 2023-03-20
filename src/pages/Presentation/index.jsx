import "./index.css";
import { NavBar } from "../../components/NavBar";
import React, { useCallback, useState } from "react";
import { Container, Divider, Stack, Typography } from "@mui/material";
import { PieGraph } from "../../components/PieGraph";
import { BarGraph } from "../../components/BarGraph";

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

const AtivoSemestreSemDisciplinas = [
  { name: "0", value: 28 },
  { name: "1", value: 0 },
  { name: "2", value: 5 },
  { name: "3", value: 2 },
  { name: "4", value: 1 },
];

const data = [
  { name: "ESPONTÂNEA", value: 20 },
  { name: "NOVO CADASTRO", value: 7 },
  { name: "ABANDONO", value: 8 },
  { name: "DESISTÊNCIA", value: 1 },
];

export default function Presentation() {
  // xs extrapequeno sm small pequeno md medium lg large xl extra large
  return (
    <div className="container">
      <NavBar />
      <Container sx={{ marginTop: 6 }}>
        <Typography
          sx={{
            fontFamily: "inter",
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
            fontFamily: "inter",
            marginBottom: 10,
            fontSize: "18px",
            lineHeight: "150%",
            textAlign: "center",
            fontWeight: 100,
          }}
        >
          Este dashbord tem o objetivo apresentar resultados obtidos pelo
          projeto de IDENTIFICAÇÃO, ANÁLISE E APOIO À TOMADA DE DECISÃO SOBRE
          EVASÃO ESCOLAR NO CONTEXTO DO CURSO DE ENGENHARIA DE COMPUTAÇÃO DO
          CEFET-MG, CAMPUS LEOPOLDINA
        </Typography>
        <div className="contentGraph">
          <Typography
            sx={{
              fontFamily: "inter",
              marginBottom: 10,
              fontSize: "25px",
              lineHeight: "90%",
              maxWidth: "23rem",
              fontWeight: 500,
              textAlign: "center",
            }}
          >
            Quantidade de Semestre Sem disciplinas dos alunos ativos
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={10}
            divider={<Divider orientation="vertical" flexItem color={"#FFF"} />}
          >
            <Stack
              sx={{
                width: { xs: 330, sm: 400, md: 470, lg: 570 },
                height: { xs: 250, sm: 300, md: 400 },
              }}
            >
              <BarGraph content={AtivoSemestreSemDisciplinas} />
            </Stack>
            <div className="text">
              <h2>EXPLICAÇÃO</h2>
              <p>
                O Motivo de trancamento se divide em quatro categorias:
                Solicitação Espontânea, Efetivação de Novo Cadastro, Desistência
                e Abandono.
              </p>
            </div>
          </Stack>
        </div>
        <div className="contentGraph">
          <Typography
            sx={{
              fontFamily: "inter",
              marginBottom: 10,
              fontSize: "25px",
              lineHeight: "90%",
              maxWidth: "23rem",
              fontWeight: 500,
            }}
          >
            Motivo Trancamento
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={10}
            divider={<Divider orientation="vertical" flexItem color={"#FFF"} />}
          >
            <Stack
              sx={{
                width: { xs: 330, sm: 400, md: 470, lg: 570 },
                height: { xs: 250, sm: 300, md: 400 },
              }}
            >
              <BarGraph content={data} />
            </Stack>
            <div className="text">
              <h2>EXPLICAÇÃO</h2>
              <p>
                O Motivo de trancamento se divide em quatro categorias:
                Solicitação Espontânea, Efetivação de Novo Cadastro, Desistência
                e Abandono.
              </p>
            </div>
          </Stack>
        </div>
        <div className="contentGraph">
          <Typography
            sx={{
              textAlign: "center",
              marginTop: 10,
              fontFamily: "inter",
              marginBottom: 10,
              fontSize: "25px",
              lineHeight: "90%",
              maxWidth: "23rem",
              fontWeight: 500,
            }}
          >
            Relação Ativo Cancelado Masculino
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={10}
            divider={<Divider orientation="vertical" flexItem color={"#FFF"} />}
          >
            <Stack
              sx={{
                width: { xs: 330, sm: 400, md: 470, lg: 570 },
                height: { xs: 300, sm: 350, md: 430 },
              }}
            >
              <PieGraph content={AtivoCanceladoMasc} />
            </Stack>
            <div className="text">
              <h2>EXPLICAÇÃO</h2>
              <p>
                O Motivo de trancamento se divide em quatro categorias:
                Solicitação Espontânea, Efetivação de Novo Cadastro, Desistência
                e Abandono.
              </p>
            </div>
          </Stack>
        </div>
        <div className="contentGraph">
          <Typography
            sx={{
              textAlign: "center",
              marginTop: 10,
              fontFamily: "inter",
              marginBottom: 10,
              fontSize: "25px",
              lineHeight: "90%",
              maxWidth: "23rem",
              fontWeight: 500,
            }}
          >
            Relação Ativo Cancelado Feminino
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={10}
            divider={<Divider orientation="vertical" flexItem color={"#FFF"} />}
          >
            <Stack
              sx={{
                width: { xs: 330, sm: 400, md: 470, lg: 570 },
                height: { xs: 300, sm: 350, md: 430 },
              }}
            >
              <PieGraph content={AtivoCanceladoFem} />
            </Stack>
            <div className="text">
              <h2>EXPLICAÇÃO</h2>
              <p>
                O Motivo de trancamento se divide em quatro categorias:
                Solicitação Espontânea, Efetivação de Novo Cadastro, Desistência
                e Abandono.
              </p>
            </div>
          </Stack>
        </div>
        <div className="contentGraph">
          <Typography
            sx={{
              textAlign: "center",
              marginTop: 10,
              fontFamily: "inter",
              marginBottom: 10,
              fontSize: "25px",
              lineHeight: "90%",
              maxWidth: "23rem",
              fontWeight: 500,
            }}
          >
            Cancelados Acima e Abaixo da Media Global
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={10}
            divider={<Divider orientation="vertical" flexItem color={"#FFF"} />}
          >
            <Stack
              sx={{
                width: { xs: 330, sm: 400, md: 470, lg: 570 },
                height: { xs: 300, sm: 350, md: 430 },
              }}
            >
              <PieGraph content={AlunosCanceladoAcimaeAbaixodaMediaHoras} />
            </Stack>
            <div className="text">
              <h2>EXPLICAÇÃO</h2>
              <p>
                O Motivo de trancamento se divide em quatro categorias:
                Solicitação Espontânea, Efetivação de Novo Cadastro, Desistência
                e Abandono.
              </p>
            </div>
          </Stack>
        </div>
        <div className="contentGraph">
          <Typography
            sx={{
              textAlign: "center",
              marginTop: 10,
              fontFamily: "inter",
              marginBottom: 10,
              fontSize: "25px",
              lineHeight: "90%",
              maxWidth: "23rem",
              fontWeight: 500,
            }}
          >
            Ativos Acima e Abaixo da Media Global
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={10}
            divider={<Divider orientation="vertical" flexItem color={"#FFF"} />}
          >
            <Stack
              sx={{
                width: { xs: 330, sm: 400, md: 470, lg: 570 },
                height: { xs: 300, sm: 350, md: 430 },
              }}
            >
              <PieGraph content={AlunosAtivosAcimaeAbaixodaMediaHoras} />
            </Stack>
            <div className="text">
              <h2>EXPLICAÇÃO</h2>
              <p>
                O Motivo de trancamento se divide em quatro categorias:
                Solicitação Espontânea, Efetivação de Novo Cadastro, Desistência
                e Abandono.
              </p>
            </div>
          </Stack>
        </div>
        <div className="contentGraph">
          <Typography
            sx={{
              marginTop: 10,
              fontFamily: "inter",
              marginBottom: 10,
              fontSize: "25px",
              lineHeight: "90%",
              maxWidth: "23rem",
              fontWeight: 500,
            }}
          >
            Escolaridade
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={10}
            divider={<Divider orientation="vertical" flexItem color={"#FFF"} />}
          >
            <Stack
              sx={{
                width: { xs: 330, sm: 400, md: 470, lg: 570 },
                height: { xs: 300, sm: 350, md: 430 },
              }}
            >
              <PieGraph content={dataEscola} />
            </Stack>
            <div className="text">
              <h2>EXPLICAÇÃO</h2>
              <p>
                O Motivo de trancamento se divide em quatro categorias:
                Solicitação Espontânea, Efetivação de Novo Cadastro, Desistência
                e Abandono.
              </p>
            </div>
          </Stack>
        </div>
      </Container>
    </div>
  );
}
