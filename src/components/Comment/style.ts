import styled from "styled-components";

type tOpenStatus = {
  status: boolean;
};

const CommentWrapper = styled.div<tOpenStatus>`
  position: fixed;
  top: 60px;
  left: 100%;
  height: calc(100% - 60px);
  background-color: ${({ theme }) => theme.backgroundColor.bg};

  z-index: 520;
  width: 400px;
  transform: ${(props) => (props.status ? "translateX(-400px);" : "translateX(0px);")};
  transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1) 0s, opacity 0.6s cubic-bezier(0.23, 1, 0.32, 1) 0s;
  visibility: ${(props) => (props.status ? "visible" : "hidden")};

  overflow-y: auto;
`;

const HeaderArea = styled.div`
  padding: 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  display: flex;
`;

const Header = styled.h2`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 24px;
  color: rgba(41, 41, 41, 1);
  color: ${({ theme }) => theme.fontColor.color};
`;

const UserArea = styled.div`
  margin-bottom: 20px;
  padding: 0 24px;
`;

const CommentArea = styled.div`
  margin-bottom: 20px;
  padding: 0 24px;

  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;

const UserContainer = styled.div`
  padding: 14px 0px;

  display: flex;
  flex-direction: column;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.backgroundColor.subColor};
  box-shadow: rgb(0 0 0 / 12%) 0px 2px 8px;
`;

const UserInfo = styled.div`
  position: relative;

  margin-bottom: 6px;
  max-height: 100px;
  padding: 0px 14px;
  display: flex;
  align-items: center;
  gap: 15px;
  color: ${({ theme }) => theme.fontColor.color};
`;

const Textarea = styled.textarea`
  resize: none;
  min-height: 100px;
  margin: 14px 14px 0px;
  border-radius: 5px;
  padding: 10px;
  line-height: 1.125rem;
  overflow-y: hidden;
  font-size: 12px;
`;

const TextActionArea = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 14px;
  margin: 14px 0px 0px;
  gap: 15px;

  .respond {
    display: flex;
    align-items: center;
    background: rgba(26, 137, 23, 0.6);
    border-radius: 99em;
    padding: 6px 12px 6px;
  }
`;

export { CommentWrapper, HeaderArea, Header, UserArea, CommentArea, UserContainer, UserInfo, Textarea, TextActionArea };
