import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation variables($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      email
      name
    }
  }
`;
