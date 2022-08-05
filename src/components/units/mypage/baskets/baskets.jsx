import { useMutation, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import {
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  FETCH_POINT_TRANSACTION_OF_BUYING,
  FETCH_USER_LOGGED_IN,
} from "./baskets.query";
import * as S from "./baskets.styles";
import { userLoggedWishItemsState } from "../../../../commons/store/index";
import BasketListItem from "./basketlistitem";
import { Modal } from "antd";
export default function Baskets() {
  const [buyingitemgql] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [wishedItems, setWishedItems] = useRecoilState(
    userLoggedWishItemsState
  );
  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    setWishedItems(baskets);
  }, []);
  const onClickPurchase = (el) => async () => {
    try {
      await buyingitemgql({
        variables: {
          useritemId: el._id,
        },
        refetchQueries: [
          {
            query: FETCH_USER_LOGGED_IN,
          },
        ],
      });
      const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
      const newBaskets = baskets.filter((list) => list._id !== el._id);
      localStorage.setItem("baskets", JSON.stringify(newBaskets));
      setWishedItems(newBaskets);
      Modal.success({ content: "구매완료~" });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };
  const onClickDelete = (el) => () => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    const newBaskets = baskets.filter((list) => list._id !== el._id);
    localStorage.setItem("baskets", JSON.stringify(newBaskets));
    setWishedItems(newBaskets);
    Modal.success({ content: "삭제" });
  };

  return (
    <S.Container>
      <S.BasketInfo>
        <S.BasketTitle>장바구니</S.BasketTitle>
        <S.Points>포인트:{data?.fetchUserLoggedIn.userPoint.amount}</S.Points>
      </S.BasketInfo>

      <S.BasketListBox>
        {wishedItems.map((el) => (
          <BasketListItem
            key={el._id}
            el={el}
            onClickPurchase={onClickPurchase}
            onClickDelete={onClickDelete}
          />
        ))}
      </S.BasketListBox>
    </S.Container>
  );
}
