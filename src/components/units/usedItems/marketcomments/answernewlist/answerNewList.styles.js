import styled from "@emotion/styled";
import {
  DeleteOutlined,
  EditOutlined,
  QqOutlined,
  MessageOutlined,
} from "@ant-design/icons";
export const Reply = styled(MessageOutlined)`
  color: cadetblue;
  font-size: 2em;
  cursor: pointer;
  :hover {
    transform: scale(1.4);
  }
  transition: all 250ms ease-in;
`;

export const Deletebtn = styled(DeleteOutlined)`
  color: cadetblue;
  font-size: 2em;
  cursor: pointer;
  :hover {
    transform: scale(1.4);
  }
  transition: all 250ms ease-in;
  margin-right: 0.5em;
`;
export const DefaultProfilepic = styled(QqOutlined)`
  font-size: 2em;
  color: navy;
  margin-right: 1em;
`;
export const Editbtn = styled(EditOutlined)`
  color: forestgreen;
  font-size: 2em;
  cursor: pointer;
  :hover {
    transform: scale(1.4);
  }
  transition: all 250ms ease-in;
  margin-right: 0.5em;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  transform: translateX(8em);
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  height: 13em;
  box-shadow: 0 10px 20px 0 #363d9c;
  margin-bottom: 2em;
  border-radius: 20px;
  padding: 1em 1em 1em 1em;
`;

export const HeadBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ProfileBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const ProfilePic = styled.img`
  width: 6.25em;
  height: 6.25em;
`;
export const Name = styled.span`
  font-size: 1.3em;
  color: cadetblue;
`;
export const BtnBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Contents = styled.pre`
  white-space: pre-wrap;
  font-size: 1.2em;
  color: cadetblue;
`;
export const Date = styled.span`
  font-size: 1em;
  color: cadetblue;
`;
