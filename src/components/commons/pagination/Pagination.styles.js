import styled from "@emotion/styled";

export const Box = styled.div`
  width: 50%;
  padding: 2rem 0 2rem 0;
  display: flex;
  flex-direction: row;
  margin: auto;
  justify-content: space-between;
  border-radius: 10px;
  text-align: center;
`;

export const Btn = styled.span`
  font-size: 1.5rem;
  cursor: pointer;
  :hover {
    transform: scale(1.8);
  }
  transition: all 250ms ease-in-out;
`;

export const Page = styled.span`
  font-size: 1.5rem;
  border-radius: 10px;
  background-color: ${(props) => (props.isSelected ? "cadetblue" : "white")};
  cursor: pointer;
  :hover {
    transform: scale(1.8);
  }
  transition: all 250ms ease-in-out;
`;
