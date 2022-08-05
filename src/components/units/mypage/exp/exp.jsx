import { useState } from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 100px;
  height: 100px;
  background-color: blue;
`;

export default function Exp() {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const onClickSetStart = (event1) => (event2) => {
    onSaveFirst(event1);
    onClickSetEnd(event2);
  };
  const onSaveFirst = (data) => {
    setStart(data);
  };
  const onClickSetEnd = (data) => {
    setEnd(data);
  };
  console.log([`start ${start}`, end]);

  return (
    <div>
      <Wrapper
        onClick={() => {
          onClickSetStart(11)(22);
        }}
      ></Wrapper>
    </div>
  );
}
