import UploadUI from "./Uploads01.presenter";
import { useMutation } from "@apollo/client";
import { UPLOAD_FILE } from "./Uploads01.query";
import { useRef } from "react";
export default function Upload(props) {
  const [uploadFilegql] = useMutation(UPLOAD_FILE);
  const inputFileRef = useRef();

  const onChangeFile = async (event) => {
    const file = checkValidationImage(event.target.files?.[0]);
    if (!file) return;

    const result = await uploadFilegql({
      variables: {
        file: file,
      },
    });
    props.onChangeFileUrls(result.data.uploadFile.url, props.index);
  };
  const checkValidationImage = (file) => {
    if (!file?.size) {
      Modal.error({ content: "파일이 없습니다." });
      return false;
    }
    if (file.size > 5 * 1024 * 1024) {
      Modal.error({ content: "파일이 너무 큽니다.(제한: 5MB)" });
      return false;
    }
    if (!file.type.includes("png") && !file.type.includes("jpeg")) {
      Modal.error({
        content: "파일 확장자가 올바르지 않습니다.(png, jpeg만 가능)",
      });
      return false;
    }
    return file;
  };
  const onClickInput = () => {
    inputFileRef.current.click();
  };
  return (
    <UploadUI
      onChangeFile={onChangeFile}
      fileUrl={props.fileUrl}
      inputFileRef={inputFileRef}
      onClickInput={onClickInput}
    />
  );
}
