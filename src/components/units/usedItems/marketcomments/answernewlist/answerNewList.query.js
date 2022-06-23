import { gql } from "@apollo/client";

export const FETCH_USED_ITEM_QUESTION_ANSWERS = gql`
  query variables($page: Int, $useditemQuestionId: ID!) {
    fetchUseditemQuestionAnswers(
      page: $page
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
      contents
      user {
        name
        picture
      }
      createdAt
      updatedAt
      deletedAt
    }
  }
`;
