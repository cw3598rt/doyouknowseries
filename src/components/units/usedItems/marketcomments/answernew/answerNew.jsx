import { useMutation } from "@apollo/client";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { CREATE_USED_ITEM_QUESTION_ANSWER } from "./answerNew.query";
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
  return (
    <>
      {props.open && (
        <S.Wrapper>
          <S.Form onSubmit={handleSubmit(onSubmitCreateAnswer)}>
            <S.Divider></S.Divider>
            <S.LogoBox>
              <S.QuestionLogo />
              <S.Questionary>"문의"</S.Questionary>
            </S.LogoBox>
            <ReactQuill onChange={onChangeText} />
            <S.TextBox>
              <S.TextCount>/100</S.TextCount>
              <S.Btn>"문의하기"</S.Btn>
            </S.TextBox>
          </S.Form>
        </S.Wrapper>
      )}
    </>
  );
}
