import { gql } from "@apollo/client";

export const UPLOAD_FILE = gql`
  mutation variables($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;
