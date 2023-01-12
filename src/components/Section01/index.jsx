import * as C from "./styled";

import Avatar from "../../assets/Avatar.png";

import ButtonShake from "../ButtonShake";

const urlDownload =
  "https://drive.google.com/file/d/1aPVtk4lXnvu9IHvOMyQ0tbtJCqaJUQXU/view?usp=share_link";

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
              <p>Desenvolvedor Front-End</p>
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
            Desenvolvedor Front-end com experiência em React.js, php,
            JavaScript, TypeScript, Styled Components, Material UI e consumo de
            APIs REST. Apaixonado pelo desenvolvimento de componentes
            reutilizáveis. Também possui experiência em projetos gerenciados por
            Metodologias Ágeis. cursando análise e desenvolvimento de sistemas e
            Especialização em Front-End na B7web .
          </p>
        </div>
      </C.Container>
    </>
  );
};

export default Section01;
