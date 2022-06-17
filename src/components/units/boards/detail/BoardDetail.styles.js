import styled from "@emotion/styled";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2em 2em 2em 2em;
  border-radius: 10px;
  border: 1px solid cadetblue;
  margin-bottom: 1rem;
  box-shadow: 5px 5px 15px 5px #67a38f;
`;

export const WriterBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Title = styled.span`
  font-size: 1.5rem;
  color: cadetblue;
`;

export const Writer = styled.span`
  font-size: 1.5rem;
  color: forestgreen;
`;
export const InfoBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Location = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;

export const Date = styled.span`
  font-size: 0.5rem;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: cadetblue;
`;
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const TextBox = styled.div`
  background-color: aliceblue;
  border-radius: 10px;
`;

export const Text = styled.p`
  font-size: 1.4rem;
  margin: auto;
`;

export const PictureBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
export const Img = styled.img`
  border-radius: 10px;
  width: 100px;
  height: 100px;
`;

export const Popularity = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
export const LikeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const LikeBtn = styled(LikeOutlined)`
  font-size: 1.3em;
  color: cadetblue;
  cursor: pointer;
  :hover {
    transform: scale(1.2);
  }
  transition: all 250ms ease-in;
`;
export const Like = styled.span`
  color: cadetblue;
`;
export const DisLikeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 16px;
`;
export const DisLikeBtn = styled(DislikeOutlined)`
  font-size: 1.3em;
  color: orangered;
  cursor: pointer;
  :hover {
    transform: scale(1.2);
  }
  transition: all 250ms ease-in;
`;
export const DisLike = styled.span`
  color: orangered;
`;

export const BtnBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Btns = styled.button`
  margin-right: 10px;
  border: none;
  background-color: lavender;
  border-radius: 10px;
  font-size: 1.1rem;
  cursor: pointer;
  :hover {
    transform: scale(1.2);
  }
  transition: all 250ms ease-in;
`;
