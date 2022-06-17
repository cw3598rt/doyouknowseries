import styled from "@emotion/styled";
import { PlusCircleOutlined } from "@ant-design/icons";

export const RealInputs = styled.input`
  display: none;
`;
export const FakeInputs = styled(PlusCircleOutlined)`
  width: 100px;
  height: 100px;
  font-size: 2rem;
  background-color: lightgray;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;
  border-radius: 10px;
`;
export const Img = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 16px;
  cursor: pointer;
`;
