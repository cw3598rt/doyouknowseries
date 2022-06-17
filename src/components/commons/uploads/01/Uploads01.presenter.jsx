import { PlusCircleOutlined } from "@ant-design/icons";
import * as S from "./Uploads01.styles";
export default function UploadUI(props) {
  return (
    <>
      {props.fileUrl && (
        <S.Img
          onClick={props.onClickInput}
          src={`https://storage.googleapis.com/${props.fileUrl}`}
          alt="preview"
        />
      )}
      {!props.fileUrl && (
        <S.FakeImgInputs onClick={props.onClickInput}>
          <PlusCircleOutlined />
        </S.FakeImgInputs>
      )}
      <S.ImgInputs
        type="file"
        ref={props.inputFileRef}
        onChange={props.onChangeFile}
      />
    </>
  );
}
