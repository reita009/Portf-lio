import * as C from "./styled";

import Avatar from "../../assets/Avatar.png";

import ButtonShake from "../ButtonShake";

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
                <ButtonShake className="btn" name="Download CV" />
                <ButtonShake className="btn" name="Entrar em contato" />
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
            Desenvolvedor Front-end com experiência em React.js, Next.js, Redux,
            JavaScript, TypeScript, Styled Components, Material UI e consumo de
            APIs REST. Apaixonado pelo desenvolvimento de componentes
            reutilizáveis. Também possui experiência em projetos gerenciados por
            Metodologias Ágeis. Formado em Sistemas de Informação e cursando
            Especialização em Front-End na Digital House Brasil.
          </p>
        </div>
      </C.Container>
    </>
  );
};

export default Section01;
