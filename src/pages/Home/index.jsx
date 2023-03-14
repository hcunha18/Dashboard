import "./index.css";
import Lottie from "lottie-react";
import HomeAnimation from "../../animations/homepageanimation.json/";
import { NavBar } from "../../components/NavBar";
import { Container } from "@mui/material";

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
              <h1>Quer prever a evasão da instituição?</h1>
              <h2>Como funciona?</h2>
              <p>
                O site tem como intuito, através de algumas informações em PDF,
                encontrar padrões que possibilitam a identificação de alunos com
                alto risco de evasão. Espera-se fornecer aos setores competentes
                informações acerca destes alunos, para que possam ser feitas as
                intervenções pedagógicas necessárias para a diminuição das
                chances destes alunos deixarem a instituição.
                <button>Saiba Mais.</button>
              </p>
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
            <div className="column">
              <div className="card">
                <div className="img">
                  <img
                    src="https://sig-arquivos.cefetmg.br//arquivos/20210421204c6032566250aa79cdc877a/Foto.gif"
                    alt=""
                  />
                </div>
                <h3>Gabriella</h3>
                <p>Orientadora</p>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="img">
                  <img
                    src="https://sig-arquivos.cefetmg.br//arquivos/20210421204c6032566250aa79cdc877a/Foto.gif"
                    alt=""
                  />
                </div>
                <h3>Gabriella</h3>
                <p>Orientadora</p>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="img">
                  <img
                    src="https://sig-arquivos.cefetmg.br//arquivos/20210421204c6032566250aa79cdc877a/Foto.gif"
                    alt=""
                  />
                </div>
                <h3>Gabriella</h3>
                <p>Orientadora</p>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="img">
                  <img
                    src="https://sig-arquivos.cefetmg.br//arquivos/20210421204c6032566250aa79cdc877a/Foto.gif"
                    alt=""
                  />
                </div>
                <h3>Gabriella</h3>
                <p>Orientadora</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
