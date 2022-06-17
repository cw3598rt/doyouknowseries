import SignupUI from "./signup.presenter";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "./signup.query";
import { useForm } from "react-hook-form";
import { userInfoState } from "../../../../commons/store";
import { useRecoilState } from "recoil";
import { Modal } from "antd";

export default function Signup() {
  const [createUsergql] = useMutation(CREATE_USER);
  const { register, handleSubmit } = useForm();
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const onClickSignup = async (data) => {
    console.log(data);
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
