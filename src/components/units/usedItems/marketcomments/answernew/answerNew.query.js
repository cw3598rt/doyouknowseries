import { gql } from "@apollo/client";

export const CREATE_USED_ITEM_QUESTION_ANSWER = gql`
  mutation variables(
    $createUseditemQuestionAnswerInput: CreateUseditemQuestionAnswerInput!
    $useditemQuestionId: ID!
  ) {
    createUseditemQuestionAnswer(
      createUseditemQuestionAnswerInput: $createUseditemQuestionAnswerInput
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
      contents
      user {
        name
      }
      createdAt
      updatedAt
      deletedAt
    }
  }
`;
