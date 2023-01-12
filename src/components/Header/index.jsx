import * as C from "./styled";

import { useState } from "react";

import NeonButton from "../NeonButton";
import ButtonShake from "../ButtonShakeMini";
import ButtonShakeMobile from "../ButtonShakeMobile";

//icons
import MenuIcon from "@mui/icons-material/Menu";
import ReactIcon from "../../assets/react-icon.png";

const Header = () => {
  const [checkMobile, setCheckMobile] = useState(false);

  const handleClick = () => {
    if (checkMobile) {
      setCheckMobile(false);
    } else {
      setCheckMobile(true);
    }
  };

  return (
    <>
      <C.Container>
        <div className="left">
          <MenuIcon
            onClick={() => {
              handleClick();
            }}
            className=" icon"
          />
          <img className="react-icon" src={ReactIcon} />
        </div>

        <div className="mid">
          <h1>Portfólio</h1>
        </div>

        {checkMobile && (
          <div className="right">
            <div className="btn-whrap">
              <ButtonShakeMobile name="Home" />
            </div>
            <div className="btn-whrap">
              <ButtonShakeMobile name="Sobre" />
            </div>
            <div className="btn-whrap">
              <ButtonShakeMobile name="Contato" />
            </div>
          </div>
        )}

        <div className="desktop">
          <div className="btn-whrap">
            <ButtonShakeMobile name="Home" />
          </div>
          <div className="btn-whrap">
            <ButtonShakeMobile name="Sobre" />
          </div>
          <div className="btn-whrap">
            <ButtonShakeMobile name="Contato" />
          </div>
        </div>
      </C.Container>
    </>
  );
};

export default Header;
