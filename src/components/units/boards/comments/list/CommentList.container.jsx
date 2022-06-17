import CommentListUI from "./CommentList.presenter";
import { useMutation, useQuery } from "@apollo/client";
import {
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
} from "./CommentList.query";
import { useState } from "react";
import { useRouter } from "next/router";

export default function CommentList() {
  const router = useRouter();
  const [checkingpassword, setCheckingpassword] = useState();
  const [commentId, setCommentId] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [deleteCommentgql] = useMutation(DELETE_BOARD_COMMENT);
  const { data, fetchMore } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: router.query._id,
    },
  });
  const loadFunc = () => {
    if (!data) return;
    fetchMore({
      variables: { page: Math.ceil(data.fetchBoardComments.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoardComments)
          return { fetchBoardComments: [...prev.fetchBoardComments] };

        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };
  const onDeleteComment = async () => {
    await deleteCommentgql({
      variables: {
        password: checkingpassword,
        boardCommentId: commentId,
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
  const onCheckPassword = (event) => {
    setCheckingpassword(event.target.value);
  };
  const showModal = (event) => {
    setIsModalVisible(true);
    setCommentId(event.currentTarget.id);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    onDeleteComment();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <CommentListUI
      loadFunc={loadFunc}
      onCheckPassword={onCheckPassword}
      isModalVisible={isModalVisible}
      handleCancel={handleCancel}
      handleOk={handleOk}
      showModal={showModal}
      data={data}
      onDeleteComment={onDeleteComment}
    />
  );
}
