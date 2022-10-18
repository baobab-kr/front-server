import React, { Dispatch, SetStateAction } from "react";
import { CustomInputText } from "./style";
type tProps = {
  maxLength: number;
  placeholder: string;
  value: string;
  setValue: Dispatch<SetStateAction<any>>;
};
export default function InputText({ maxLength, placeholder, value, setValue }: tProps): JSX.Element {
  return <CustomInputText type="text" maxLength={maxLength} placeholder={placeholder} value={value} onChange={setValue} />;
}
