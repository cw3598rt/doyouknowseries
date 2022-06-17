import styled from "@emotion/styled";
import { ArrowUpOutlined, CloseOutlined } from "@ant-design/icons";

export const CloseBtn = styled(CloseOutlined)`
  font-size: 1.4rem;
  width: 30px;
  height: 24px;
  color: white;
  background-color: forestgreen;
  border-radius: 10px;
  cursor: pointer;
  :hover {
    transform: scale(1.2);
  }
  transition: all 250ms ease-in-out;
`;

export const LoginBtn = styled.button`
  background-color: forestgreen;
  border-radius: 10px;
  color: white;
  border: none;
  cursor: pointer;
  :hover {
    transform: scale(1.2);
  }
  transition: all 250ms ease-in-out;
`;
export const LoginBox = styled.div`
  width: 25em;
  height: 19em;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: #f9f9f960;
  border: 2px solid lightgray;
  border-radius: 20px;
  outline-color: forestgreen;
  z-index: 1;
  margin: auto;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;
export const EmailBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;
export const EmaliLabel = styled.label`
  color: forestgreen;
  font-size: 1.2rem;
`;
export const EmailInput = styled.input`
  width: 200px;
  outline-color: forestgreen;
  border: 2px solid lightgray;
  border-radius: 10px;
  color: forestgreen;
`;
export const PasswordBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;
export const PasswordLabel = styled.label`
  color: forestgreen;
  font-size: 1.2rem;
`;
export const PasswordInput = styled.input`
  width: 200px;
  outline-color: forestgreen;
  border: 2px solid lightgray;
  border-radius: 10px;
  color: forestgreen;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  background: url("../landing.png") center/cover;
  overflow: auto;
  margin: auto;
`;
export const BtnBox = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Btns = styled.button`
  cursor: pointer;
  margin-left: 1rem;
  margin-right: 1rem;
  border-radius: 10px;
  background-color: forestgreen;
  color: white;
  outline: none;
  border: none;
  :hover {
    transform: scale(1.2);
  }
  transition: all 250ms ease-in-out;
`;

export const HomeBox = styled.div`
  width: 80%;
  height: 670px;
  margin: auto;
  background-color: #f9f9f999;
  display: flex;
  flex-direction: column;
  border-radius: 20px 20px 0 0;
`;
export const Home = styled.pre`
  white-space: pre-wrap;
  padding: 2rem 2rem 2rem 2rem;
`;
export const GoBack = styled(ArrowUpOutlined)`
  cursor: pointer;
  font-size: 80px;
  color: forestgreen;
  position: fixed;
  top: 350px;
  right: 10px;
  :hover {
    transform: scale(1.2);
  }
  transition: all 250ms ease-in;
`;
export const AboutBox = styled.div`
  width: 80%;
  height: 670px;
  margin: auto;
  background-color: #f9f9f999;
  display: flex;
  flex-direction: column;
`;
export const About = styled.pre`
  white-space: pre-wrap;
  padding: 2rem 2rem 2rem 2rem;
`;
export const FeatureBox = styled.div`
  width: 80%;
  height: 670px;
  margin: auto;
  background-color: #f9f9f999;
  display: flex;
  flex-direction: column;
`;
export const Feature = styled.pre`
  white-space: pre-wrap;
  padding: 2rem 2rem 2rem 2rem;
`;

export const StartedBox = styled.div`
  width: 80%;
  height: 670px;
  margin: auto;
  background-color: #f9f9f999;
  display: flex;
  flex-direction: column;
  border-radius: 0 0 20px 20px;
`;
export const IntroandBtn = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Intro = styled.pre`
  white-space: pre-wrap;
  padding: 2rem 2rem 2rem 2rem;
`;
export const ButtonsBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;
export const SpecialBtn = styled.button`
  cursor: pointer;
  :hover {
    transform: scale(1.2);
  }
  width: 150px;
  height: 50px;
  transition: all 250ms ease-in-out;
  margin-left: 1rem;
  border: none;
  border-radius: 10px;
  color: white;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(16, 16, 63, 1) 0%,
    rgba(0, 255, 162, 1) 100%
  );
`;

export const Error = styled.span`
  color: orange;
  font-size: 12px;
`;
