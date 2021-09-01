import React, { Fragment } from "react";
interface IParagraph {
  value: string;
}

const Paragraph: React.FC<IParagraph> = ({ value }: IParagraph) => {
  return (
    <Fragment>
      <p>{value}</p>
    </Fragment>
  );
};

export default Paragraph;
