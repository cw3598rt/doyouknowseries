import { useQuery } from "@apollo/client";
import {
  FETCH_USED_ITEMS_IPICKED,
  FETCH_USED_ITEMS_COUNT_I_PICKED,
} from "./like.query";
import * as S from "./like.styles";
export default function Like() {
  const { data } = useQuery(FETCH_USED_ITEMS_IPICKED, {
    variables: {
      search: "",
    },
  });
  const { data: count } = useQuery(FETCH_USED_ITEMS_COUNT_I_PICKED);

  return (
    <S.Section>
      {data?.fetchUseditemsIPicked.map((el) => (
        <span>{el.name}</span>
      ))}

      <span>{count?.fetchUseditemsCountIPicked}</span>
    </S.Section>
  );
}
