import { useMutation } from "@apollo/client";
import { CREATE_USED_ITEM_QUESTION } from "./marketComments.query";
import * as S from "./marketComments.styles";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
export default function MarketComments() {
  const [createQuestiongql] = useMutation(CREATE_USED_ITEM_QUESTION);

  return (
    <S.Wrapper>
      <S.Form>
        <S.Divider></S.Divider>
        <S.LogoBox>
          <S.QuestionLogo />
          <S.Questionary>문의</S.Questionary>
        </S.LogoBox>
        <ReactQuill />
        <S.TextBox>
          <S.TextCount>/100</S.TextCount>
          <S.Btn>문의하기</S.Btn>
        </S.TextBox>
      </S.Form>
    </S.Wrapper>
  );
}
