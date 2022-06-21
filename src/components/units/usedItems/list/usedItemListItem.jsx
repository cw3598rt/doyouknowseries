import * as S from "./usedItemList.styles";
export default function UsedItemListItem(props) {
  return (
    <S.ListBox onClick={props.onClickMoveToItem(props.el)}>
      <S.SellerBox>
        {props.el.images
          .filter((el) => el !== "")
          .slice(0, 1)
          .map((el) => (
            <S.IMG src={`https://storage.googleapis.com/${el}`} />
          ))}

        <S.Seller>{props.el.seller.name}님</S.Seller>
      </S.SellerBox>
      <S.DetailBox>
        <S.RemarkBox title={`어떤 상품인가요?:${props.el?.remarks}`}>
          <S.Price>{props.el.price}원</S.Price>
          <S.Date>등록일:{props.el.createdAt}</S.Date>
        </S.RemarkBox>
      </S.DetailBox>
    </S.ListBox>
  );
}
