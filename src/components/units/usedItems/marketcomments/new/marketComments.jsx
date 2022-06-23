import { useMutation } from "@apollo/client";
import {
  CREATE_USED_ITEM_QUESTION,
  UPDATE_USED_ITEM_QUESTION,
} from "./marketComments.query";
import { FETCH_USEDITEM_QUESTIONS } from "../list/marketCommentsList.query";
import * as S from "./marketComments.styles";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { Modal } from "antd";
import { useEffect } from "react";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
export default function MarketComments(props) {
  const router = useRouter();
  const { handleSubmit, setValue, trigger, reset } = useForm();
  const [createQuestiongql] = useMutation(CREATE_USED_ITEM_QUESTION);
  const [updateCommentgql] = useMutation(UPDATE_USED_ITEM_QUESTION);
  const onSubmitCreate = async (data) => {
    try {
      await createQuestiongql({
        variables: {
          createUseditemQuestionInput: {
            contents: data.contents,
          },
          useditemId: router.query._id,
        },
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchUseditemQuestions: (prev) => {
                return [data.createUseditemQuestion, ...prev];
              },
            },
          });
        },
      });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  const onUpdateComment = async (data) => {
    const updateUseditemQuestionInput = {};
    if (data.contents) updateUseditemQuestionInput.contents = data.contents;
    await updateCommentgql({
      variables: {
        updateUseditemQuestionInput,
        useditemQuestionId: props.useditemQuestionId,
      },
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchUseditemQuestions: (prev) => {
              return [data.createUseditemQuestion, ...prev];
            },
          },
        });
      },
    });
    props.setIsEdit(false);
  };
  const onChangeText = (value) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };
  useEffect(() => {
    reset({
      contents: props.prevValue?.contents,
    });
  }, [props.prevValue?.contents]);

  return (
    <S.Wrapper>
      <S.Form
        onSubmit={
          props.isEdit
            ? handleSubmit(onUpdateComment)
            : handleSubmit(onSubmitCreate)
        }
      >
        <S.Divider></S.Divider>
        <S.LogoBox>
          <S.QuestionLogo />
          <S.Questionary>{props.isEdit ? "수정" : "문의"}</S.Questionary>
        </S.LogoBox>
        <ReactQuill
          onChange={onChangeText}
          defaultValue={props.prevValue?.contents}
        />
        <S.TextBox>
          <S.TextCount>/100</S.TextCount>
          <S.Btn>{props.isEdit ? "수정하기" : "문의하기"}</S.Btn>
        </S.TextBox>
      </S.Form>
    </S.Wrapper>
  );
}
