import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../commons/store";
import { withAuth } from "../../hocs/withAuth";

import * as S from "./Header.styles";

function HeaderUI() {
  const [userInfo] = useRecoilState(userInfoState);
  return (
    <S.Wrapper>
      <S.Title>Welcome to "Do you know club"</S.Title>
      <div>
        <S.Btns>장바구니</S.Btns>
        <S.Btns>my Page</S.Btns>
        <S.ID>{userInfo.name}님 환영합니다.</S.ID>
        <S.Btns>로그아웃</S.Btns>
      </div>
    </S.Wrapper>
  );
}

export default withAuth(HeaderUI);
