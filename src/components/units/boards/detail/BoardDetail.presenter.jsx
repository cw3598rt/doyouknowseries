import { Tooltip } from "antd";
import ReactPlayer from "react-player";
import * as S from "./BoardDetail.styles";
export default function BoardDetailUI(props) {
  return (
    <S.Box ref={props.DetailRef}>
      <S.Body>
        <S.WriterBox>
          <S.Title>{props.data?.fetchBoard.title}</S.Title>
          <S.InfoBox>
            <S.Writer>{props.data?.fetchBoard.writer}</S.Writer>
            <Tooltip title={props.data?.fetchBoard.boardAddress?.address}>
              <S.Location
                src="../../../../../location_pin.png"
                alt="location"
              />
            </Tooltip>
            <S.Date>{props.data?.fetchBoard.createdAt}</S.Date>
          </S.InfoBox>
        </S.WriterBox>
        <S.Divider></S.Divider>
        <S.Main>
          <S.TextBox>
            <S.Text>{props.data?.fetchBoard.contents}</S.Text>
          </S.TextBox>
          <S.PictureBox>
            {props.data?.fetchBoard.images
              ?.filter((el) => el !== "")
              .map((img) => (
                <S.Img src={`https://storage.googleapis.com/${img}`} />
              ))}
          </S.PictureBox>
          <ReactPlayer url={props.data?.fetchBoard.youtubeUrl} />
          <S.Popularity>
            <S.LikeBox>
              <S.LikeBtn onClick={props.onClickLike} />
              <S.Like>{props.data?.fetchBoard.likeCount}</S.Like>
            </S.LikeBox>
            <S.DisLikeBox>
              <S.DisLikeBtn onClick={props.onClickDisLike} />
              <S.DisLike>{props.data?.fetchBoard.dislikeCount}</S.DisLike>
            </S.DisLikeBox>
          </S.Popularity>
        </S.Main>
      </S.Body>
      <S.BtnBox>
        <S.Btns onClick={props.onMoveToList}>목록</S.Btns>
        <S.Btns id={props.data?.fetchBoard._id} onClick={props.onMoveToEdit}>
          수정
        </S.Btns>
        <S.Btns id={props.data?.fetchBoard._id} onClick={props.onDeleteBoard}>
          삭제
        </S.Btns>
      </S.BtnBox>
    </S.Box>
  );
}
