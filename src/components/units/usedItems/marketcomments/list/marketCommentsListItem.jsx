import { useState } from "react";
import MarketComments from "../new/marketComments";
import * as S from "./marketCommentsList.styles";
import Dompurify from "dompurify";
import AnswerNew from "../answernew/answerNew";
import AnswerNewList from "../answernewlist/answerNewList";
import { useEffect } from "react";
export default function MarketCommentsListItem(props) {
  const [isEdit, setIsEdit] = useState(false);
  const [open, setOpen] = useState(false);
  const [useditemQuestionId, setUseditemQuestionId] = useState("");

  const onOpenUpdate = (useditemQuestionId) => () => {
    setIsEdit(true);
    setUseditemQuestionId(useditemQuestionId);
  };

  const onClickCreateAnswerOpen = (useditemQuestionId) => () => {
    setOpen(true);
  };
  useEffect(() => {
    setUseditemQuestionId(props.el._id);
  });
  return (
    <>
      {!isEdit && (
        <S.TextBox>
          <S.HeadBox>
            <S.ProfileBox>
              {props.el.user.picture && (
                <S.ProfilePic src={props.el.user?.picture} />
              )}
              {!props.el.user.picture && <S.DefaultProfilepic />}
              <S.Name>{props.el.user.name}</S.Name>
            </S.ProfileBox>
            <S.BtnBox>
              <S.Editbtn onClick={onOpenUpdate(props.el._id)} />
              <S.Deletebtn onClick={props.onDelete(props.el._id)} />
              <S.Reply onClick={onClickCreateAnswerOpen(props.el._id)} />
            </S.BtnBox>
          </S.HeadBox>
          <S.ContentsBox>
            {typeof window !== "undefined" && (
              <S.Contents
                dangerouslySetInnerHTML={{
                  __html: Dompurify.sanitize(props.el.contents),
                }}
              ></S.Contents>
            )}

            <S.Date>{props.el.createdAt}</S.Date>
          </S.ContentsBox>
        </S.TextBox>
      )}

      {isEdit && (
        <MarketComments
          useditemQuestionId={useditemQuestionId}
          isEdit={isEdit}
          prevValue={props.el}
          setIsEdit={setIsEdit}
        />
      )}
      {open && (
        <AnswerNew
          useditemQuestionId={useditemQuestionId}
          setOpen={setOpen}
          open={open}
        />
      )}
      <AnswerNewList useditemQuestionId={useditemQuestionId} />
    </>
  );
}
