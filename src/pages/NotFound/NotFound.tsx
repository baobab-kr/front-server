import React from "react";
import { Text } from "./style";

export default function NotFound(): JSX.Element {
  return (
    <>
      <Text style={{ fontSize: "100px", fontWeight: "bold" }}>404</Text>
      <Text style={{ fontSize: "25px", fontWeight: "bold", margin: "15px 0px 10px" }}>Not Founds</Text>
      <Text>The resource requested could not found on this server!</Text>
    </>
  );
}
