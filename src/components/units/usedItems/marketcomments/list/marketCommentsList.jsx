import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import * as S from "./marketCommentsList.styles";
import {
  FETCH_USEDITEM_QUESTIONS,
  DELETE_USEDITEM_QUESTION,
} from "./marketCommentsList.query";
import MarketCommentsListItem from "./marketCommentsListItem";

export default function MarketCommentsList() {
  const router = useRouter();
  const [deleteCommentgql] = useMutation(DELETE_USEDITEM_QUESTION);

  const { data } = useQuery(FETCH_USEDITEM_QUESTIONS, {
    variables: {
      useditemId: router.query._id,
    },
  });

  const onDelete = (useditemQuestionId) => async () => {
    await deleteCommentgql({
      variables: {
        useditemQuestionId: useditemQuestionId,
      },
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchUseditemQuestions: (prev, { readField }) => {
              const deletedId = data.deleteUseditemQuestion;
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
      {data?.fetchUseditemQuestions.map((el) => (
        <MarketCommentsListItem key={el._id} el={el} onDelete={onDelete} />
      ))}
    </S.Wrapper>
  );
}
