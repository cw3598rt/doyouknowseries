import { gql } from "@apollo/client";

export const FETCH_USED_ITEMS_IPICKED = gql`
  query variables($search: String, $page: Int) {
    fetchUseditemsIPicked(search: $search, page: $page) {
      name
      remark
      contents
      price
      images
      pickedCount
      buyer {
        name
      }
      seller {
        name
      }
    }
  }
`;
export const FETCH_USED_ITEMS_COUNT_I_PICKED = gql`
  query variables {
    fetchUseditemsCountIPicked
  }
`;
