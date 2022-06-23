import { useQuery } from "@apollo/client";
import { FETCH_USED_ITEM_QUESTION_ANSWERS } from "./answerNewList.query";
import AnswerNewListItems from "./answerNewListItem";
import * as S from "./answerNewList.styles";
export default function AnswerNewList(props) {
  const { data } = useQuery(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: {
      useditemQuestionId: props.useditemQuestionId,
    },
  });

  return (
    <S.Wrapper>
      {data?.fetchUseditemQuestionAnswers.map((el) => (
        <AnswerNewListItems
          key={el._id}
          el={el}
          useditemQuestionId={props.useditemQuestionId}
        />
      ))}
    </S.Wrapper>
  );
}
