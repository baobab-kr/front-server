import styled from "styled-components";

export const CardWrapper = styled.div`
  border-bottom: 1px solid rgb(230, 230, 230);

  &:last-child {
    border: none;
  }
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  padding: 25px 0px 16px;
`;

export const UserContainer = styled.div`
  padding: 14px 0px;

  display: flex;
  flex-direction: column;
  border-radius: 4px;
`;

export const UserInfo = styled.div`
  position: relative;

  margin-bottom: 6px;
  max-height: 100px;
  display: flex;
  align-items: center;
  gap: 15px;
  color: ${({ theme }) => theme.fontColor.color};
`;

export const Comment = styled.div`
  margin-top: 5px;
  word-break: break-word;
  white-space: pre-wrap;
  padding: 5px 0px;
  line-height: 24px;
  font-size: 14px;
`;

export const CommentFooter = styled.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ShowReply = styled.div`
  height: 25px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ReplyArea = styled.div`
  padding-left: 24px;
`;

export const Textarea = styled.textarea`
  resize: none;
  min-height: 100px;
  margin: 14px 14px 0px;
  border-radius: 5px;
  padding: 10px;
  line-height: 1.125rem;
  overflow-y: hidden;
  font-size: 12px;
`;

export const TextActionArea = styled.div`
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

export const LoadMoreBtn = styled.div`
  width: 100%;
  display: flex;

  justify-content: center;
  align-items: center;
  margin-top: 15px;

  cursor: pointer;
`;
