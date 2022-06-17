import * as S from "./Uploads02.styles";

export default function Uploads02UI(props) {
  return (
    <>
      {props.fileUrl && (
        <S.Img
          src={`https://storage.googleapis.com/${props.fileUrl}`}
          alt="preview"
          onClick={props.onClickInput}
        />
      )}
      {!props.fileUrl && <S.FakeInputs onClick={props.onClickInput} />}

      <S.RealInputs
        type="file"
        multiple
        {...props.register{"images"}}
        // ref={props.inputFileRef}
        // onChange={props.onChangeFile}
      />
    </>
  );
}
