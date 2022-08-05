import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../commons/store";
import {
  CREATE_POINT_TRANSACTION_OF_LOADING,
  FETCH_USER_LOGGED_IN,
} from "./profile.query";
import * as S from "./profile.styles";
export default function Profile() {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const router = useRouter();
  const [createpointgql] = useMutation(CREATE_POINT_TRANSACTION_OF_LOADING);
  const [value, setValue] = useState("");
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const onClickCharge = () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // 예: imp00000000
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011",
        name: "중고마켓 포인트 충전",
        amount: value,
        buyer_email: userInfo.email,
        buyer_name: userInfo.name,
        m_redirect_url: "http://localhost:3000/mypage/profile",
      },
      async (rsp) => {
        // callback
        if (rsp.success) {
          const result = await createpointgql({
            variables: {
              impUid: rsp.imp_uid,
            },
            refetchQueries: [
              {
                query: FETCH_USER_LOGGED_IN,
              },
            ],
          });
          console.log(result);

          //   ...,
          // 결제 성공 시 로직,
          //   ...
          // 백엔드에 결제관련 데이터 넘겨주기 (=> 즉, 뮤테이션 실행하기)
          // ex, createPointTransactionOfLoading
        } else {
          //   ...,
          // 결제 실패 시 로직,
          //   ...
          Modal.error({ content: "결제에 실패했습니다! 다시 시도해 주세요!" });
        }
      }
    );
  };

  const onChangeValue = (event) => {
    setValue(event.target.value);
  };
  const onClickMoveToLikePage = () => {
    router.push("/mypage/like");
  };
  const onClickMoveToSoldPage = () => {
    router.push("/mypage/sold");
  };
  const onClickMoveToBoughtPage = () => {
    router.push("/mypage/bought");
  };

  return (
    <S.Container>
      <Head>
        {/* <!-- jQuery --> */}
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        {/* <!-- iamport.payment.js --> */}
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <S.Wrapper>
        <S.UserInfoBox>
          <S.Email>{userInfo.email}</S.Email>
          <S.Name>{userInfo.name}</S.Name>
          <S.Points>{data?.fetchUserLoggedIn?.userPoint.amount}</S.Points>
        </S.UserInfoBox>
        <S.ChargingBox>
          <h2>포인트 충전</h2>
          <S.ChargingDetail>
            <select name="point" onChange={onChangeValue}>
              <option disabled selected>
                금액을 선택하세요~
              </option>
              <option value="100">100</option>
              <option value="1000">1000</option>
              <option value="5000">5000</option>
            </select>
            <button onClick={onClickCharge}>충전하기</button>
          </S.ChargingDetail>
        </S.ChargingBox>
      </S.Wrapper>
      <div>
        <button onClick={onClickMoveToLikePage}>찜목록</button>
        <button onClick={onClickMoveToBoughtPage}>구매목록</button>
        <button onClick={onClickMoveToSoldPage}>판매목록</button>
      </div>
    </S.Container>
  );
}
