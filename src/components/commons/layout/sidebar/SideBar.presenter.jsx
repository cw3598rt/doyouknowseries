import * as S from "./SideBar.styles";

export default function SidebarUI(props) {
  return (
    <S.Wrapper>
      <S.Flag>🇰🇷</S.Flag>
      <S.Title>Do you know?</S.Title>
      <S.Divider></S.Divider>
      <S.Btns onClick={props.onMovetoHome}>홈</S.Btns>
      <S.Btns onClick={props.onMovetoYoutube}>Do you know?</S.Btns>
      <S.Btns onClick={props.onMovetoList}>게시판 목록</S.Btns>
      <S.Btns onClick={props.onMovetoNew}>게시글 작성</S.Btns>
      <S.Btns>노트장</S.Btns>
    </S.Wrapper>
  );
}
