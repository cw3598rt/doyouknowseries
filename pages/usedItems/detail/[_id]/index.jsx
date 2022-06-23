import UsedItemDetail from "../../../../src/components/units/usedItems/detail/usedItemDetail";
import MarketCommentsList from "../../../../src/components/units/usedItems/marketcomments/list/marketCommentsList";
import MarketComments from "../../../../src/components/units/usedItems/marketcomments/new/marketComments";
export default function UsedItemDetailPage() {
  return (
    <>
      <UsedItemDetail />
      <MarketComments />
      <MarketCommentsList />
    </>
  );
}
