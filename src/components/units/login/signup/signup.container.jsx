import SignupUI from "./signup.presenter";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "./signup.query";
import { useForm } from "react-hook-form";
import { userInfoState } from "../../../../commons/store";
import { useRecoilState } from "recoil";
import { Modal } from "antd";
import { useRouter } from "next/router";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const schema = yup.object({
  email: yup
    .string()
    .matches(
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
      "이메일 아이디를 @까지 정확하게 입력해주세요."
    )
    .required("이메일 아이디를 @까지 정확하게 입력해주세요."),
  password: yup
    .string()
    .matches(
      /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/,
      "영문+숫자 조합 8~16자리의 비밀번호를 입력해주세요."
    )
    .required("영문+숫자 조합 8~16자리의 비밀번호를 입력해주세요."),
  password2: yup
    .string()
    .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다.")
    .required("영문+숫자 조합 8~16자리의 비밀번호를 입력해주세요."),
  name: yup.string().required("필수 입력 사항입니다."),
});

export default function Signup() {
  const router = useRouter();
  const [createUsergql] = useMutation(CREATE_USER);
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const onClickSignup = async (data) => {
    try {
      const result = await createUsergql({
        variables: {
          createUserInput: {
            email: data.email,
            password: data.password,
            name: data.name,
          },
        },
      });
      Modal.success({ content: "가입을 축하합니다." });
      setUserInfo(result.data?.createUser);
      router.push("/");
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <SignupUI
      onClickSignup={onClickSignup}
      handleSubmit={handleSubmit}
      register={register}
    />
  );
}
