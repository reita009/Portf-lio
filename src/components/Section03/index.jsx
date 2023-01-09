import * as C from "./styled";
import image from "../../assets/Project1.png";

const Section03 = () => {
  return (
    <>
      <C.Container>
        <h1>Projetos</h1>

        <div className="box-project">
          <div className="title">
            <h1>Destaques</h1>
          </div>

          <div
            className="project"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
            }}
          >
            <h1>Loocal</h1>
          </div>
        </div>
      </C.Container>
    </>
  );
};

export default Section03;
