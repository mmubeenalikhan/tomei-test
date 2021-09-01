import React, { Fragment } from "react";

interface IButton {
  btnvalue: string;
  imgsrc: string;
  changeEvent: () => void;
}
const Button: React.FC<IButton> = ({
  changeEvent,
  btnvalue,
  imgsrc,
}: IButton) => {

  return (
    <Fragment>
      <button className="buttom-signup" onClick={changeEvent}>
        {btnvalue}
        {imgsrc ? <img id="img" src={imgsrc} alt="arrow" /> : null}
      </button>
    </Fragment>
  );
};
export default Button;
