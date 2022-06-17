import CommentListItemtUI from "./CommentListItem.presenter";
import * as S from "./CommentList.styles";
import InfiniteScroll from "react-infinite-scroller";
export default function CommentListUI(props) {
  return (
    <S.Wrapper>
      <InfiniteScroll
        pageStart={0}
        loadMore={props.loadFunc}
        hasMore={true || false}
        useWindow={false}
      >
        {props.data?.fetchBoardComments?.map((list) => (
          <CommentListItemtUI
            key={list?._id}
            list={list}
            onCheckPassword={props.onCheckPassword}
            isModalVisible={props.isModalVisible}
            handleCancel={props.handleCancel}
            showModal={props.showModal}
            handleOk={props.handleOk}
            onDeleteComment={props.onDeleteComment}
          />
        ))}
      </InfiniteScroll>
    </S.Wrapper>
  );
}
