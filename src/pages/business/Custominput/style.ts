import styled from "styled-components";

export const CustomInputText = styled.input`
  -webkit-appearance: none;
  appearance: none;
  -moz-appearance: textfield;
  background: ${({ theme }) => theme.backgroundColor.subColor};
  border: none;
  border-radius: 9px;
  box-shadow: inset 0 0 0 1px #35363b;
  color: ${({ theme }) => theme.fontColor.color};
  display: block;
  font-size: 15px;
  line-height: 140%;
  outline: none;
  padding: 14px 16px;
  resize: none;
  transition: all 0.1s ease;
  width: 100%;
`;

export const CustomInputFile = styled.input`
  background: none;
  color: #7a7c85;
  font-size: 15px;
  padding-left: 0;
  padding-right: 16px;
  width: 100%;
  border: none;

  ::before {
    color: rgb(0, 0, 0);
    content: "파일 업로드";
    cursor: pointer;
    display: inline-block;
    font-size: 15px;
    height: 54px;
    line-height: 54px;
    text-align: center;
    width: 200px;
    background: rgb(255, 255, 255);
    border-radius: 6px;
    margin-right: 10px;
  }
`;

export const InputWrap = styled.div`
  align-items: center;
  border-bottom: 1px solid #35363b;
  display: flex;
  padding: 0 8px;
`;

export const LabelArea = styled.div`
  padding: 30px 0;
  width: 100%;
  color: ${({ theme }) => theme.fontColor.color};
  white-space: pre-wrap;

  label {
    display: block;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.4;
  }

  .info {
    color: #7a7c85;
    display: block;
    font-size: 14px;
    line-height: 1.5;
    margin-top: 6px;
  }
`;

export const InputArea = styled.div`
  padding: 30px 0;
  width: 100%;
`;

export const Textarea = styled.textarea`
  -webkit-appearance: none;
  appearance: none;
  -moz-appearance: textfield;
  background: ${({ theme }) => theme.backgroundColor.subColor};
  border: none;
  border-radius: 9px;
  box-shadow: inset 0 0 0 1px #35363b;
  color: ${({ theme }) => theme.fontColor.color};
  display: block;
  font-size: 15px;
  line-height: 140%;
  outline: none;
  padding: 14px 16px;
  resize: none;
  transition: all 0.1s ease;
  width: 100%;

  height: 105px;
`;
