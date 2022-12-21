import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  padding: 0 40px;

  color: ${({ theme }) => theme.fontColor.color};
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0 40px;
  width: 100%;
`;

const RouterArea = styled.div`
  width: 230px;
  height: 100vh;
  position: sticky;
  left: 100px;
  top: 0;
  padding-top: 72px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  .select {
    background-color: ${({ theme }) => theme.backgroundColor.subColor};
  }
`;

const Routers = styled.div`
  padding: 15px;
  border-radius: 10px;
  display: flex;
  gap: 20px;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.backgroundColor.subColor};
  }
`;

const SettingArea = styled.div`
  position: relative;
  padding-bottom: 50px;
  width: 1050px;
  /* width: 900px; */
  padding-top: 72px;
  margin: 0px auto;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

const Header = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const SettingGroupArea = styled.div`
  margin-top: 8px;

  display: inline-block;
  width: 100%;
`;

const SettingContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${({ theme }) => theme.backgroundColor.subColor};
  border-radius: 15px;
  margin-bottom: 20px;
  padding: 0 30px;
`;

const GroupTitle = styled.div`
  height: 99px;
`;

const GroupItem = styled.div`
  padding: 0 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 90px;

  @media screen and (max-width: 675px) {
    flex-direction: column;
    margin: 10px 0px;

    justify-content: center;
    align-items: flex-start;
    padding: 0 5px;

    gap: 15px;
  }
`;

const ProfileArea = styled.label`
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &:hover {
    .profile-btn {
      opacity: 1;
    }
    .profile-overlay {
      opacity: 0.3;
    }
  }

  .profile-overlay {
    position: absolute;
    transition: all 0.2s;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-color: black;
    opacity: 0;
  }

  .profile-btn {
    position: absolute;
    transition: all 0.2s;
    opacity: 0;
    background-color: gray;
    padding: 10px;
    border-radius: 100%;
  }

  input[type="file"] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
    display: none;
    background: none;
  }
`;

const CustomInput = styled.input`
  height: 40px;
  width: 300px;
  border-radius: 5px;
  padding-left: 15px;

  background: ${({ theme }) => theme.backgroundColor.bg};
  color: ${({ theme }) => theme.fontColor.color};
  border: none;
`;

const CustomTextarea = styled.textarea`
  height: 150px;
  width: 300px;
  padding: 15px;
  resize: none;
  background: ${({ theme }) => theme.backgroundColor.bg};
  border-radius: 5px;
  border: none;
  color: ${({ theme }) => theme.fontColor.color};
  line-height: 1.125rem;
  letter-spacing: 1px;
  font-weight: 100;
`;

const ActionArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  color: white;
`;

const SaveBtn = styled.div`
  background-color: #448fff;
  padding: 10px 50px;
  height: 50px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ThemeArea = styled.div`
  display: flex;
  gap: 15px;
  background: ${({ theme }) => theme.backgroundColor.bg};

  padding: 15px;
  border-radius: 8px;
`;

type tSelected = {
  isSelected: boolean;
};

const Mode = styled.p<tSelected>`
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme, isSelected }) => (isSelected ? "#3858F6" : theme.fontColor.subColor)};

  cursor: pointer;
`;

export {
  Wrapper,
  ActionArea,
  SaveBtn,
  ContentWrapper,
  SettingArea,
  Header,
  SettingGroupArea,
  SettingContainer,
  GroupTitle,
  GroupItem,
  ProfileArea,
  CustomInput,
  CustomTextarea,
  RouterArea,
  Routers,
  Mode,
  ThemeArea,
};
