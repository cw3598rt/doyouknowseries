import YoutubeListItem from "./Youtube.item.presenter";
import { v4 } from "uuid";
import * as S from "./Youtube.list.styles";
import YoutubeDetail from "../detail/Youtube.container";

export default function YoutubeUI(props) {
  return (
    <>
      <S.SearchBigBox>
        <span>
          추천 검색어: 한국, 손흥민, 싸이, 김치, 코리아, korea, 박지성, 김연아
        </span>
        <div>
          <S.SeacrhBar
            ref={props.SearchRef}
            type="search"
            placeholder="보고싶은 영상 검색"
            onChange={props.onSearchVideo}
          />
          <button onClick={props.onChangeList}>검색하기</button>
        </div>
      </S.SearchBigBox>
      <S.Wrapper>
        {!props.isSelected &&
          props.koreaVideo?.map((video) => (
            <YoutubeListItem
              key={v4()}
              video={video}
              onClickVideo={props.onClickVideo}
              selectedVideo={props.selectedVideo}
              isSelected={props.isSelected}
            />
          ))}
        {props.isSelected && (
          <S.SelectedWrapper>
            <YoutubeDetail selectedVideo={props.selectedVideo} />
            <S.List>
              {props.koreaVideo
                ?.filter((video) => props.selectedVideo !== video.id.videoId)
                .map((video) => (
                  <YoutubeListItem
                    key={v4()}
                    video={video}
                    onClickVideo={props.onClickVideo}
                    selectedVideo={props.selectedVideo}
                    isSelected={props.isSelected}
                  />
                ))}
            </S.List>
          </S.SelectedWrapper>
        )}
      </S.Wrapper>
    </>
  );
}
