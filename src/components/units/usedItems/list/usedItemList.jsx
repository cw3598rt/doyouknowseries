import { FETCH_USED_ITEMS } from "./usedItemList.query";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import UsedItemListItem from "./usedItemListItem";
import InfiniteScroll from "react-infinite-scroller";
import { v4 } from "uuid";
import * as S from "./usedItemList.styles";
import WishItems from "./todaywatched";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { clickedItemsState } from "../../../../commons/store";
import { useRef } from "react";
import { useEffect } from "react";

export default function UsedItemList() {
  const listRef = useRef();
  const { data, fetchMore } = useQuery(FETCH_USED_ITEMS);
  const [clickeditems, setClickeditems] = useRecoilState(clickedItemsState);
  const router = useRouter();
  useEffect(() => {
    listRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);
  const onClickMoveToItem = (useditemId) => () => {
    router.push(`/usedItems/detail/${useditemId._id}`);
    const updatedclickeditems = [...clickeditems, { ...useditemId }];
    setClickeditems(updatedclickeditems);
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
    <S.Container ref={listRef}>
      <S.Wrapper>
        <InfiniteScroll
          pageStart={0}
          loadMore={loadFunc}
          hasMore={true || false}
          useWindow={false}
        >
          {data?.fetchUseditems.map((el) => (
            <UsedItemListItem
              key={v4()}
              el={el}
              onClickMoveToItem={onClickMoveToItem}
            />
          ))}
        </InfiniteScroll>
      </S.Wrapper>
      <S.TodayBox>
        {clickeditems.map((el) => (
          <WishItems key={v4()} el={el} />
        ))}
      </S.TodayBox>
    </S.Container>
  );
}
