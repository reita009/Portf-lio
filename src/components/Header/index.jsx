import * as C from "./styled";

import NeonButton from "../NeonButton";

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
          <NeonButton name="Home" />
          <NeonButton name="Sobre" />
          <NeonButton name="Contato" />
        </div>
      </C.Container>
    </>
  );
};

export default Header;
