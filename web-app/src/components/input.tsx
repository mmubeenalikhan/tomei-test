import React, { Fragment } from "react";
interface InputField {
  type: string;
  value: string;
  label: string;
  name: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input: React.FC<InputField> = ({
  type,
  value,
  label,
  handleInputChange,
  name,
}: InputField) => {

  return (
    <Fragment>
      <label>{label}</label>
      <br />
      <input
        type={type}
        value={value}
        name={name}
        onChange={handleInputChange}
      />
    </Fragment>
  );
};
export default Input;
