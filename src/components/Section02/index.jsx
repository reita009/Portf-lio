import * as C from "./styled";

//icons
import JavascriptIcon from "@mui/icons-material/Javascript";
import PhpIcon from "@mui/icons-material/Php";
import CodeIcon from "@mui/icons-material/Code";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import TitleIcon from "@mui/icons-material/Title";
import StorageIcon from "@mui/icons-material/Storage";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import SendToMobileIcon from "@mui/icons-material/SendToMobile";
import HdrAutoIcon from "@mui/icons-material/HdrAuto";
import GitHubIcon from "@mui/icons-material/GitHub";
import BrushIcon from "@mui/icons-material/Brush";

const Section02 = () => {
  return (
    <>
      <C.Container>
        <div className="title">
          <h1>Habilidades</h1>
        </div>

        <div className="container-icons">
          <div className="skill">
            <p>JavaScript</p>
            <JavascriptIcon className="icon" />
          </div>
          <div className="skill">
            <p>PHP</p>
            <PhpIcon className="icon" />
          </div>
          <div className="skill">
            <p>HTML</p>
            <CodeIcon className="icon" />
          </div>
          <div className="skill">
            <p>CSS</p>
            <CodeOffIcon className="icon" />
          </div>
          <div className="skill">
            <p>Styled-componemts</p>
            <BrushIcon className="icon" />
          </div>
          <div className="skill">
            <p>TypeScript</p>
            <TitleIcon className="icon" />
          </div>
          <div className="skill">
            <p>SQL/MySQL</p>
            <StorageIcon className="icon" />
          </div>
          <div className="skill">
            <p>React JS</p>
            <IntegrationInstructionsIcon className="icon" />
          </div>
          <div className="skill">
            <p>React Native</p>
            <SendToMobileIcon className="icon" />
          </div>
          <div className="skill">
            <p>Angular</p>
            <HdrAutoIcon className="icon" />
          </div>
          <div className="skill">
            <p>Git/GitHub</p>
            <GitHubIcon className="icon" />
          </div>
        </div>
      </C.Container>
    </>
  );
};

export default Section02;
