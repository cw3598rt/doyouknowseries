import styled from "@emotion/styled";
import { Tooltip } from "antd";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Wrapper = styled.div`
  width: 80%;
  height: 700px;
  overflow-y: auto;
  background-color: #f9f9f9;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  border-radius: 20px;
  padding: 0.5em 2em 2em 2em;
`;
export const TodayBox = styled.div`
  width: 20%;
  height: 700px;
  overflow-y: auto;
  background-color: #f9f9f9;
  margin: auto;
  border-radius: 20px;
  padding: 0.5em 2em 2em 2em;
`;

export const ListBox = styled.div`
  height: 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 10px 20px 0 #bae3f9;
  margin: 1em 0 1em 0;
  padding: 0em 2em 0em 2em;
  border-radius: 20px;
  cursor: pointer;
  :hover {
    background-color: lightblue;
  }
  transition: all 250ms ease-in-out;
`;

export const SellerBox = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  :hover {
    transform: scale(1.4);
  }
  transition: all 250ms ease-in-out;
`;
export const IMG = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
`;
export const Seller = styled.span`
  font-size: 1em;
  color: forestgreen;
`;

export const DetailBox = styled.div`
  width: 300px;
  :hover {
    transform: scale(1.4);
  }
  transition: all 250ms ease-in;
`;
export const RemarkBox = styled(Tooltip)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Price = styled.span`
  color: cadetblue;
  font-size: 1em;
`;
export const Date = styled.span`
  color: cadetblue;
  font-size: 1em;
`;

export const WishedBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  :hover {
    background-color: #bae3f9;
    border-radius: 10px;
    transform: scale(1.2);
  }
  cursor: pointer;
  transition: all 250ms ease-in;
`;

export const ImageBox = styled.div`
  display: flex;
  flex-direction: row;
`;
export const SellerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SellerName = styled.span`
  color: forestgreen;
  font-size: 1em;
`;
export const WishedImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  margin-right: 4em;
`;
export const Like = styled.span`
  color: cadetblue;
  font-size: 1.4em;
`;
export const WishedDetailBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const WishedItemName = styled.span`
  color: cadetblue;
  font-size: 1.4em;
`;
export const WishedItemPrice = styled.span`
  color: forestgreen;
  font-size: 1.4em;
`;
