import React, { Fragment } from "react";
interface IStepNumber {
  customId: string;
  customClass: string;
  stepNumberValue: string;
}

const StepNumber: React.FC<IStepNumber> = ({
  customId,
  customClass,
  stepNumberValue,
}: IStepNumber) => {

  return (
    <Fragment>
      <span className={customClass} id={customId}>
        {stepNumberValue}
      </span>
    </Fragment>
  );
};

export default StepNumber;
