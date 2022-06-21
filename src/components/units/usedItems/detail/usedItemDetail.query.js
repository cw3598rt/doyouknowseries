import { gql } from "@apollo/client";

export const FETCH_USED_ITEM = gql`
  query variables($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      images
      pickedCount
      useditemAddress {
        address
      }
      buyer {
        _id
        email
        name
        picture
        createdAt
        updatedAt
        deletedAt
      }
      seller {
        _id
        email
        name
        picture
        createdAt
        updatedAt
        deletedAt
      }
      soldAt
      createdAt
      updatedAt
      deletedAt
    }
  }
`;
export const DELETE_USEDITEM = gql`
  mutation variables($useditemId: ID!) {
    deleteUseditem(useditemId: $useditemId)
  }
`;
