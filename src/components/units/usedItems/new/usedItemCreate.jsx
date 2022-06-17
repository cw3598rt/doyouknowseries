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

const schema = yup.object({
  name: yup.string().required("필수지요"),
  remarks: yup.string().required("필수지요"),
  contents: yup.string().required("필수지요"),
  price: yup.string().required("필수지요"),
});

export default function CreateUsedItem(props) {
  const [createItemgql] = useMutation(CREATE_USED_ITEM);
  const [updateItemgql] = useMutation(UPDATE_USEDITEM);
  const router = useRouter();
  const { register, handleSubmit, formState, setValue, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const [imgUrl, setImgUrl] = useState(["", ""]);
  const onSubmitCreate = async (data) => {
    setImgUrl(data.images);
    try {
      const result = await createItemgql({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            images: data.images,
          },
        },
      });
      console.log(result.data?.createUseditem);
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
    setValue("images", newFileUrls);
    trigger("images");
    // setImgUrl(newFileUrls);
  };
  return (
    <S.Wrapper>
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
            placeholder="한줄평을 작성해 주세요"
            defaultValue={props.defaultData?.fetchUseditem.remarks}
            {...register("remarks")}
          />
          <S.Error>{formState.errors.remarks?.message}</S.Error>
        </S.MarkBox>
        <S.ContentsBox>
          <S.Contents>상품설명</S.Contents>
          <S.ContentsInput
            name="contents"
            defaultValue={props.defaultData?.fetchUseditem.contents}
            {...register("contents")}
          />
          <S.Error>{formState.errors.contents?.message}</S.Error>
        </S.ContentsBox>
        <S.PriceBox>
          <S.Price>판매 가격</S.Price>
          <S.Inputs
            type="text"
            placeholder="판매가격을 작성해 주세요"
            defaultValue={props.defaultData?.fetchUseditem.price}
            {...register("price")}
          />
          <S.Error>{formState.errors.price?.message}</S.Error>
        </S.PriceBox>
        <S.ImageBox>
          <S.Imgtitle>사진 첨부</S.Imgtitle>
          <S.Imgs>
            {imgUrl.map((el, index) => (
              <Uploads02
                register={register}
                key={v4()}
                index={index}
                onChangeFileUrls={onChangeFileUrls}
                fileUrl={el}
              />
            ))}
          </S.Imgs>
        </S.ImageBox>
        <S.CreateBtn>{props.isEdit ? "수정하기" : "등록하기"}</S.CreateBtn>
      </S.Form>
    </S.Wrapper>
  );
}
