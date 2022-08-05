import * as S from "./baskets.styles";

export default function BasketListItem(props) {
  return (
    <S.Wrapper>
      <S.ImagBox>
        {props.el?.images.filter((el) => el !== "")[0] && (
          <S.Img
            src={`https://storage.googleapis.com/${
              props.el?.images.filter((el) => el !== "")[0]
            }`}
            alt="item"
          />
        )}
        {!props.el?.images.filter((el) => el !== "")[0] && (
          <S.Img src="/noimage.png" alt="item" />
        )}

        <S.ItemName>{props.el.name}</S.ItemName>
      </S.ImagBox>
      <S.SellerBox>
        <S.SellerName>{props.el.seller.name}님</S.SellerName>
      </S.SellerBox>

      <S.ItemInfoBox>
        <S.Tag>{props.el.tags}</S.Tag>
        <S.Remark>{props.el.remarks}</S.Remark>
        <S.LikeCount>좋아요:{props.el.pickedCount}</S.LikeCount>
        <S.Address>주소:{props.el.useditemAddress.address}</S.Address>
      </S.ItemInfoBox>
      <S.PriceBox>
        <S.Price>{props.el.price}원</S.Price>
      </S.PriceBox>
      <S.BtnBox>
        <S.Btns onClick={props.onClickPurchase(props.el)}>구매하기</S.Btns>
        <S.Btns onClick={props.onClickDelete(props.el)}>삭제하기</S.Btns>
      </S.BtnBox>
    </S.Wrapper>
  );
}
