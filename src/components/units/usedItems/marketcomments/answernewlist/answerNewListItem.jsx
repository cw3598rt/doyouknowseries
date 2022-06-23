import AnswerNew from "../answernew/answerNew";
import { useState } from "react";
import Dompurify from "dompurify";
import * as S from "./answerNewList.styles";
export default function AnswerNewListItems(props) {
  const [isEdit, setIsEdit] = useState(false);
  const [open, setOpen] = useState(false);
  const onOpenUpdate = () => {
    setIsEdit(true);
  };
  const onClickCreateAnswerOpen = () => {
    setOpen(true);
  };
  return (
    <>
      {!isEdit && (
        <S.TextBox>
          <S.HeadBox>
            <S.ProfileBox>
              {props.el?.user.picture && (
                <S.ProfilePic src={props.el.user?.picture} />
              )}
              {!props.el?.user.picture && <S.DefaultProfilepic />}
              <S.Name>{props.el?.user.name}</S.Name>
            </S.ProfileBox>
            <S.BtnBox>
              <S.Editbtn onClick={onOpenUpdate} />
              <S.Deletebtn />
              <S.Reply onClick={onClickCreateAnswerOpen} />
            </S.BtnBox>
          </S.HeadBox>
          <S.ContentsBox>
            {typeof window !== "undefined" && (
              <S.Contents
                dangerouslySetInnerHTML={{
                  __html: Dompurify.sanitize(props.el?.contents),
                }}
              ></S.Contents>
            )}

            <S.Date>{props.el?.createdAt}</S.Date>
          </S.ContentsBox>
        </S.TextBox>
      )}
      {isEdit && (
        <AnswerNew
          useditemQuestionId={props.useditemQuestionId}
          isEdit={isEdit}
          prevValue={props.el}
          setIsEdit={setIsEdit}
        />
      )}
      {open && (
        <AnswerNew
          useditemQuestionId={props.useditemQuestionId}
          setOpen={setOpen}
        />
      )}
    </>
  );
}
