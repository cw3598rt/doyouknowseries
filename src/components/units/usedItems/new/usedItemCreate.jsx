import { useMutation } from "@apollo/client";
import { CREATE_USED_ITEM, UPDATE_USEDITEM } from "./usedItemCreate.query";
import * as S from "./usedItemCreate.styles";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Uploads02 from "../../../commons/uploads/02/Uploads02.container";
import { v4 } from "uuid";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
import { Modal } from "antd";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import Head from "next/head";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
const schema = yup.object({
  name: yup.string().required("필수지요"),
  remarks: yup.string().required("필수지요"),
  contents: yup.string().required("필수지요"),
  price: yup.string().required("필수지요"),
});

export default function CreateUsedItem(props) {
  const [createItemgql] = useMutation(CREATE_USED_ITEM);
  const [updateItemgql] = useMutation(UPDATE_USEDITEM);
  const [address, setAddress] = useState("");
  const [geoinfo, setGeoinfo] = useState("");
  const router = useRouter();
  const { register, handleSubmit, formState, setValue, trigger, reset } =
    useForm({
      resolver: yupResolver(schema),
      mode: "onChange",
    });

  const [imgUrl, setImgUrl] = useState(["", ""]);
  const onChangeContents = (value) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };
  const onSubmitCreate = async (data) => {
    try {
      const result = await createItemgql({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            useditemAddress: {
              address,
            },
            images: imgUrl,
          },
        },
      });

      router.push(`/usedItems/detail/${result.data?.createUseditem._id}`);
      Modal.success({ content: "성공입니다." });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  const onSubmitUpdate = async (data) => {
    const updateUseditemInput = {};
    if (data.name) updateUseditemInput.name = data.name;
    if (data.remarks) updateUseditemInput.remarks = data.remarks;
    if (data.contents) updateUseditemInput.contents = data.contents;
    if (data.price) updateUseditemInput.price = Number(data.price);

    try {
      const result = await updateItemgql({
        variables: {
          useditemId: router.query._id,
          updateUseditemInput,
        },
      });
      Modal.success({ content: "수정완료" });
      router.push(`/usedItems/detail/${result.data?.updateUseditem._id}`);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };
  const onChangeFileUrls = (fileUrl, index) => {
    const newFileUrls = [...imgUrl];
    newFileUrls[index] = fileUrl;
    setImgUrl(newFileUrls);
  };
  useEffect(() => {
    reset({
      name: props.defaultData?.fetchUseditem.name,
      remarks: props.defaultData?.fetchUseditem.remarks,
      contents: props.defaultData?.fetchUseditem.contents,
      price: Number(props.defaultData?.fetchUseditem.price) || "",
    });
  }, [props.defaultData?.fetchUseditem]);
  useEffect(() => {
    if (props.defaultData?.fetchUseditem.images?.length) {
      setImgUrl([...props.defaultData.fetchUseditem.images]);
    }
  }, [props.defaultData]);
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=55c63957f730151ba2d26dd40d5b65a7&autoload=false&libraries=services";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const mapContainer = document.getElementById("map"), // 지도를 표시할 div
          mapOption = {
            center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
            level: 1, // 지도의 확대 레벨
          };

        // 지도를 생성합니다
        const map = new kakao.maps.Map(mapContainer, mapOption);

        // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new kakao.maps.services.Geocoder();

        const marker = new kakao.maps.Marker(), // 클릭한 위치를 표시할 마커입니다
          infowindow = new kakao.maps.InfoWindow({ zindex: 1 }); // 클릭한 위치에 대한 주소를 표시할 인포윈도우입니다

        // 지도를 클릭했을 때 클릭 위치 좌표에 대한 주소정보를 표시하도록 이벤트를 등록합니다
        kakao.maps.event.addListener(map, "click", function (mouseEvent) {
          searchDetailAddrFromCoords(
            mouseEvent.latLng,
            function (result, status) {
              if (status === kakao.maps.services.Status.OK) {
                const detailAddr = !!result[0].road_address
                  ? "<div>도로명주소 : " +
                    result[0].road_address.address_name +
                    "</div>"
                  : "";
                detailAddr +=
                  "<div>지번 주소 : " +
                  result[0].address.address_name +
                  "</div>";

                const content =
                  '<div class="bAddr">' +
                  '<span class="title">법정동 주소정보</span>' +
                  detailAddr +
                  "</div>";

                // 마커를 클릭한 위치에 표시합니다
                marker.setPosition(mouseEvent.latLng);
                marker.setMap(map);

                // 인포윈도우에 클릭한 위치에 대한 법정동 상세 주소정보를 표시합니다
                setAddress(
                  result[0].road_address?.address_name ||
                    result[0].address?.address_name
                );
                setGeoinfo(mouseEvent.latLng);
                infowindow.setContent(content);
                infowindow.open(map, marker);
              }
            }
          );
        });

        function searchDetailAddrFromCoords(coords, callback) {
          // 좌표로 법정동 상세 주소 정보를 요청합니다
          geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
        }
      });
    };
  }, []);
  return (
    <S.Wrapper>
      <Head></Head>
      <S.Title>{props.isEdit ? "상품 수정" : "상품 등록"}</S.Title>
      <S.Form
        onSubmit={
          props.isEdit
            ? handleSubmit(onSubmitUpdate)
            : handleSubmit(onSubmitCreate)
        }
      >
        <S.NameBox>
          <S.Name>상품명</S.Name>
          <S.Inputs
            type="text"
            placeholder="상품명을 작성해 주세요"
            defaultValue={props.defaultData?.fetchUseditem.name}
            {...register("name")}
          />
          <S.Error>{formState.errors.name?.message}</S.Error>
        </S.NameBox>
        <S.MarkBox>
          <S.Mark>한줄평</S.Mark>
          <S.Inputs
            type="text"
            name="remarks"
            placeholder="한줄평을 작성해 주세요"
            defaultValue={props.defaultData?.fetchUseditem.remarks}
            {...register("remarks")}
          />
          <S.Error>{formState.errors.remarks?.message}</S.Error>
        </S.MarkBox>
        <S.ContentsBox>
          <S.Contents>상품설명</S.Contents>
          {/* <S.ContentsInput
            name="contents"
            defaultValue={props.defaultData?.fetchUseditem.contents}
            {...register("contents")}
          /> */}
          <ReactQuill
            onChange={onChangeContents}
            defaultValue={props.defaultData?.fetchUseditem.contents}
          />
          <S.Error>{formState.errors.contents?.message}</S.Error>
        </S.ContentsBox>
        <S.PriceBox>
          <S.Price>판매 가격</S.Price>
          <S.Inputs
            type="text"
            name="price"
            placeholder="판매가격을 작성해 주세요"
            defaultValue={props.defaultData?.fetchUseditem.price}
            {...register("price")}
          />
          <S.Error>{formState.errors.price?.message}</S.Error>
        </S.PriceBox>
        <div id="map" style={{ width: "500px", height: "400px" }}></div>
      </S.Form>
      <S.ImageBox>
        <S.Imgtitle>사진 첨부</S.Imgtitle>
        <S.Imgs>
          {imgUrl.map((el, index) => (
            <Uploads02
              key={v4()}
              index={index}
              onChangeFileUrls={onChangeFileUrls}
              fileUrl={el}
            />
          ))}
        </S.Imgs>
      </S.ImageBox>
      <S.Form2
        onSubmit={
          props.isEdit
            ? handleSubmit(onSubmitUpdate)
            : handleSubmit(onSubmitCreate)
        }
      >
        <S.CreateBtn>{props.isEdit ? "수정하기" : "등록하기"}</S.CreateBtn>
      </S.Form2>
    </S.Wrapper>
  );
}
