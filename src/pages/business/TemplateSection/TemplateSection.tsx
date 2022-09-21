import React, { ReactNode } from "react";

import { Template, SectionTitleArea, SectionTitle } from "./style";

type tProps = {
  title: string;
  open: boolean;
  children: ReactNode;
};
export default function TemplateSection({ title, open, children }: tProps): JSX.Element {
  return (
    <>
      <Template>
        <SectionTitleArea beforeOpen={open}>
          <SectionTitle>{title}</SectionTitle>
        </SectionTitleArea>
        <div style={{ padding: "0 34px" }}>{children}</div>
      </Template>
    </>
  );
}
