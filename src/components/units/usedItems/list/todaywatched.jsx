import * as S from "./usedItemList.styles";

export default function WishItems(props) {
  return (
    <S.WishedBox onClick={props.onClickMoveToItem(props.el)}>
      <S.ImageBox>
        {props.el?.images.filter((el) => el !== "")[0] && (
          <S.WishedImg
            src={`https://storage.googleapis.com/${
              props.el?.images.filter((el) => el !== "")[0]
            }`}
          />
        )}
        {!props.el?.images.filter((el) => el !== "")[0] && (
          <S.WishedImg src="/noimage.png" />
        )}
        <S.SellerContainer>
          <S.Like>찜:{props.el?.pickedCount}</S.Like>
          <S.SellerName>{props.el?.seller.name}님</S.SellerName>
        </S.SellerContainer>
      </S.ImageBox>
      <S.WishedDetailBox>
        <S.WishedItemName>{props.el?.name}</S.WishedItemName>
        <S.WishedItemPrice>{props.el?.price}원</S.WishedItemPrice>
      </S.WishedDetailBox>
    </S.WishedBox>
  );
}
