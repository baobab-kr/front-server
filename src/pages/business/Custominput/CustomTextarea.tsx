import React, { Dispatch, SetStateAction } from "react";
import { Textarea } from "./style";

type tProps = {
  maxLength: number;
  placeholder: string;
  value: string;
  setValue: Dispatch<SetStateAction<any>>;
};
export default function CustomTextarea({ maxLength, placeholder, value, setValue }: tProps): JSX.Element {
  return <Textarea maxLength={maxLength} placeholder={placeholder} value={value} onChange={setValue}></Textarea>;
}
