import { gql } from "@apollo/client";

export const FETCH_BOARD = gql`
  query variables($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      youtubeUrl
      likeCount
      dislikeCount
      images
      boardAddress {
        zipcode
        address
        addressDetail
      }
      createdAt
      updatedAt
      deletedAt
    }
  }
`;
export const DELETE_BOARD = gql`
  mutation variables($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;
export const LIKE_BOARD = gql`
  mutation variables($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;
export const DISLIKE_BOARD = gql`
  mutation variables($boardId: ID!) {
    dislikeBoard(boardId: $boardId)
  }
`;
