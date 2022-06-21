import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import Head from "next/head";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../commons/store";
import { CREATE_POINT_TRANSACTION_OF_LOADING } from "./profile.query";
export default function Profile() {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [createpointgql] = useMutation(CREATE_POINT_TRANSACTION_OF_LOADING);
  const [value, setValue] = useState("");
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

  return (
    <div>
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
      <div>
        <div>
          <img />
          <span>email</span>
          <span>이름</span>
          <span>userpoint</span>
        </div>
        <div>
          <h2>포인트 충전</h2>
          <div>
            <select name="point" onChange={onChangeValue}>
              <option disabled selected>
                금액을 선택하세요~
              </option>
              <option value="100">100</option>
              <option value="1000">1000</option>
              <option value="5000">5000</option>
            </select>
            <button onClick={onClickCharge}>충전하기</button>
          </div>
        </div>
      </div>
    </div>
  );
}
