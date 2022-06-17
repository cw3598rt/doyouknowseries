import styled from "@emotion/styled";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
`;
export const SearchBar = styled.input`
  height: 40px;
  outline-color: forestgreen;
  border: 1px solid forestgreen;
  border-radius: 10px;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  margin-top: 2rem;
  border-radius: 10px;
  box-shadow: 5px 5px 15px 5px #599c9e;
  :hover {
    background-color: cornsilk;
    transform: translateX(1rem);
  }
  transition: all 250ms ease-in-out;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Img = styled.img`
  width: 24px;
  height: 24px;
`;

export const Title = styled.span`
  padding-left: 10px;
  color: forestgreen;
`;

export const WriterBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const Writer = styled.span`
  padding-right: 10px;
  color: forestgreen;
`;
export const Like = styled.span`
  padding-right: 10px;
  color: cadetblue;
`;

export const Dislike = styled.span`
  padding-right: 10px;
  color: orangered;
`;

export const Date = styled.span`
  color: lightcoral;
`;
export const Searched = styled.span`
  color: ${(props) => (props.isSearched ? "orangered" : "forestgreen")};
`;
