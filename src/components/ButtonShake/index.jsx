import * as C from "./styled";

const ButtonShake = (props) => {
  return (
    <>
      <C.BtnShake width="150px" class="glow-on-hover" type="button">
        {props.name}
      </C.BtnShake>
    </>
  );
};

export default ButtonShake;
