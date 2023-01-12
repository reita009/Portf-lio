import * as C from "./styled";

import { useState } from "react";

import NeonButton from "../NeonButton";
import ButtonShake from "../ButtonShakeMini";
import ButtonShakeMobile from "../ButtonShakeMobile";

//icons
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [check, setCheck] = useState(false);

  const handleClick = () => {
    if (check) {
      setCheck(false);
    } else {
      setCheck(true);
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
        </div>

        <div className="mid">
          <h1>Portfólio</h1>
        </div>

        {check && (
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
      </C.Container>
    </>
  );
};

export default Header;
