import styled from "@emotion/styled";
import { QqOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

export const Profile = styled(QqOutlined)``;
export const UpdateBtn = styled(EditOutlined)`
  margin-right: 10px;
  cursor: pointer;
  :hover {
    transform: scale(1.5);
    color: cadetblue;
  }
  transition: all 250ms ease-in;
`;
export const DeleteBtn = styled(DeleteOutlined)`
  cursor: pointer;
  :hover {
    transform: scale(1.5);
    color: cadetblue;
  }
  transition: all 250ms ease-in;
`;
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;
  height: 300px;
  overflow: auto;
`;

export const Box = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 5px 5px 15px 5px #67a38f;
  border-radius: 10px;
  padding: 10px 10px 10px 10px;
`;
export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const WriterBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Writer = styled.span`
  font-size: 1rem;
  color: forestgreen;
  margin-right: 10px;
`;
export const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Contents = styled.p`
  font-size: 1rem;
  color: cadetblue;
`;
export const Date = styled.span`
  color: lightgray;
  font-size: 0.8rem;
`;
export const BtnBox = styled.div`
  display: flex;
  flex-direction: row;
`;
