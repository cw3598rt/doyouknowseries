import styled from "@emotion/styled";
import { AimOutlined } from "@ant-design/icons";

export const Location = styled(AimOutlined)``;

export const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid forestgreen;
  border-radius: 20px;
`;

export const SellerBox = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2em;
`;

export const Seller = styled.span`
  color: forestgreen;
  font-size: 1.4em;
`;
export const SmallDetailbox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Date = styled.span`
  color: cadetblue;
  font-size: 1.2em;
  margin-right: 1em;
`;

export const Divider = styled.div`
  width: 90%;
  height: 2px;
  background-color: lightgray;
`;

export const Item = styled.h2`
  color: forestgreen;
`;
export const Remark = styled.p`
  color: forestgreen;
  font-size: 1.2em;
`;

export const PicBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
export const Detail = styled.pre`
  white-space: pre-wrap;
  color: forestgreen;
  font-size: 1.2em;
`;
export const Price = styled.h3`
  color: cadetblue;
`;
export const BtnBox = styled.div`
  margin-top: 1em;
  display: flex;
  flex-direction: row;
`;
export const Btns = styled.button`
  background-color: forestgreen;
  color: white;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  width: 8em;
  height: 3em;
  margin-right: 1em;
  :hover {
    transform: scale(1.2);
  }
  transition: all 250ms ease-in;
`;
