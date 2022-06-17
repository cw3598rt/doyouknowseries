import * as S from "./Youtube.list.styles";

export default function YoutubeListItem(props) {
  return (
    <S.Box onClick={props.onClickVideo} id={props.video.id.videoId}>
      <S.Imgs src={props.video.snippet.thumbnails.high.url} alt="thumbnail" />
      <S.Title>{props.video.snippet.title}</S.Title>
      <S.Channel>{props.video.snippet.channelTitle}</S.Channel>
    </S.Box>
  );
}
