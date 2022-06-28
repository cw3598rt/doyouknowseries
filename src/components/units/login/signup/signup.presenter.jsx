import * as S from "./signup.styles";

export default function SignupUI(props) {
  return (
    <S.Wrapper>
      <S.Signup>회원가입</S.Signup>
      <S.Form onSubmit={props.handleSubmit(props.onClickSignup)}>
        <S.EmailBox>
          <S.Emalilabel htmlFor="email">email</S.Emalilabel>
          <S.Emailinput type="text" name="email" {...props.register("email")} />
        </S.EmailBox>
        <S.NameBox>
          <S.Namelabel htmlFor="name">이름</S.Namelabel>
          <S.Nameinput type="text" name="name" {...props.register("name")} />
        </S.NameBox>
        <S.PasswordBox>
          <S.Passwordlabel htmlFor="password">비밀번호</S.Passwordlabel>
          <S.Passwordinput
            type="password"
            name="password"
            {...props.register("password")}
          />
        </S.PasswordBox>
        <S.PasswordValidationBox>
          <S.PasswordValidationlabel htmlFor="passwordValidation">
            비밀번호 확인
          </S.PasswordValidationlabel>
          <S.PasswordValidationinput
            type="password"
            name="passwordValidation"
            {...props.register("password2")}
          />
        </S.PasswordValidationBox>
        <S.Signupbtn>가입하기</S.Signupbtn>
      </S.Form>
    </S.Wrapper>
  );
}
