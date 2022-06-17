import BoardListUI from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.query";
import _, { startCase } from "lodash";
import { useState } from "react";
import { useRef, useEffect } from "react";

export default function BoardList() {
  const ListRef = useRef();
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: BoardCount } = useQuery(FETCH_BOARDS_COUNT);
  const lastpage = Math.ceil(BoardCount?.fetchBoardsCount / 10);

  useEffect(() => {
    ListRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);
  const onMoveToDetail = (event) => {
    router.push(`/boards/detail/${event.currentTarget.id}`);
  };
  const Deboucing = _.debounce((data) => {
    refetch({ search: data, page: 1 });
    setKeyword(data);
  }, 200);
  const onChangeSearch = (event) => {
    Deboucing(event.target.value);
  };
  return (
    <BoardListUI
      ListRef={ListRef}
      keyword={keyword}
      onChangeSearch={onChangeSearch}
      data={data}
      refetch={refetch}
      lastpage={lastpage}
      onMoveToDetail={onMoveToDetail}
    />
  );
}
