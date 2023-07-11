import * as C from "./styled";

import Avatar from "../../assets/Avatar.png";

import ButtonShake from "../ButtonShake";

const urlDownload =
  "https://drive.google.com/file/d/1V8Q8b7zdViIPEyMckPnjHlYfUaPPEUWP/view";

const Section01 = () => {
  return (
    <>
      <C.Container>
        <div className="up">
          <div className="left">
            <div className="mySelf">
              <h1>
                Olá, eu sou o <br />
                <span>Julio Santana</span>
              </h1>
              <p>Desenvolvedor Full-Stack</p>
              <div className="btn-group">
                <a href={urlDownload} target="_blank">
                  <ButtonShake className="btn" name="Download CV" />
                </a>
              </div>
            </div>
          </div>

          <div className="right">
            <div className="avatar">
              <img src={Avatar} />
            </div>
          </div>
        </div>

        <div className="bottom">
          <h1>Sobre mim</h1>
          <p>
            Desenvolvedor Full-Stack com experiência em React.js, Node-Js, Php,
            JavaScript, TypeScript, Styled Components, Material UI e consumo de
            APIs REST. Apaixonado pelo desenvolvimento de componentes
            reutilizáveis. Também possuo experiência em projetos gerenciados por
            Metodologias Ágeis. Cursando Análise e Desenvolvimento de Sistemas e
            Especialização em Front-End na B7web.
          </p>
        </div>
      </C.Container>
    </>
  );
};

export default Section01;
