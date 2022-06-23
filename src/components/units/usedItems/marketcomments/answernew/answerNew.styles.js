import styled from "@emotion/styled";

import { AliwangwangOutlined } from "@ant-design/icons";

export const QuestionLogo = styled(AliwangwangOutlined)`
  font-size: 2em;
  color: forestgreen;
  margin-right: 0.5em;
`;

export const Wrapper = styled.div`
  margin-top: 2em;
  width: 80%;
  height: 18em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: translateX(7em);
`;
export const Form = styled.form``;
export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: lightgray;
  margin-bottom: 2em;
`;
export const LogoBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1em;
`;

export const Questionary = styled.span`
  color: forestgreen;
  font-size: 1.4em;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TextCount = styled.span`
  font-size: 1em;
  color: cadetblue;
`;

export const Btn = styled.button`
  width: 5.5rem;
  height: 2rem;
  background-color: forestgreen;
  border: none;
  color: white;
  font-size: 1.2em;
  border-radius: 1em;
  cursor: pointer;
  :hover {
    transform: scale(1.4);
  }
  transition: all 250ms ease-in;
`;
