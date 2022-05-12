import React from "react";
import { Card, CardImage, CardText, Date, Content, Footer } from "./style";
import test from "../../data/test.jpg";
import { boardInfo } from "@src/Types";

type Props = {
  borderID: number;
  imgSrc: string;
  board: boardInfo;
};
export default function PersonCard({ board, imgSrc, borderID }: Props): JSX.Element {
  return (
    <Card>
      <CardImage src={imgSrc}></CardImage>
      <CardText>
        <Date>4 days ago</Date>
        <h2 style={{ margin: "15px 0px" }}>{board.title}</h2>
        <Content>{board.body}</Content>
        <Footer>
          <div>{board.footer[0]}</div>
          <div>#{board.footer[1]}</div>
        </Footer>
      </CardText>
    </Card>
  );
}
