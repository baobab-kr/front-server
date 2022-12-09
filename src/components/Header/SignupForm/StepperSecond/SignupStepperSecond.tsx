import React, { Dispatch, SetStateAction } from "react";
import Select from "react-select";
import { JOB_GROUP, USER_TYPE, USER_TYPE_SELECT } from "constants/index";

import { StepperSecond } from "./style";

type tProps = { value: string | number; label: string };
const formatOptionLabel = ({ value, label }: tProps) => (
  <div style={{ display: "flex", color: "black" }}>
    <div>{label}</div>
  </div>
);

type tStepperSecond = {
  userType: number;
  setUserType: Dispatch<SetStateAction<number>>;
  job: string;
  setJob: Dispatch<SetStateAction<string>>;
};

export default function SignupStepperSecond({ userType, setUserType, job, setJob }: tStepperSecond): JSX.Element {
  const jobHandler = (props: any) => {
    setJob(props.value);
  };

  const userTypeHandler = (props: any) => {
    setUserType(props.value);

    if (props.value === USER_TYPE.DEVELOPER) {
      setJob("");
    }
  };

  return (
    <StepperSecond>
      <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "15px" }}>
        <Select defaultValue={USER_TYPE_SELECT[0]} options={USER_TYPE_SELECT} formatOptionLabel={formatOptionLabel} onChange={userTypeHandler} />
      </div>
      {userType === USER_TYPE.DEVELOPER && (
        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "15px" }}>
          <p>직군</p>
          <Select defaultValue={JOB_GROUP[0]} options={JOB_GROUP} formatOptionLabel={formatOptionLabel} onChange={jobHandler} />
        </div>
      )}
    </StepperSecond>
  );
}
