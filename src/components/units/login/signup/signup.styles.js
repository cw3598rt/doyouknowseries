import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Signup = styled.h2`
  color: forestgreen;
`;

export const Form = styled.form`
  height: 50%;
  width: 50%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1.5px solid forestgreen;
  border-radius: 10px;
  padding: 1rem 1rem 1rem 1rem;
`;

export const EmailBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;
export const Emalilabel = styled.label`
  font-size: 1.2rem;
  color: forestgreen;
`;
export const Emailinput = styled.input`
  outline-color: forestgreen;
  border: 2px solid lightgray;
  font-size: 1.1rem;
  width: 20rem;
  height: 2.5rem;
`;

export const NameBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;
export const Namelabel = styled.label`
  font-size: 1.2rem;
  color: forestgreen;
`;
export const Nameinput = styled.input`
  outline-color: forestgreen;
  border: 2px solid lightgray;
  font-size: 1.1rem;
  width: 20rem;
  height: 2.5rem;
`;
export const PasswordBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;
export const Passwordlabel = styled.label`
  font-size: 1.2rem;
  color: forestgreen;
`;
export const Passwordinput = styled.input`
  outline-color: forestgreen;
  border: 2px solid lightgray;
  font-size: 1.1rem;
  width: 20rem;
  height: 2.5rem;
`;

export const PasswordValidationBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;
export const PasswordValidationlabel = styled.label`
  font-size: 1.2rem;
  color: forestgreen;
`;
export const PasswordValidationinput = styled.input`
  outline-color: forestgreen;
  border: 2px solid lightgray;
  font-size: 1.1rem;
  width: 20rem;
  height: 2.5rem;
`;

export const Signupbtn = styled.button`
  outline: none;
  border: none;
  background-color: forestgreen;
  color: white;
  width: 100px;
  height: 40px;
  border-radius: 10px;
  :hover {
    transform: scale(1.2);
  }
  transition: all 250ms ease-in;
  cursor: pointer;
`;
