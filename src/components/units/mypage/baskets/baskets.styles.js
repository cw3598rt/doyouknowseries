import styled from "@emotion/styled";

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: space-between;
`;

export const BasketInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const BasketTitle = styled.span`
  font-size: 1.4em;
  color: cadetblue;
  margin-right: 1em;
`;
export const Points = styled.span`
  font-size: 1.2em;
  color: forestgreen;
`;
export const BasketListBox = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const ImagBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
`;
export const Img = styled.img`
  width: 10em;
  height: 10em;
`;
export const ItemName = styled.span`
  font-size: 1.2em;
  color: cadetblue;
`;

export const SellerBox = styled.div`
  width: 10%;
`;
export const SellerName = styled.span`
  font-size: 1em;
  color: forestgreen;
`;
export const ItemInfoBox = styled.div`
  width: 40%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const Tag = styled.span`
  color: darkkhaki;
  margin-right: 1em;
`;
export const Remark = styled.span`
  color: peru;
  margin-right: 1em;
`;
export const LikeCount = styled.span`
  color: darkorange;
  margin-right: 1em;
`;
export const Address = styled.span`
  color: chocolate;
  margin-right: 1em;
`;
export const Price = styled.span`
  color: forestgreen;
`;

export const PriceBox = styled.div`
  width: 10%;
`;
export const BtnBox = styled.div`
  width: 20%;
`;
export const Btns = styled.button`
  background-color: cadetblue;
  border-radius: 10px;
  border: none;
  color: white;
  margin-right: 2em;
  cursor: pointer;
  :hover {
    transform: scale(1.2);
  }
  transition: all 250ms ease-in;
`;
