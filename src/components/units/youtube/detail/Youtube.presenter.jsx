import ReactPlayer from "react-player";
import * as S from "./Youtube.styles";
export default function YoutubeDetailUI(props) {
  return (
    <S.Wrapper>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${props.selectedVideo}`}
        controls
      />
    </S.Wrapper>
  );
}
