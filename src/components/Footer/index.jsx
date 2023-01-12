import * as C from "./styled";

import GitIcon from "../../assets/git-icon.png";
import LinkedinIcon from "../../assets/linkedin-icon.png";
import GmailIcon from "../../assets/gmail-icon.png";

const urlGithub = "https://github.com/reita009";
const urlLinkedin = "https://www.linkedin.com/in/julio-cesar-santana/";
const urlMail = "mailto:julio.dev.santana@gmail.com";

const Footer = () => {
  return (
    <>
      <C.Container>
        <div className="top-footer">
          <div className="left">
            <h1>Contatos</h1>
          </div>
          <div className="right">
            <a href={urlGithub} target="_blank">
              <img src={GitIcon} />
            </a>
            <a href={urlLinkedin} target="_blank">
              <img src={LinkedinIcon} />
            </a>
            <a href={urlMail}>
              <img src={GmailIcon} />
            </a>
          </div>
        </div>
      </C.Container>
    </>
  );
};

export default Footer;
