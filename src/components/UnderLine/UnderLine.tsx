import React from "react";
import { Line } from "./style";
type tColor = {
  color: string;
  margin: string;
};

export default function UnderLine({ color, margin }: tColor): JSX.Element {
  return <Line color={color} style={{ margin: margin }}></Line>;
}
