import { gql } from "@apollo/client";

export const CREATE_USED_ITEM_QUESTION = gql`
  mutation variables(
    $createUseditemQuestionInput: CreateUseditemQuestionInput!
    $useditemId: ID!
  ) {
    createUseditemQuestion(
      createUseditemQuestionInput: $createUseditemQuestionInput
      useditemId: $useditemId
    ) {
      _id
      contents
      createdAt
      updatedAt
      deletedAt
    }
  }
`;
export const UPDATE_USED_ITEM_QUESTION = gql`
  mutation variables(
    $updateUseditemQuestionInput: UpdateUseditemQuestionInput!
    $useditemQuestionId: ID!
  ) {
    updateUseditemQuestion(
      updateUseditemQuestionInput: $updateUseditemQuestionInput
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
      contents
      user {
        _id
        email
        name
        picture
      }
      createdAt
      updatedAt
      deletedAt
    }
  }
`;
