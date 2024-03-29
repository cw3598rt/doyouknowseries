import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid cadetblue;
  border-radius: 10px;
  padding: 2rem 2rem 2rem 2rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: forestgreen;
`;
export const Form = styled.form`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 1rem 1rem 1rem;
`;
export const MapBox = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
`;
export const AddressContainer = styled.div`
  width: 30%;
  margin-left: 4em;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0em 2em 0em 2em;
  background-color: #e9e9e9;
  border-radius: 20px;
`;
export const PostCodeBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const PostCodeInput = styled.input`
  width: 8em;
  height: 3em;
  border: none;
  outline-color: forestgreen;
  border-radius: 10px;
`;

export const PostCodeButton = styled.button`
  border-radius: 10px;
  border: none;
  background-color: forestgreen;
  color: white;
  cursor: pointer;
  :hover {
    transform: scale(1.2);
  }
  transition: all 250ms ease-in;
`;

export const AddressInputs = styled.input`
  width: 20em;
  height: 3em;
  border: none;
  outline-color: forestgreen;
  border-radius: 10px;
`;

export const Form2 = styled.form`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 1rem 1rem 1rem;
`;

export const NameBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

export const Name = styled.span`
  font-size: 1.5rem;
  color: forestgreen;
`;
export const Inputs = styled.input`
  width: 100%;
  height: 60px;
  border: 2px solid lightgray;
  outline-color: forestgreen;
  font-size: 1.3rem;
  border-radius: 10px;
`;
export const MarkBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

export const Mark = styled.span`
  font-size: 1.5rem;
  color: forestgreen;
`;

export const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

export const Contents = styled.span`
  font-size: 1.5rem;
  color: forestgreen;
`;

export const ContentsInput = styled.textarea`
  width: 100%;
  height: 300px;
  border: 2px solid lightgray;
  outline-color: forestgreen;
  font-size: 1.3rem;
  border-radius: 10px;
`;

export const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;
export const Price = styled.span`
  font-size: 1.5rem;
  color: forestgreen;
`;
export const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

export const Imgtitle = styled.span`
  font-size: 1.5rem;
  color: forestgreen;
`;

export const Imgs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const CreateBtn = styled.button`
  width: 150px;
  height: 70px;
  margin: auto;
  border: none;
  background-color: forestgreen;
  color: white;
  font-size: 1.5rem;
  border-radius: 20px;
  cursor: pointer;
  :hover {
    transform: scale(1.2);
  }
  transition: all 250ms ease-in;
`;

export const Error = styled.span`
  color: red;
  font-size: 1rem;
`;
