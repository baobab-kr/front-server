import React, { useState } from "react";
import { JOB_GROUP, USER_TYPE, USER_TYPE_SELECT } from "../../../../constants/index";

import Select from "react-select";

import { StepperSecond } from "./style";

type tProps = { value: string; label: string };
const formatOptionLabel = ({ value, label }: tProps) => (
  <div style={{ display: "flex", color: "black" }}>
    <div>{label}</div>
  </div>
);

export default function SignupStepperSecond(): JSX.Element {
  const [userType, setUserType] = useState<string>(USER_TYPE_SELECT[0].value);
  const [job, setJob] = useState<string>(JOB_GROUP[0].value);

  const jobHandler = (props: any) => {
    setJob(props.value);
  };

  const userTypeHandler = (props: any) => {
    setUserType(props.value);
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
