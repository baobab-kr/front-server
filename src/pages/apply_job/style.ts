import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0px 80px 30px;
  margin: 0px auto;
  width: 100%;

  max-width: 1370px;
`;

export const Template = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  margin-top: 30px;
`;

export const FormArea = styled.div`
  width: 75%;
  background-color: ${({ theme }) => theme.backgroundColor.subColor};
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 30px;
`;

export const Title = styled.h1`
  font-size: 1.3rem;
`;

export const SubTitle = styled.h1`
  font-size: 0.9rem;
`;

// export const Custominput = styled.input`
//   width: 100%;
//   height: 80px;

//   border: 3px solid #999999;
//   padding-left: 15px;

//   font-size: 1.3rem;
// `;

export const Custominput = styled.input`
  background: none;
  color: #e4e5e7;
  width: 70%;
  height: 80px;
  margin: -15px auto 0px;
  font-size: 16px;
`;

export const CustomEditinput = styled.input`
  background: none;
  color: #e4e5e7;

  width: 60%;
  height: 35px;
  padding-left: 15px;
  font-size: 1rem;
`;

export const SubmitArea = styled.div`
  position: fixed;
  right: 100px;
  width: 22%;
`;

export const SubmitBtn = styled.div`
  cursor: pointer;

  width: 80%;
  height: 60px;
  margin: 0px auto;

  display: flex;

  justify-content: center;
  align-items: center;

  background-color: gray;
`;

export const CareerButton = styled.div`
  width: 160px;
  height: 50px;
  color: black;
  background-color: white;
  border: 2px solid black;

  display: flex;
  justify-content: center;
  align-items: center;
`;
