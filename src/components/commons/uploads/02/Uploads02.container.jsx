import Uploads02UI from "./Uploads02.presenter";
import { UPLOAD_FILE } from "./Uploads02.query";
import { useMutation } from "@apollo/client";
import { useRef } from "react";
import { Modal } from "antd";
export default function Uploads02(props) {
  const [uploadFilegql] = useMutation(UPLOAD_FILE);
  const inputFileRef = useRef();
  const onClickInput = () => {
    inputFileRef.current.click();
  };
  const checkValidationImage = (file) => {
    if (!file?.size) {
      Modal.error({ content: "파일이 없습니다." });
      return false;
    }
    if (file.size > 5 * 1024 * 1024) {
      Modal.error({ content: "파일이 너무 큽니다.(제한:5MB)" });
    }
    if (!file.type.includes("png") && !file.type.includes("jpeg")) {
      Modal.error({
        content: "파일 확장자가 올바르지 않습니다.(png,jpeg만 가능)",
      });
      return false;
    }
    return file;
  };
  const onChangeFile = async (event) => {
    const file = checkValidationImage(event.target.files?.[0]);

    if (!file) return;
    const result = await uploadFilegql({
      variables: {
        file: file,
      },
    });
    console.log(result.data.uploadFile.url);
    props.onChangeFileUrls(result.data.uploadFile.url, props.index);
  };

  return (
    <Uploads02UI
      onChangeFile={onChangeFile}
      inputFileRef={inputFileRef}
      onClickInput={onClickInput}
      fileUrl={props.fileUrl}
    />
  );
}
