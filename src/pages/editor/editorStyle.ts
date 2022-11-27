import styled from "styled-components";

const popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.backgroundColor.bg};
  color: ${({ theme }) => theme.fontColor.color};
  opacity: 1;
  z-index: 9999;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 900px) {
    overflow: auto;
    padding: 2rem 1rem;
    align-items: flex-start;
    justify-content: center;
  }
`;

const popupInner = styled.div`
  width: 845px;
  height: 450px;

  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    width: 100%;

    gap: 15px;
  }
`;

const PopupTitle = styled.div`
  font-size: 18px;
  margin-bottom: 20px;
`;

const PopupBtnArea = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;

  @media screen and (max-width: 900px) {
    margin-top: 15px;
  }
`;

type tProps = {
  active: boolean;
};

const PopuoButton = styled.div<tProps>`
  background-color: ${({ theme, active }) => (active ? theme.backgroundColor.subColor : "transparent")};
  color: ${({ theme, active }) => (active ? "#96F2D7" : theme.fontColor.color)};
  padding: 10px 20px;
  cursor: pointer;

  transition: 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);

  @media screen and (max-width: 900px) {
    width: 50%;
    display: flex;
    justify-content: center;
  }
`;

const ThumbnailArea = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 250px;

  border-radius: 8px;

  padding: 15%;
  background-color: ${({ theme }) => theme.backgroundColor.subColor};

  margin: 0px auto;

  @media screen and (max-width: 900px) {
    padding: 10%;
    height: auto;
  }
`;

const Position = styled.div`
  height: 100%;
  width: 350px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

const Textarea = styled.textarea`
  background-color: ${({ theme }) => theme.backgroundColor.subColor};

  resize: none;
  min-height: 100px;
  border-radius: 5px;
  border: none;
  width: 100%;
  height: 250px;
  padding: 10px;
  line-height: 1.125rem;
  overflow-y: hidden;
  font-size: 16px;

  color: ${({ theme }) => theme.fontColor.color};

  letter-spacing: 1px;

  :focus {
    outline: none;
  }
`;

const TitleWrpper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 140px;
  padding: 0px 10px;
`;

const titleInput = styled.input`
  border: none;
  height: 40px;
  width: 50%;
  font-size: 25px;
  margin-bottom: 20px;
  background: ${({ theme }) => theme.backgroundColor.subColor};
  color: ${({ theme }) => theme.fontColor.color};
  padding-left: 15px;

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 720px) {
    width: 100%;
  }
`;

const TagSelectorArea = styled.div`
  width: 50%;
  @media screen and (max-width: 720px) {
    width: 100%;
  }
`;

const saveBtn = styled.button`
  padding: 8px 16px;
  background: ${({ theme }) => theme.backgroundColor.subColor};
  color: ${({ theme }) => theme.fontColor.color};
  border: 1px solid #ffffff;
  border-radius: 3px;
`;

export { TagSelectorArea, popup, popupInner, Position, ThumbnailArea, Textarea, PopupTitle, PopuoButton, PopupBtnArea, TitleWrpper, titleInput, saveBtn };
