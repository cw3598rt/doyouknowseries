import CommentList from "../../../../src/components/units/boards/comments/list/CommentList.container";
import CommentNew from "../../../../src/components/units/boards/comments/new/CommentNew.container";
import BoardDetail from "../../../../src/components/units/boards/detail/BoardDetail.container";

export default function FreeBoardDetailPage() {
  return (
    <div>
      <BoardDetail />
      <CommentNew />
      <CommentList />
    </div>
  );
}
