import * as C from "./styled";

import NeonButton from "../NeonButton";
import ButtonShake from "../ButtonShakeMini";

//icons
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  return (
    <>
      <C.Container>
        <div className="left">
          <MenuIcon className=" icon" />
        </div>

        <div className="mid">
          <h1>Portfólio</h1>
        </div>

        <div className="right">
          <ButtonShake name="Home" />
          <ButtonShake name="Sobre" />
          <ButtonShake name="Contato" />
        </div>
      </C.Container>
    </>
  );
};

export default Header;
