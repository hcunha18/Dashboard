import "./index.css";
import Lottie from "lottie-react";
import HomeAnimation from "../../animations/homepageanimation.json/";
import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import { Container, Typography, Button, Stack } from "@mui/material";
import { CardColab } from "../../components/CardColab";

export default function Home() {
  return (
    <div className="container">
      <div className="header">
        <NavBar />
      </div>
      <Container>
        <div>
          <div className="content">
            <div>
              <Typography
                className="h1"
                sx={{
                  color: "white",
                  fontSize: "20px",
                  lineHeight: "150%",
                  maxWidth: "23rem",
                  fontWeight: 400,
                  marginTop: "4rem",
                  fontFamily: "Fira Code",
                  textTransform: "uppercase",
                }}
              >
                Quer prever a evasão da instituição?
              </Typography>
              <Typography
                className="h2"
                sx={{
                  color: "rgba(220, 220, 220, 1)",
                  marginTop: "3rem",
                  lineHeight: "50%",
                  fontWeight: "400",
                  fontSize: "clamp(16px, 1.4vw, 23px)",
                  fontFamily: "Fira Code",
                  textTransform: "uppercase",
                }}
              >
                Como funciona?
              </Typography>
              <Stack>
                <Typography
                  className="p"
                  sx={{
                    color: "rgba(255, 255, 255, 0.5)",
                    fontSize: "clamp(16px, 1.4vw, 18px);",
                    fontWeight: 300,
                    lineHeight: "145%",
                    marginTop: "3rem",
                    maxWidth: "25rem",
                    fontFamily: "Fira Code",
                    textAling: "justify",
                  }}
                >
                  O site tem como intuito, através de algumas informações,
                  encontrar padrões que possibilitam a identificação de alunos
                  com alto risco de evasão. Espera-se fornecer aos setores
                  competentes informações acerca destes alunos, para que possam
                  ser feitas as intervenções pedagógicas necessárias para a
                  diminuição das chances destes alunos deixarem a instituição.
                </Typography>
              </Stack>
              <Button
                sx={{
                  alignSelf: "flex-start",
                  width: "200px",
                  height: "40px",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  marginTop: "3rem",
                  marginBottom: "3rem",
                  background: "#4d61fc",
                  ":hover": { background: "#99CC7F" },
                  fontFamily: "Fira Code",
                }}
              >
                Saiba Mais
              </Button>
            </div>
            <div>
              <Lottie className="lottie" animationData={HomeAnimation} />
            </div>
          </div>
        </div>
        <div className="team">
          <div className="row">
            <h1>Nossa Equipe</h1>
          </div>
          <div className="row">
            <CardColab />
            <CardColab />
            <CardColab />
            <CardColab />
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
