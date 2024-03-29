import styled from "@emotion/styled";
import { useState } from "react";

const Button = styled.button`
  width: 7.4em;
  height: 3em;
  border-radius: 10px;
  border: none;
  background: ${(props) =>
    props.isActive
      ? "linear-gradient(90deg, rgba(142,45,226,1) 30%, rgba(74,0,224,1) 100%)"
      : "#4A00E0"};
  color: ${(props) => (props.isActive ? "#FFFFFF" : "#FFFFFF")};
`;

export default function Button02(props) {
  const [isClicked, setIsClicked] = useState(false);
  const onClick = () => {
    setIsClicked((prev) => !prev);
  };
  return (
    <Button onClick={onClick} isActive={isClicked}>
      BUTTON
    </Button>
  );
}
