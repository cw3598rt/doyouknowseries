import styled from "@emotion/styled";
export const Wrapper = styled.div`
  height: 100vh;
  width: 100px;
  display: flex;
  flex-direction: column;
  background: url("../../../../../sidebarbg.png") center/cover;
  position: fixed;
  left: 0px;
  top: 0px;
  border-radius: 10px;
  z-index: 2;
`;
export const Flag = styled.span`
  font-size: 2rem;
`;
export const Title = styled.div`
  color: forestgreen;
  font-size: 1.5rem;
`;
export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: forestgreen;
  margin-bottom: 2rem;
`;
export const Btns = styled.button`
  width: 100%;
  background-color: forestgreen;
  color: white;
  border-radius: 10px;
  border: none;
  margin-bottom: 1rem;
  cursor: pointer;
  :hover {
    transform: translateX(1rem);
  }
  transition: all 250ms ease-in;
`;
