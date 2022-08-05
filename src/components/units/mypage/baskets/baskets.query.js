import { gql } from "@apollo/client";

export const CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING = gql`
  mutation variables($useritemId: ID!) {
    createPointTransactionOfBuyingAndSelling(useritemId: $useritemId) {
      _id
    }
  }
`;
export const FETCH_POINT_TRANSACTION_OF_BUYING = gql`
  query {
    fetchPointTransactionsOfBuying {
      balance
    }
  }
`;
export const FETCH_USER_LOGGED_IN = gql`
  query variables {
    fetchUserLoggedIn {
      name
      email
      userPoint {
        amount
      }
    }
  }
`;
