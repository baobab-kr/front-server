import React, { ReactNode } from "react";
import { InputWrap, LabelArea, InputArea } from "./style";

type tProps = {
  title: string;
  description: string;
  children: ReactNode;
};
export default function InputContainer({ title, description, children }: tProps): JSX.Element {
  return (
    <InputWrap>
      <LabelArea>
        <label>{title}</label>
        <span className="info">{description}</span>
      </LabelArea>
      <InputArea>
        <div className="input">
          {/* <InputFile fileController={fileController} /> */}
          {children}
        </div>
      </InputArea>
    </InputWrap>
  );
}
