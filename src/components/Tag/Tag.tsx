import React from "react";
import { TagWrapper } from "./style";

type tProps = {
  tag_name: string;
};
export default function TagComponent({ tag_name }: tProps): JSX.Element {
  return <TagWrapper># {tag_name}</TagWrapper>;
}
