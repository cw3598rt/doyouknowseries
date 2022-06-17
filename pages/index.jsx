import { useRouter } from "next/router";
import { useRef, useState } from "react";
import * as S from "../styles/Home.styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import { useMutation, gql, useApolloClient } from "@apollo/client";
import { useForm } from "react-hook-form";
import { accessTokenState, userInfoState } from "../src/commons/store";
import { useRecoilState } from "recoil";
const LOGIN_USER = gql`
  mutation variables($password: String!, $email: String!) {
    loginUser(password: $password, email: $email) {
      accessToken
    }
  }
`;
const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

const schema = yup.object({
  email: yup
    .string()
    // .email("이메일 형식이 적합하지 않습니다.")
    .required("필수 입력 사항입니다"),
  password: yup
    .string()
    // .matches(
    //   /^[a-zA-Z0-9+][`~₩!@#\$%\^&\*\(\)_\-=\+\{\}\[\];:'"\,\.<>/\?+]{8,16}$/,
    //   "영문, 숫자, 특수문자포함 8글자-16글자"
    // )
    .required("필수 입력 사항입니다."),
});

export default function Home() {
  const HomeRef = useRef();
  const AboutRef = useRef();
  const FeatureRef = useRef();
  const GetStartedRef = useRef();
  const BtnBoxRef = useRef();
  const router = useRouter();
  const [isOpened, setIsOpened] = useState(false);
  const [logingql] = useMutation(LOGIN_USER);
  const client = useApolloClient();
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const onMoveToHome = () => {
    HomeRef.current.scrollIntoView({ behavior: "smooth", inline: "start" });
  };
  const onMoveToAbout = () => {
    AboutRef.current.scrollIntoView({ behavior: "smooth", inline: "start" });
  };
  const onMoveToFeature = () => {
    FeatureRef.current.scrollIntoView({ behavior: "smooth", inline: "start" });
  };
  const onMoveToGetStarted = () => {
    GetStartedRef.current.scrollIntoView({
      behavior: "smooth",
      inline: "start",
    });
  };
  const onMoveToUp = () => {
    BtnBoxRef.current.scrollIntoView({
      behavior: "smooth",
      inline: "start",
    });
  };
  const onMoveToSignupPage = () => {
    router.push("/login/signup");
  };
  const onClickOpenLogin = () => {
    setIsOpened(true);
  };
  const onClickCloseLogin = () => {
    setIsOpened(false);
  };

  const onSubmitLogin = async (data) => {
    console.log(data);
    const result = await logingql({
      variables: {
        password: data.password,
        email: data.email,
      },
    });
    const Token = result.data.loginUser.accessToken;

    const resultUserInfo = await client.query({
      query: FETCH_USER_LOGGED_IN,
      context: {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      },
    });
    const user = resultUserInfo.data.fetchUserLoggedIn;
    console.log(user);
    setAccessToken(Token);
    setUserInfo(user);
    localStorage.setItem("accessToken", Token);
    localStorage.setItem("userInfo", JSON.stringify(user));
    setIsOpened(false);
    router.push("/boards/list");
  };
  return (
    <>
      <S.Wrapper>
        <div>
          <S.BtnBox ref={BtnBoxRef}>
            <S.Btns onClick={onMoveToHome}>Home</S.Btns>
            <S.Btns onClick={onMoveToAbout}>About</S.Btns>
            <S.Btns onClick={onMoveToFeature}>Features</S.Btns>
            <S.Btns onClick={onMoveToGetStarted}>Get started!</S.Btns>
          </S.BtnBox>
          <S.HomeBox ref={HomeRef}>
            <S.Home>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex vel
              tempora ratione eligendi voluptate itaque minima dolores, dolore
              quaerat adipisci at nesciunt sit aut maiores officia hic obcaecati
              repudiandae saepe.
            </S.Home>
          </S.HomeBox>
          <S.AboutBox ref={AboutRef}>
            <S.About>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Delectus, odit, officia inventore alias tenetur nam consequuntur
              sapiente itaque velit dolores beatae ducimus aliquid maiores
              voluptates at! Quasi, itaque! Praesentium, atque!
            </S.About>
          </S.AboutBox>
          <S.FeatureBox ref={FeatureRef}>
            <S.Feature>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              voluptatum provident culpa itaque quisquam? Suscipit doloremque,
              perferendis odit sunt deleniti illo nulla in minima distinctio
              voluptatem qui est illum expedita.
            </S.Feature>
          </S.FeatureBox>
          <S.StartedBox ref={GetStartedRef}>
            <S.IntroandBtn>
              <S.Intro>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam ducimus, doloribus veniam fuga, enim, possimus ut
                assumenda pariatur ratione porro maiores! Corrupti, alias!
                Laboriosam labore in modi, iure excepturi omnis.
              </S.Intro>
              <S.ButtonsBox>
                <S.SpecialBtn onClick={onMoveToSignupPage}>
                  Get Started!
                </S.SpecialBtn>
                <S.SpecialBtn onClick={onClickOpenLogin}>Log-in</S.SpecialBtn>
              </S.ButtonsBox>
              {isOpened && (
                <S.LoginBox>
                  <S.CloseBtn onClick={onClickCloseLogin} />
                  <S.Form onSubmit={handleSubmit(onSubmitLogin)}>
                    <S.EmailBox>
                      <S.EmaliLabel htmlFor="email">email</S.EmaliLabel>
                      <S.EmailInput
                        type="text"
                        name="email"
                        {...register("email")}
                      />
                      <S.Error>{formState.errors.email?.message}</S.Error>
                    </S.EmailBox>
                    <S.PasswordBox>
                      <S.PasswordLabel htmlFor="password">
                        비밀번호
                      </S.PasswordLabel>
                      <S.PasswordInput
                        type="password"
                        name="password"
                        {...register("password")}
                      />
                      <S.Error>{formState.errors.password?.message}</S.Error>
                    </S.PasswordBox>
                    <S.LoginBtn>로그인</S.LoginBtn>
                  </S.Form>
                </S.LoginBox>
              )}
            </S.IntroandBtn>
            <div></div>
          </S.StartedBox>
        </div>
        <div>
          <S.GoBack onClick={onMoveToUp} />
        </div>
      </S.Wrapper>
    </>
  );
}
