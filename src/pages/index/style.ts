import styled from "styled-components";

const WrapperArea = styled.div`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  color: ${({ theme }) => theme.fontColor.color};
`;

const CenterPosition = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  min-width: 0;
  width: 100%;
  max-width: 960px;
  padding: auto 1rem;
`;

const TitleArea = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  width: 100%;
  max-width: none;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 3.3rem;
  color: white;
  line-height: 1.33;
`;

const UserArea = styled.div`
  display: flex;
  border-left: 5px solid white;
  margin: 0;
  margin-top: 2rem;
  padding: 0.5rem 1rem;
  gap: 15px;
`;

const ContentArea = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  width: 100%;
  max-width: none;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const ContentListTitle = styled.h2`
  box-sizing: border-box;
  font-weight: bold;
  line-height: 1.33;
  color: white;
  border-left: 5px solid #2d3748;
  font-weight: bold;
  text-decoration: none;
  font-size: 1.5rem;
  padding-left: 2rem;
  margin-bottom: 1rem;

  color: ${({ theme }) => theme.fontColor.color};
`;

const ContentListArea = styled.div`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  background-color: #222222;
  border-radius: 0.5rem;
  transition: transform 250ms ease, box-shadow 250ms ease, color 250ms ease;
  box-shadow: 1px 1px 5px 0 rgb(1 1 1 / 5%);
  padding: 2rem;

  margin-top: -30px;
`;

type tCountProps = {
  rows: number;
};

const ContentList = styled.div<tCountProps>`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  display: grid;
  grid-gap: 1rem;
  grid-row-gap: 0.25rem;

  grid-auto-flow: column;
  grid-template-rows: repeat(${(props) => props.rows}, 1fr);
`;

const ContentListItem = styled.div`
  font-weight: bold;
  line-height: 1.33;
  display: flex;
  gap: 1rem;
  color: white;
  font-weight: 600;
  margin-bottom: 1rem;
  font-size: 1.125rem;
  flex: 1;
  margin-bottom: 0;

  cursor: pointer;

  &:hover {
    color: #999999;
  }
`;

const MainContentArea = styled.div`
  /* background-color: #222222; */
  border-radius: 0.5rem;
  transition: transform 250ms ease, box-shadow 250ms ease, color 250ms ease;
  box-shadow: 1px 1px 5px 0 rgb(1 1 1 / 5%);

  color: ${({ theme }) => theme.fontColor.color};

  /* padding: 2rem; */
`;

const FooterTagArea = styled.div`
  /* background-color: #222222; */
  border-radius: 0.5rem;
  transition: transform 250ms ease, box-shadow 250ms ease, color 250ms ease;
  box-shadow: 1px 1px 5px 0 rgb(1 1 1 / 5%);
`;

const TagContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;

  bottom: 15%;

  gap: 10px;
  /* padding: 15px; */

  max-height: 85%;
  overflow-y: hidden;
  /* overflow-y: auto; */
`;

const FooterCommentArea = styled.div`
  display: flex;

  align-items: center;

  margin-bottom: 50px;

  color: ${({ theme }) => theme.fontColor.color};
`;

type tOpacityProps = {
  opacity: number;
  open: string;
};
const CommentOverlay = styled.div<tOpacityProps>`
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;

  visibility: ${(props) => props.open};

  transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1) 0s;
  background-color: rgba(0, 0, 0, ${(props) => props.opacity});

  z-index: 510;
`;

export {
  WrapperArea,
  ContentArea,
  UserArea,
  Title,
  TitleArea,
  CenterPosition,
  ContentListTitle,
  ContentListArea,
  ContentList,
  ContentListItem,
  MainContentArea,
  FooterTagArea,
  TagContainer,
  FooterCommentArea,
  CommentOverlay,
};
