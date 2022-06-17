import BoardListItemUI from "./BoardListItem.presenter";
import * as S from "./BoardList.styles";
import Pagination from "../../../commons/pagination/pagination";

export default function BoardListUI(props) {
  return (
    <S.Box ref={props.ListRef}>
      <div>
        <S.SearchBar
          type="search"
          placeholder="검색어를 입력해 주세요"
          onChange={props.onChangeSearch}
        />
      </div>
      {props.data?.fetchBoards?.map((list) => (
        <BoardListItemUI
          key={list._id}
          list={list}
          onMoveToDetail={props.onMoveToDetail}
          keyword={props.keyword}
        />
      ))}
      <Pagination refetch={props.refetch} lastpage={props.lastpage} />
    </S.Box>
  );
}
