import { gql } from "@apollo/client";

export const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation variables($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      impUid
      amount
      balance
      status
      statusDetail
      useditem {
        _id
        name
        remarks
        contents
        price
        tags
        images
        pickedCount
        useditemAddress {
          _id
          zipcode
          address
          addressDetail
          lat
          lng
          createdAt
          updatedAt
          deletedAt
        }
        buyer {
          _id
          email
          name
          picture
          userPoint {
            _id
            amount
            createdAt
            updatedAt
            deletedAt
          }
          createdAt
          updatedAt
          deletedAt
        }
        seller {
          _id
          email
          name
          picture
          userPoint {
            _id
            amount
            createdAt
            updatedAt
            deletedAt
          }
          createdAt
          updatedAt
          deletedAt
        }
        soldAt
        createdAt
        updatedAt
        deletedAt
      }
      createdAt
      updatedAt
      deletedAt
    }
  }
`;
