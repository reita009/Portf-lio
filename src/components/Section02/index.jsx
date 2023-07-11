import * as C from "./styled";

//icons
import AngularIcon from "../../assets/angular-icon.png";
import CssIcon from "../../assets/css-icon.png";
import GitIcon from "../../assets/git-icon.png";
import GmainIcon from "../../assets/gmail-icon.png";
import HtmlIcon from "../../assets/html-icon.png";
import JsIcon from "../../assets/js-icon.png";
import LinkedinIcon from "../../assets/linkedin-icon.png";
import MysqlIcon from "../../assets/mysql-icon.png";
import NativeIcon from "../../assets/native-icon.png";
import PhpIcon from "../../assets/php-icon.png";
import ReactIcon from "../../assets/react-icon.png";
import StyledIcon from "../../assets/styled-component-icon.png";
import TypeScriptIcon from "../../assets/typescript-icon.png";
import NodeJsIcon from "../../assets/node-js-icon.png";

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
            <img src={JsIcon} className="icon" />
          </div>
          <div className="skill">
            <p>PHP</p>
            <img src={PhpIcon} className="icon" />
          </div>
          <div className="skill">
            <p>HTML</p>
            <img src={HtmlIcon} className="icon" />
          </div>
          <div className="skill">
            <p>CSS</p>
            <img src={CssIcon} className="icon" />
          </div>
          <div className="skill">
            <p>Styled-componemts</p>
            <img src={StyledIcon} className="icon" />
          </div>
          <div className="skill">
            <p>TypeScript</p>
            <img src={TypeScriptIcon} className="icon" />
          </div>
          <div className="skill">
            <p>SQL/MySQL</p>
            <img src={MysqlIcon} className="icon" />
          </div>
          <div className="skill">
            <p>React JS</p>
            <img src={ReactIcon} className="icon" />
          </div>
          <div className="skill">
            <p>React Native</p>
            <img src={NativeIcon} className="icon" />
          </div>
          <div className="skill">
            <p>Angular</p>
            <img src={AngularIcon} className="icon" />
          </div>
          <div className="skill">
            <p>Git/GitHub</p>
            <img src={GitIcon} className="icon" />
          </div>
          <div className="skill">
            <p>Node-Js</p>
            <img src={NodeJsIcon} className="icon" />
          </div>
        </div>
      </C.Container>
    </>
  );
};

export default Section02;
