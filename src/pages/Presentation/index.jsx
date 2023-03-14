import "./index.css";
import { NavBar } from "../../components/NavBar";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie,
  Sector,
} from "recharts";
import React, { useCallback, useState } from "react";
import { Container, Divider, Stack, Typography } from "@mui/material";

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`PV ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

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

const dataSexo = [
  {
    name: "F",
    value: 10,
  },
  {
    name: "M",
    value: 26,
  },
];

const data = [
  { name: "ESPONTÂNEA", value: 19 },
  { name: "NOVO CADASTRO", value: 7 },
  { name: "ABANDONO", value: 8 },
  { name: "DESISTÊNCIA", value: 1 },
];

export default function Presentation() {
  const dataManipulado = data.map((dado, index) => {
    if (index % 2 == 0) {
      return { ...dado, color: "var(--blue-200)" };
    }
    return { ...dado, color: "var(--blue-500)" };
  });
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );
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
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  className="barChart"
                  width={500}
                  height={300}
                  data={data}
                >
                  <XAxis dataKey="name" stroke="var(--white)" fontSize={10} />
                  <YAxis stroke="var(--white)" />
                  <Tooltip
                    wrapperStyle={{
                      width: 100,
                      backgroundColor: "var(--background-gray)",
                    }}
                  />
                  <Bar dataKey="value" barSize={25}>
                    {dataManipulado.map((entry, index) => (
                      <Cell fill={entry.color} key={`cell-${index}`} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
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
            Gênero
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={10}>
            <Stack
              sx={{
                width: { xs: 330, sm: 400, md: 470, lg: 570 },
                height: { xs: 300, sm: 350, md: 430 },
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                  <Pie
                    activeIndex={activeIndex}
                    activeShape={renderActiveShape}
                    data={dataSexo}
                    cx={200}
                    cy={200}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    onMouseEnter={onPieEnter}
                  />
                </PieChart>
              </ResponsiveContainer>
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
            Gênero
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={10}>
            <Stack
              sx={{
                width: { xs: 330, sm: 400, md: 470, lg: 570 },
                height: { xs: 300, sm: 350, md: 430 },
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                  <Pie
                    activeIndex={activeIndex}
                    activeShape={renderActiveShape}
                    data={dataEscola}
                    cx={200}
                    cy={200}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    onMouseEnter={onPieEnter}
                  />
                </PieChart>
              </ResponsiveContainer>
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
