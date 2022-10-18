import React from "react";

import { Container, Wrapper, StepperPoint } from "./style";

type tProps = {
  step: number;
};
export default function Stepper({ step }: tProps): JSX.Element {
  return (
    <Container>
      <Wrapper>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "15px" }}>
          <StepperPoint pos={step === 0}>0</StepperPoint>
          <p style={{ fontSize: "13px" }}>ID / PW</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "15px" }}>
          <StepperPoint pos={step === 1}>1</StepperPoint>
          <p style={{ fontSize: "13px" }}>사용자 정보 입력</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "15px" }}>
          <StepperPoint pos={step === 2}>2</StepperPoint>
          <p style={{ fontSize: "13px" }}>이메일 인증</p>
        </div>
      </Wrapper>
    </Container>
  );
}
