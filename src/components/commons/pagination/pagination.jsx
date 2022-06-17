import { useState } from "react";
import * as S from "./Pagination.styles";

export default function Pagination(props) {
  const [startpage, setStartpage] = useState(1);
  const [selected, setSelected] = useState();
  const onMoveToPage = (event) => {
    setSelected(Number(event.target.id));
    props.refetch({
      page: Number(event.target.id),
    });
  };
  const onMoveToPrev = () => {
    if (startpage === 1) return;

    setStartpage((startpage) => startpage - 10);
    setSelected((startpage) => startpage - 10);
    props.refetch({
      page: startpage - 10,
    });
  };
  const onMoveToNext = () => {
    if (startpage + 10 <= props.lastpage) {
      setSelected((startpage) => startpage + 10);
      setStartpage((startpage) => startpage + 10);
      props.refetch({
        page: startpage + 10,
      });
    }
  };

  return (
    <S.Box>
      <S.Btn onClick={onMoveToPrev}>👈🏻</S.Btn>
      {new Array(10).fill(1).map((_, index) => (
        <S.Page
          isSelected={selected === index + startpage}
          onClick={onMoveToPage}
          key={index + startpage}
          id={index + startpage}
        >
          {index + startpage}
        </S.Page>
      ))}
      <S.Btn onClick={onMoveToNext}>👉🏻</S.Btn>
    </S.Box>
  );
}
