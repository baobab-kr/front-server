import React, { useEffect } from "react";
import { Container, TagPlace, UserInfo, Content, Input } from "./style";
import Card from "../../components/Card/index";
import DefaultAvator from "../../assets/defaultAvator.png";
import { boardInfo } from "@src/Types";

import image from "../../data/test.jpg";

export default function PersonPage(): JSX.Element {
  const title: string = "Bobab-kr Blog Fronend";
  const content: string =
    "풍부하게 창공에 찾아다녀도, 하는 곳이 위하여서. 앞이 구할 풀이 생의 아름다우냐? 황금시대의 찾아다녀도, 광야에서 우리의 가슴이 것은 때문이다. 그들은 뜨고, 하였으며, 천하를 그것은 운다. 하는 얼음이 청춘의 보배를 아니다. 기쁘며, 투명하되 노래하며 듣기만 그리하였는가? 천하를 남는 있으며, 전인 봄바람이다. 열매를 때에, 역사를 자신과 그들의 있으며, 있으랴? 대한 새 발휘하기 때문이다. 같은 그와 행복스럽고 사랑의 이것이다.피가 같은 인간의 바이며, 그들의 더운지라 그림자는 무엇이 바로 칼이다. 밝은 있으며, 트고, 이성은 천자만홍이 불러 뿐이다. 인간에 바이며, 모래뿐일 속잎나고, 남는 사람은 쓸쓸하랴? 가장 풀밭에 이상은 청춘의 청춘 사막이다. 커다란 방황하였으며, 실현에 무엇이 눈에 우리 소리다.이것은 하는 봄바람이다. 속에서 때까지 방지하는 아름다우냐? 트고, 가지에 스며들어 붙잡아 칼이다. 반짝이는 물방아 위하여, 없으면, 열락의 거친 꽃이 얼음과 위하여서. 무엇을 있는 주는 이상은 그들에게 보배를 노래하며 보라. 희망의 인생에 꾸며 피부가 얼음 듣는다. 생의 것은 밝은 피가 이상을 이것은 무엇이 꽃 사막이다.  앞이 내는 풀이 황금시대다. 모래뿐일 이것이야말로 청춘은 놀이 꾸며 시들어 주며, 미인을 갑 이것이다. 그들은 놀이 이상은 교향악이다. 앞이 인생에 꽃 보배를 투명하되 거선의 자신과 때에, 있으랴? 그들에게 고동을 이상, 어디 광야에서 보내는 힘있다. 인생을 방지하는 수 꽃 것이다. 인생을 없으면, 오아이스도 우리 기관과 앞이 것이다. 얼마나 있는 그와 위하여, 그들의 그리하였는가? 황금시대를 우리는 사람은 몸이 풀이 커다란 행복스럽고 든 불어 아름다우냐? 이상이 있으며, 소금이라 황금시대의 되려니와, 갑 보이는 그들에게 아름다우냐? 동력은 청춘 어디 뛰노는 그와 있으랴?";
  const footer: string[] = ["react", "2"];

  const tag: string[] = ["react", "vue", "django", "node", "C#"];
  const blog: boardInfo[] = [
    { title: title, body: content, footer: footer },
    { title: title, body: content, footer: footer },
    { title: title, body: content, footer: footer },
    { title: title, body: content, footer: footer },
    { title: title, body: content, footer: footer },
    { title: title, body: content, footer: footer },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ width: "1324px" }}>
        <UserInfo>
          <div style={{ width: "150px", height: "150px", borderRadius: "70%", overflow: "hidden", justifySelf: "start" }}>
            <img src={DefaultAvator} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="avator"></img>
          </div>
          <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
            <div style={{ color: "black" }}>
              <h1 style={{ fontSize: "50px", color: "white" }}>Baobab</h1>
            </div>
            <hr />
            <div style={{ marginTop: "10px" }}>
              <h3 style={{ color: "darkgray" }}>성장을 원하는 Baobab</h3>
            </div>
          </div>
        </UserInfo>

        <Container>
          <TagPlace>
            <div style={{ margin: "0px 0px 8px 0px" }}>태그 목록</div>
            <hr />
            <ul style={{ paddingTop: "8px" }}>
              {tag.map((t: string, index: number) => {
                return (
                  <li key={index} style={{ margin: "8px 0px", cursor: "pointer" }}>
                    {t} &nbsp;{`(${index})`}
                  </li>
                );
              })}
            </ul>
          </TagPlace>
          <div>
            <Content>
              {blog.map((blogInfo, index) => {
                return <Card key={index} borderID={index} imgSrc={image} board={blogInfo} width={"650px"} height={"500px"} />;
              })}
            </Content>
          </div>
          <div>
            <Input alt="검색어" placeholder="검색어를 입력해주세요" />
          </div>
        </Container>
      </div>
    </div>
  );
}
