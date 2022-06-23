import CreateUsedItem from "../../../../../src/components/units/usedItems/new/usedItemCreate";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
const FETCH_USED_ITEM = gql`
  query variables($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      images
      pickedCount
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

export default function UsedItemEditPage() {
  const router = useRouter();
  const { data: defaultData, loading } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: router.query._id,
    },
  });

  return loading ? (
    ""
  ) : (
    <CreateUsedItem isEdit={true} defaultData={defaultData} />
  );
}
