import BoardCreate from "../../../../../src/components/units/boards/new/BoardNew.container";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
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
export default function FreeBoardEditPage() {
  const router = useRouter();
  const { data: defaultData } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query._id,
    },
  });
  return <BoardCreate isEdit={true} defaultData={defaultData} />;
}
