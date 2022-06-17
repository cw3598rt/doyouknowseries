import * as S from "./CommentList.styles";
import { Rate } from "antd";
import { Modal } from "antd";
import { useState } from "react";
import CommentNew from "../new/CommentNew.container";
export default function CommentListItemtUI(props) {
  const [isEdit, setIsEdit] = useState(false);

  const onOpenUpdate = () => {
    setIsEdit(true);
  };

  return (
    <>
      {props.isModalVisible && (
        <Modal
          title="비밀번호 확인"
          visible={true}
          onOk={props.handleOk}
          onCancel={props.handleCancel}
        >
          <input
            type="password"
            placeholder="비밀번호를 입력해 주세요"
            onChange={props.onCheckPassword}
          />
        </Modal>
      )}
      {!isEdit && (
        <S.Box>
          <S.InfoBox>
            <S.Profile />
            <S.WriterBox>
              <S.Writer>{props.list?.writer}</S.Writer>
              <Rate value={props.list?.rating} />
            </S.WriterBox>
            <S.ContentsBox>
              <S.Contents>{props.list?.contents}</S.Contents>
              <S.Date>{props.list?.createdAt}</S.Date>
            </S.ContentsBox>
          </S.InfoBox>
          <S.BtnBox>
            <S.UpdateBtn onClick={onOpenUpdate} />
            <S.DeleteBtn id={props.list?._id} onClick={props.showModal} />
          </S.BtnBox>
        </S.Box>
      )}
      {isEdit && (
        <CommentNew isEdit={isEdit} list={props.list} setIsEdit={setIsEdit} />
      )}
    </>
  );
}
