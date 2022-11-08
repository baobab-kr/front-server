import React from "react";

type tProps = {
  title: string;
  data: string; //| string[];
};

export default function JobOption({ title, data }: tProps): JSX.Element {
  return (
    <div style={{ display: "flex" }}>
      <div>{`${title} : `}&nbsp;</div>
      {typeof data === "string" && <div>{data}</div>}
      {/* {typeof data !== "string" && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          {data.map((q) => {
            return <div>{q}</div>;
          })}
        </div>
      )} */}
    </div>
  );
}
