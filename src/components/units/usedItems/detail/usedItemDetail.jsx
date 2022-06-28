import { useMutation, useQuery } from "@apollo/client";
import DOMPurify from "dompurify";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { getDate } from "../../../../commons/libararies/utils";
import {
  FETCH_USED_ITEM,
  DELETE_USEDITEM,
  TOGGLE_USED_ITEM_PICK,
} from "./usedItemDetail.query";
import * as S from "./usedItemDetail.styles";
import { Tooltip } from "antd";
import Head from "next/head";
import { useEffect } from "react";
export default function UsedItemDetail() {
  const router = useRouter();
  const [deleteUseditemgql] = useMutation(DELETE_USEDITEM);
  const [likeBtngql] = useMutation(TOGGLE_USED_ITEM_PICK);
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

  const onClickWishedItem = (detail) => {
    const today = new Date();
    const modifiedDate = getDate(today);
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    const temporary = baskets.filter((basket) => basket._id === detail._id);
    if (temporary.length === 1) {
      Modal.warning({ content: "이미 찜한 품목입니다." });
      return;
    }

    const todayChoice = { ...detail, date: modifiedDate };
    const newBaskets = [...baskets, { ...todayChoice }];
    localStorage.setItem("baskets", JSON.stringify(newBaskets));
  };
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=55c63957f730151ba2d26dd40d5b65a7&autoload=false&libraries=services";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const mapContainer = document.getElementById("map"), // 지도를 표시할 div
          mapOption = {
            center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
            level: 3, // 지도의 확대 레벨
          };

        // 지도를 생성합니다
        const map = new kakao.maps.Map(mapContainer, mapOption);

        // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(
          data?.fetchUseditem.useditemAddress?.address,
          function (result, status) {
            // 정상적으로 검색이 완료됐으면
            if (status === kakao.maps.services.Status.OK) {
              const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

              // 결과값으로 받은 위치를 마커로 표시합니다
              const marker = new kakao.maps.Marker({
                map: map,
                position: coords,
              });

              // 인포윈도우로 장소에 대한 설명을 표시합니다
              const infowindow = new kakao.maps.InfoWindow({
                content:
                  '<div style="width:150px;text-align:center;padding:6px 0;">여기서 거래해요~!</div>',
              });
              infowindow.open(map, marker);

              // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
              map.setCenter(coords);
            }
          }
        );
      });
    };
  }, [data?.fetchUseditem.useditemAddress?.address || ""]);

  const onClickLikeBtn = async () => {
    await likeBtngql({
      variables: {
        useditemId: router.query._id,
      },
      refetchQueries: [
        {
          query: FETCH_USED_ITEM,
          variables: {
            useditemId: router.query._id,
          },
        },
      ],
    });
  };

  return (
    <S.Wrapper>
      <Head></Head>
      <S.SellerBox>
        <S.Seller>{data?.fetchUseditem.seller.name}</S.Seller>
        <S.SmallDetailbox>
          <S.Date>{data?.fetchUseditem.createdAt}</S.Date>
          <Tooltip title={data?.fetchUseditem.useditemAddress?.address}>
            <S.Location />
          </Tooltip>
          <Tooltip title={`찜하기${data?.fetchUseditem.pickedCount}`}>
            <S.Heart onClick={onClickLikeBtn} />
          </Tooltip>
          <Tooltip title="장바구니~">
            <S.Basket
              onClick={() => {
                onClickWishedItem(data?.fetchUseditem);
              }}
            />
          </Tooltip>
        </S.SmallDetailbox>
      </S.SellerBox>
      <S.Divider></S.Divider>
      <S.Item>{data?.fetchUseditem.name}</S.Item>
      <S.Remark>{data?.fetchUseditem.remarks}</S.Remark>
      <S.PicBox>
        {data?.fetchUseditem.images
          .filter((el) => el !== "")
          .map((el) => (
            <S.IMG src={`https://storage.googleapis.com/${el}`} alt="img" />
          ))}
      </S.PicBox>
      {typeof window !== "undefined" && (
        <S.Detail
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data?.fetchUseditem.contents),
          }}
        ></S.Detail>
      )}
      <S.Price>{data?.fetchUseditem.price}</S.Price>
      <div id="map" style={{ width: "500px", height: "400px" }}></div>
      <S.BtnBox>
        <S.Btns onClick={onClickMoveToList}>상품목록</S.Btns>
        <S.Btns onClick={onClickMoveToEdit}>수정하기</S.Btns>
        <S.Btns onClick={onClickDelete}>삭제하기</S.Btns>
      </S.BtnBox>
    </S.Wrapper>
  );
}
