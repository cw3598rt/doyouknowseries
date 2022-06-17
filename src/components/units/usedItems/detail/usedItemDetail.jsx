import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { FETCH_USED_ITEM, DELETE_USEDITEM } from "./usedItemDetail.query";
import * as S from "./usedItemDetail.styles";
export default function UsedItemDetail() {
  const router = useRouter();
  const [deleteUseditemgql] = useMutation(DELETE_USEDITEM);
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: router.query._id,
    },
  });
  const onClickDelete = async () => {
    try {
      await deleteUseditemgql({
        variables: {
          useditemId: router.query._id,
        },
      });
      Modal.success({ content: "상품이 삭제되었습니다." });
      router.push("/usedItems/list");
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };
  const onClickMoveToEdit = () => {
    router.push(`/usedItems/detail/${router.query._id}/edit`);
  };
  const onClickMoveToList = () => {
    router.push("/usedItems/list");
  };
  return (
    <S.Wrapper>
      <S.SellerBox>
        <S.Seller>{data?.fetchUseditem.seller.name}</S.Seller>
        <S.SmallDetailbox>
          <S.Date>{data?.fetchUseditem.createdAt}</S.Date>
          <S.Location />
        </S.SmallDetailbox>
      </S.SellerBox>
      <S.Divider></S.Divider>
      <S.Item>{data?.fetchUseditem.name}</S.Item>
      <S.Remark>{data?.fetchUseditem.remarks}</S.Remark>
      <S.PicBox>
        {/* <img src={} alt="img1" />
        <img src={} alt="img2" /> */}
      </S.PicBox>
      <S.Detail>{data?.fetchUseditem.contents}</S.Detail>
      <S.Price>{data?.fetchUseditem.price}</S.Price>
      <S.BtnBox>
        <S.Btns onClick={onClickMoveToList}>상품목록</S.Btns>
        <S.Btns onClick={onClickMoveToEdit}>수정하기</S.Btns>
        <S.Btns onClick={onClickDelete}>삭제하기</S.Btns>
      </S.BtnBox>
    </S.Wrapper>
  );
}
