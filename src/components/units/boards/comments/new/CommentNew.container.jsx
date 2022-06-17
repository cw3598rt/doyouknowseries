import CommentNewUI from "./CommentNew.presenter";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD_COMMENT, UPDATE_BOARD_COMMENT } from "./CommentNew.query";
import { FETCH_BOARD_COMMENTS } from "../list/CommentList.query";
import { useRouter } from "next/router";

export default function CommentNew(props) {
  const [value, setValue] = useState(0);
  const router = useRouter();
  const [updateCommentgql] = useMutation(UPDATE_BOARD_COMMENT);
  const [createCommentgql] = useMutation(CREATE_BOARD_COMMENT);
  const [inputs, setInputs] = useState({
    writer: "",
    password: "",
    contents: "",
  });
  const onChangeInputs = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };
  const onCreateComment = async () => {
    await createCommentgql({
      variables: {
        boardId: router.query._id,
        createBoardCommentInput: {
          writer: inputs.writer,
          password: inputs.password,
          contents: inputs.contents,
          rating: value,
        },
      },
      refetchQueries: [
        {
          query: FETCH_BOARD_COMMENTS,
          variables: {
            boardId: router.query._id,
          },
        },
      ],
    });
  };

  const onUpdateComment = async () => {
    const updateBoardCommentInput = {};
    if (inputs.contents) updateBoardCommentInput.contents = inputs.contents;
    if (value) updateBoardCommentInput.rating = value;
    await updateCommentgql({
      variables: {
        password: inputs.password,
        boardCommentId: props.list?._id,
        updateBoardCommentInput,
      },
      refetchQueries: [
        {
          query: FETCH_BOARD_COMMENTS,
          variables: {
            boardId: router.query._id,
          },
        },
      ],
    });
    props.setIsEdit(false);
  };
  return (
    <CommentNewUI
      list={props.list}
      isEdit={props.isEdit}
      onUpdateComment={onUpdateComment}
      inputs={inputs}
      setValue={setValue}
      value={value}
      onChangeInputs={onChangeInputs}
      onCreateComment={onCreateComment}
    />
  );
}
