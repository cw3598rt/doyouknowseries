import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;
export const Box = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding-right: 10px;
`;

export const Imgs = styled.img`
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
  transition: all 250ms ease-in;
  border-radius: 15px;
`;
export const Title = styled.span`
  color: cadetblue;
  font-size: 1.4rem;
  text-align: center;
`;
export const Channel = styled.span`
  color: forestgreen;
  font-size: 1.2rem;
  text-align: center;
`;

export const SelectedWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const List = styled.div`
  padding-left: 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const SeacrhBar = styled.input`
  width: 400px;
  height: 40px;
  border-radius: 20px;
  outline: none;
  border: 2px solid forestgreen;
  margin-bottom: 16px;
`;
export const SearchBigBox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const SuggestedSearch = styled.span``;
