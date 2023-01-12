import * as C from "./styled";

import GitIcon from "../../assets/git-icon.png";
import LinkedinIcon from "../../assets/linkedin-icon.png";
import GmailIcon from "../../assets/gmail-icon.png";

const Footer = () => {
  return (
    <>
      <C.Container>
        <div className="top-footer">
          <div className="left">
            <h1>Contatos</h1>
          </div>
          <div className="right">
            <img src={GitIcon} />
            <img src={LinkedinIcon} />
            <img src={GmailIcon} />
          </div>
        </div>
      </C.Container>
    </>
  );
};

export default Footer;
