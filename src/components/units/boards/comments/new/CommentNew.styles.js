import styled from "@emotion/styled";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

export const EditBtn = styled(EditOutlined)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const DeleteBtn = styled(DeleteOutlined)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: auto;
  justify-content: space-between;
`;

export const Titlebox = styled.div`
  display: flex;
  flex-direction: row;
`;
export const MainIcon = styled.img`
  margin-right: 10px;
`;
export const Title = styled.span`
  font-size: 1rem;
  color: forestgreen;
`;
export const InfoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const WriterBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const WriterInput = styled.input`
  border-radius: 10px;
  border: 1px solid forestgreen;
`;
export const PasswordInput = styled.input`
  border-radius: 10px;
  border: 1px solid forestgreen;
`;
export const TextBox = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border: 1px solid forestgreen;
  border-radius: 10px;
`;
export const TextArea = styled.textarea`
  width: 100%;
  border: 1px solid forestgreen;
  border-radius: 10px;
`;
export const EnrollBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Count = styled.span`
  color: lightgray;
`;
export const Btn = styled.button`
  background-color: transparent;
  cursor: pointer;
  color: white;
  background-color: forestgreen;
  border-radius: 10px;
  border: none;
  :hover {
    transform: scale(1.2);
  }
  transition: all 250ms ease-in;
`;
