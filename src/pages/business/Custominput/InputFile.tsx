import React from "react";
import { CustomInputFile } from "./style";

type tProps = {
  fileController: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function InputFile({ fileController }: tProps): JSX.Element {
  return <CustomInputFile type="file" onChange={fileController} />;
}
