import styled from "@emotion/styled";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid cadetblue;
  border-radius: 10px;
`;

export const Head = styled.div`
  font-size: 2rem;
  color: forestgreen;
`;

export const Divider = styled.div`
  width: 90%;
  height: 1px;
  background-color: lightgray;
  margin-bottom: 1rem;
`;

export const TitleBox = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
`;
export const Title = styled.span`
  font-size: 1.1rem;
  color: forestgreen;
`;
export const TitleInput = styled.input`
  outline-color: forestgreen;
  border: 1px solid lightgray;
  border-radius: 10px;
`;

export const ContentsBox = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
`;

export const ContentsLabel = styled.span`
  font-size: 1.1rem;
  color: forestgreen;
`;
export const TextInput = styled.textarea`
  outline-color: forestgreen;
  border: 1px solid lightgray;
  border-radius: 10px;
`;
export const YoutubeBox = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
`;
export const Youtubelabel = styled.span`
  font-size: 1.1rem;
  color: forestgreen;
`;
export const YoutubeInput = styled.input`
  outline-color: forestgreen;
  border: 1px solid lightgray;
  border-radius: 10px;
`;
export const ImgBox = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
`;
export const Imglabel = styled.span`
  font-size: 1.1rem;
  color: forestgreen;
`;
export const Imgs = styled.div`
  display: flex;
  flex-direction: row;
`;

export const AddressBox = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;
export const PostCode = styled.span`
  font-size: 1.1rem;
  color: forestgreen;
`;
export const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
`;
export const ZipCode = styled.input`
  width: 60px;
  border-radius: 10px;
  border: 1px solid forestgreen;
  margin-right: 10px;
`;
export const SearchBtn = styled.button`
  border-radius: 10px;
  border: 1px solid forestgreen;
  color: forestgreen;
  cursor: pointer;
  :hover {
    transform: scale(1.2);
  }
  transition: all 250ms ease-in;
`;
export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const AddressLabel = styled.span`
  font-size: 1.1rem;
  color: forestgreen;
`;
export const AddressInputs = styled.input`
  outline-color: forestgreen;
  border: 1px solid lightgray;
  border-radius: 10px;
`;
export const DetailAddressBox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const DetailAddressLabel = styled.span`
  font-size: 1.1rem;
  color: forestgreen;
`;
export const DetailAddressInputs = styled.input`
  outline-color: forestgreen;
  border: 1px solid lightgray;
  border-radius: 10px;
`;
export const WriterandPasswordBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 3rem;
`;
export const WriterBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 16px;
`;
export const Writer = styled.span`
  font-size: 1.1rem;
  color: forestgreen;
`;
export const WriterInput = styled.input`
  outline-color: forestgreen;
  border: 1px solid lightgray;
  border-radius: 10px;
`;
export const PasswordBox = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Password = styled.span`
  font-size: 1.1rem;
  color: forestgreen;
`;
export const PasswordInput = styled.input`
  outline-color: forestgreen;
  border: 1px solid lightgray;
  border-radius: 10px;
`;
export const BTNBox = styled.div`
  display: flex;
  flex-direction: row;
`;
export const EnrollBtn = styled.button`
  color: white;
  border-radius: 10px;
  border: 1px solid forestgreen;
  background-color: ${(props) =>
    props.isActive ? "forestgreen" : "lightgrey"};
  margin-right: 16px;
  margin-bottom: 16px;
  cursor: pointer;
  :hover {
    transform: scale(1.4);
  }

  transition: all 250ms ease-in;
`;

export const CancelBtn = styled.button`
  border-radius: 10px;
  border: 1px solid forestgreen;
  background-color: transparent;
  margin-right: 16px;
  margin-bottom: 16px;
  cursor: pointer;
  :hover {
    transform: scale(1.4);
    color: white;
    background-color: forestgreen;
  }
  transition: all 250ms ease-in;
`;
