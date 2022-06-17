import * as S from "./CommentNew.styles";
import { Rate } from "antd";
export default function CommentNewUI(props) {
  return (
    <S.Box>
      <S.Titlebox>
        <S.MainIcon src="../../../../../../chat_bubble.png" alt="icon" />
        <S.Title>댓글</S.Title>
      </S.Titlebox>
      <S.InfoBox>
        <S.WriterBox>
          <S.WriterInput
            type="text"
            name="writer"
            placeholder="작성자"
            onChange={props.onChangeInputs}
            defaultValue={props.list?.writer}
          />
          <S.PasswordInput
            type="password"
            name="password"
            placeholder="비밀번호"
            onChange={props.onChangeInputs}
          />
          <Rate
            onChange={props.setValue}
            value={props.value || props.list?.rating}
          />
        </S.WriterBox>
      </S.InfoBox>
      <S.TextBox>
        <S.TextArea
          name="contents"
          onChange={props.onChangeInputs}
          maxLength={100}
          defaultValue={props.list?.contents}
        />
        <S.EnrollBox>
          <S.Count>{props.inputs?.contents.split("").length}/100</S.Count>
          <S.Btn
            onClick={
              props.isEdit ? props.onUpdateComment : props.onCreateComment
            }
          >
            {props.isEdit ? "수정" : "등록"}
          </S.Btn>
        </S.EnrollBox>
      </S.TextBox>
    </S.Box>
  );
}
