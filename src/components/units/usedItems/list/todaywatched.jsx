import * as S from "./usedItemList.styles";

export default function WishItems(props) {
  return (
    <S.WishedBox>
      <S.ImageBox>
        {props.el?.images
          .filter((el) => el !== "")
          .slice(0, 1)
          .map((el) => (
            <S.WishedImg src={`https://storage.googleapis.com/${el}`} />
          ))}
        <S.Like>찜:{props.el?.pickedCount}</S.Like>
      </S.ImageBox>
      <S.WishedDetailBox>
        <S.WishedItemName>{props.el?.name}님</S.WishedItemName>
        <S.WishedItemPrice>{props.el?.price}원</S.WishedItemPrice>
      </S.WishedDetailBox>
    </S.WishedBox>
  );
}
