import * as S from "./usedItemList.styles";
export default function UsedItemListItem(props) {
  return (
    <S.ListBox onClick={props.onClickMoveToItem(props.el._id)}>
      <S.SellerBox>
        {props.el.images
          .filter((el) => el !== "")
          .slice(0, 1)
          .map((el) => (
            <S.IMG src={`https://storage.googleapis.com/${el}`} />
          ))}

        <S.Seller>{props.el.seller.name}</S.Seller>
      </S.SellerBox>
      <S.DetailBox>
        <S.RemarkBox title={props.el?.remarks}>
          <S.Price>{props.el.price}</S.Price>
          <S.Date>{props.el.createdAt}</S.Date>
        </S.RemarkBox>
      </S.DetailBox>
    </S.ListBox>
  );
}
