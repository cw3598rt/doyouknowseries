import { useMutation } from "@apollo/client";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import {
  CREATE_USED_ITEM_QUESTION_ANSWER,
  UPDATE_USED_ITEM_QUESTION_ANSWER,
} from "./answerNew.query";
import { FETCH_USED_ITEM_QUESTION_ANSWERS } from "../answernewlist/answerNewList.query";
import { Modal } from "antd";
import * as S from "./answerNew.styles";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { QuestionIdState } from "../../../../../commons/store";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
export default function AnswerNew(props) {
  const router = useRouter();
  const [createAnswergql] = useMutation(CREATE_USED_ITEM_QUESTION_ANSWER);
  const { handleSubmit, setValue, trigger, reset } = useForm();
  const [questionId, setQuestionId] = useRecoilState(QuestionIdState);
  const [updateAnswergql] = useMutation(UPDATE_USED_ITEM_QUESTION_ANSWER);
  const onChangeText = (value) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };
  const onSubmitCreateAnswer = async (data) => {
    try {
      await createAnswergql({
        variables: {
          createUseditemQuestionAnswerInput: {
            contents: data.contents,
          },
          useditemQuestionId: props.useditemQuestionId,
        },
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchUseditemQuestionAnswers: (prev) => {
                return [data.createUseditemQuestionAnswer, ...prev];
              },
            },
          });
        },
      });
      setQuestionId(props.useditemQuestionId);
      props.setOpen(false);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };
  const onSubmitUpdateAnswer = async (data) => {
    const updateUseditemQuestionAnswerInput = {};
    if (data.contents)
      updateUseditemQuestionAnswerInput.contents = data.contents;
    try {
      await updateAnswergql({
        variables: {
          updateUseditemQuestionAnswerInput,
          useditemQuestionAnswerId: props.useditemQuestionAnswerId,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: {
              useditemQuestionId: props.useditemQuestionId,
            },
          },
        ],
        // update(cache, { data }) {
        //   cache.modify({
        //     fields: {
        //       fetchUseditemQuestionAnswers: (prev) => {
        //         return [data.updateUseditemQuestionAnswer, ...prev];
        //       },
        //     },
        //   });
        // },
      });
      props.setIsEdit(false);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };
  useEffect(() => {
    reset({
      contents: props.prevValue?.contents,
    });
  }, [props.prevValue?.contents]);
  return (
    <>
      {props.isEdit && (
        <S.Wrapper>
          <S.Form
            onSubmit={
              props.isEdit
                ? handleSubmit(onSubmitUpdateAnswer)
                : handleSubmit(onSubmitCreateAnswer)
            }
          >
            <S.Divider></S.Divider>
            <S.LogoBox>
              <S.QuestionLogo />
              <S.Questionary>ANSWER</S.Questionary>
            </S.LogoBox>
            <ReactQuill
              onChange={onChangeText}
              defaultValue={props.prevValue?.contents}
            />
            <S.TextBox>
              <S.TextCount>/100</S.TextCount>
              <S.Btn>{props.isEdit ? "수정하기" : "Answer"}</S.Btn>
            </S.TextBox>
          </S.Form>
        </S.Wrapper>
      )}
      {props.open && (
        <S.Wrapper>
          <S.Form onSubmit={handleSubmit(onSubmitCreateAnswer)}>
            <S.Divider></S.Divider>
            <S.LogoBox>
              <S.QuestionLogo />
              <S.Questionary>ANSWER</S.Questionary>
            </S.LogoBox>
            <ReactQuill onChange={onChangeText} />
            <S.TextBox>
              <S.TextCount>/100</S.TextCount>
              <S.Btn>Answer</S.Btn>
            </S.TextBox>
          </S.Form>
        </S.Wrapper>
      )}
    </>
  );
}
