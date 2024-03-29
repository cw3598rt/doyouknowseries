import styled from "@emotion/styled";
import { Modal } from "antd";

export const Wrapper = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: url("../../../../../headerbg.png") center/cover;
  border-radius: 10px;
`;

export const Title = styled.span`
  padding-left: 10px;
  color: cadetblue;
`;
export const Btns = styled.button`
  background-color: cadetblue;
  border: none;
  color: white;
  margin-left: 1em;
  margin-right: 1em;
  cursor: pointer;
  border-radius: 10px;
  :hover {
    transform: scale(1.2);
  }
  transition: all 250ms ease-in;
`;

export const ID = styled.span`
  color: cadetblue;
  :hover {
    font-size: 1.2em;
  }
  transition: all 250ms ease-in;
`;

export const Login = styled.button`
  width: 60px;
  height: 30px;
  margin-right: 1rem;
  background-color: forestgreen;
  color: white;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  :hover {
    transform: scale(1.4);
  }
  transition: all 250ms ease-in;
`;

export const LoginBox = styled(Modal)`
  color: white;
  background-color: forestgreen;
`;
