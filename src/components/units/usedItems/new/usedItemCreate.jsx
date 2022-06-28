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
import { useEffect, useRef } from "react";
import Head from "next/head";
import DaumPostcodeEmbed from "react-daum-postcode";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
const schema = yup.object({
  name: yup.string().required("필수지요"),
  remarks: yup.string().required("필수지요"),
  contents: yup.string().required("필수지요"),
  price: yup.string().required("필수지요"),
});

export default function CreateUsedItem(props) {
  const addressRef = useRef();
  const [createItemgql] = useMutation(CREATE_USED_ITEM);
  const [updateItemgql] = useMutation(UPDATE_USEDITEM);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
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
              zipcode,
              address,
              addressDetail,
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
    const updateUseditemInput = {
      useditemAddress: {
        zipcode: "",
        address: "",
        addressDetail: "",
      },
    };
    if (data.name) updateUseditemInput.name = data.name;
    if (data.remarks) updateUseditemInput.remarks = data.remarks;
    if (data.contents) updateUseditemInput.contents = data.contents;
    if (data.price) updateUseditemInput.price = Number(data.price);
    if (zipcode) updateUseditemInput.useditemAddress.zipcode = zipcode;
    if (address) updateUseditemInput.useditemAddress.address = address;
    if (addressDetail)
      updateUseditemInput.useditemAddress.addressDetail = addressDetail;
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
            center: new kakao.maps.LatLng(37.5782, 126.9782), // 지도의 중심좌표
            level: 3, // 지도의 확대 레벨
          };

        // 지도를 생성합니다
        const map = new kakao.maps.Map(mapContainer, mapOption);

        // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(
          address || addressRef.current?.value,
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
  }, [address]);
  const handleComplete = (data) => {
    setIsModalVisible(false);
    setAddress(data.address);
    setZipcode(data.zonecode);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onChangeAddressDetail = (event) => {
    setAddressDetail(event.target.value);
  };
  return (
    <S.Wrapper>
      {isModalVisible && (
        <Modal
          title="주소검색"
          visible={true}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
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
      </S.Form>
      <S.MapBox>
        <div id="map" style={{ width: "50%", height: "400px" }}></div>
        <S.AddressContainer>
          <S.PostCodeBox>
            <S.PostCodeInput
              type="text"
              readOnly
              value={
                zipcode ||
                props.defaultData?.fetchUseditem.useditemAddress.zipcode
              }
            />
            <S.PostCodeButton onClick={showModal}>
              우편번호 검색
            </S.PostCodeButton>
          </S.PostCodeBox>
          <S.AddressInputs
            type="text"
            ref={addressRef}
            readOnly
            value={
              address ||
              props.defaultData?.fetchUseditem.useditemAddress.address
            }
          />
          <S.AddressInputs
            type="text"
            onChange={onChangeAddressDetail}
            defaultValue={
              props.defaultData?.fetchUseditem.useditemAddress.addressDetail
            }
          />
        </S.AddressContainer>
      </S.MapBox>

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
