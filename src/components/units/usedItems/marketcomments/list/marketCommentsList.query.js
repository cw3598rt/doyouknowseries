import { gql } from "@apollo/client";

export const FETCH_USEDITEM_QUESTIONS = gql`
  query variables($useditemId: ID!) {
    fetchUseditemQuestions(useditemId: $useditemId) {
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

export const DELETE_USEDITEM_QUESTION = gql`
  mutation variables($useditemQuestionId: ID!) {
    deleteUseditemQuestion(useditemQuestionId: $useditemQuestionId)
  }
`;
