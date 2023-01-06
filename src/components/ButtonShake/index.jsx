import * as C from "./styled";

const ButtonShake = (props) => {
  return (
    <>
      <C.BtnShake class="glow-on-hover" type="button">
        {props.name}
      </C.BtnShake>
    </>
  );
};

export default ButtonShake;
