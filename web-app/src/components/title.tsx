import React, { Fragment } from "react";
interface ITitle {
  custum: string;
  title: string;
  costomisecolor: string;
}
const Title: React.FC<ITitle> = ({ custum, title, costomisecolor }: ITitle) => {
  return (
    <Fragment>
      <span id={custum} className={costomisecolor}>
        {title}
      </span>
    </Fragment>
  );
};

export default Title;
