import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../commons/store";
import { withAuth } from "../../hocs/withAuth";

import * as S from "./Header.styles";

function HeaderUI() {
  const [userInfo] = useRecoilState(userInfoState);
  return (
    <S.Wrapper>
      <S.Title>Welcome to "Do you know club"</S.Title>
      <S.ID>{userInfo.name}님 환영합니다.</S.ID>
    </S.Wrapper>
  );
}

export default withAuth(HeaderUI);
