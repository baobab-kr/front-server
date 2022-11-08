import styled from "styled-components";

type tState = {
  pos: boolean;
};

export const Container = styled.div`
  width: 100%;
  height: 80px;
  overflow: hidden;
  margin-top: -15px;
  margin-bottom: 15px;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 70%;
  height: 100%;
  margin: 0px auto;

  display: flex;
  justify-content: space-between;
`;

export const StepperPoint = styled.div<tState>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => (props.pos ? "#448FFF" : "#999999")};

  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.2s;
`;
