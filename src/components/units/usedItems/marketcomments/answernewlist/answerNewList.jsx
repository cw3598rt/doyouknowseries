import { useMutation, useQuery } from "@apollo/client";
import {
  FETCH_USED_ITEM_QUESTION_ANSWERS,
  DELETE_USED_ITEM_QUESTION_ANSWER,
} from "./answerNewList.query";
import AnswerNewListItems from "./answerNewListItem";
import * as S from "./answerNewList.styles";
export default function AnswerNewList(props) {
  const [deleteAnswergql] = useMutation(DELETE_USED_ITEM_QUESTION_ANSWER);
  const { data } = useQuery(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: {
      useditemQuestionId: props.useditemQuestionId,
    },
  });
  const onClickAnswerDelete = (useditemQuestionAnswerId) => async () => {
    await deleteAnswergql({
      variables: {
        useditemQuestionAnswerId: useditemQuestionAnswerId,
      },
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchUseditemQuestionAnswers: (prev, { readField }) => {
              const deletedId = data.deleteUseditemQuestionAnswer;
              const filteredPrev = prev.filter(
                (el) => readField("_id", el) !== deletedId
              );
              return [...filteredPrev];
            },
          },
        });
      },
    });
  };
  return (
    <S.Wrapper>
      {data?.fetchUseditemQuestionAnswers.map((el) => (
        <AnswerNewListItems
          key={el._id}
          el={el}
          useditemQuestionId={props.useditemQuestionId}
          onClickAnswerDelete={onClickAnswerDelete}
        />
      ))}
    </S.Wrapper>
  );
}
