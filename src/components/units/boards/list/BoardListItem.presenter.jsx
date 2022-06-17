import * as S from "./BoardList.styles";
import { v4 as uuidv4 } from "uuid";

export default function BoardListItemUI(props) {
  return (
    <S.Wrapper id={props.list?._id} onClick={props.onMoveToDetail}>
      <S.TitleBox>
        {props.list?.images.every((el) => el === "") && (
          <S.Img src="../../../../../defaultimg.png" alt="thumbnail" />
        )}
        {props.list?.images
          .filter((el) => el !== "")
          .slice(0, 1)
          .map((el) => (
            <S.Img
              src={`https://storage.googleapis.com/${el}`}
              alt="thumbnail"
            />
          ))}
        <S.Title>
          {props.list?.title
            .replaceAll(props.keyword, `###${props.keyword}###`)
            .split("###")
            .map((el) => (
              <S.Searched key={uuidv4()} isSearched={props.keyword === el}>
                {el}
              </S.Searched>
            ))}
        </S.Title>
      </S.TitleBox>
      <S.WriterBox>
        <S.Writer>{props.list?.writer}</S.Writer>
        <S.Like>{props.list?.likeCount}</S.Like>
        <S.Dislike>{props.list?.dislikeCount}</S.Dislike>
        <S.Date>{props.list?.createdAt}</S.Date>
      </S.WriterBox>
    </S.Wrapper>
  );
}
