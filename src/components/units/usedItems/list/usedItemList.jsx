import { FETCH_USED_ITEMS } from "./usedItemList.query";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import UsedItemListItem from "./usedItemListItem";
import InfiniteScroll from "react-infinite-scroller";
import * as S from "./usedItemList.styles";
export default function UsedItemList() {
  const { data, fetchMore } = useQuery(FETCH_USED_ITEMS);
  const router = useRouter();
  const onClickMoveToItem = (useditemId) => () => {
    router.push(`/usedItems/detail/${useditemId}`);
  };
  const loadFunc = () => {
    if (!data) return;
    fetchMore({
      variables: { page: Math.ceil(data.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUseditems)
          return { fetchUseditems: [...prev.fetchUseditems] };

        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  return (
    <S.Wrapper>
      <InfiniteScroll
        pageStart={0}
        loadMore={loadFunc}
        hasMore={true || false}
        useWindow={false}
      >
        {data?.fetchUseditems.map((el) => (
          <UsedItemListItem
            key={el._id}
            el={el}
            onClickMoveToItem={onClickMoveToItem}
          />
        ))}
      </InfiniteScroll>
    </S.Wrapper>
  );
}
