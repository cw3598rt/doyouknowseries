import BoardDetailUI from "./BoardDetail.presenter";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardDetail.query";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { Modal } from "antd";
import { useRef, useEffect } from "react";

export default function BoardDetail() {
  const DetailRef = useRef();
  const router = useRouter();
  const [likeUpgql] = useMutation(LIKE_BOARD);
  const [dislikeUpgql] = useMutation(DISLIKE_BOARD);
  const [deleteBoardgql] = useMutation(DELETE_BOARD);
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query._id,
    },
  });

  useEffect(() => {
    DetailRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);
  const onMoveToList = () => {
    router.push("/boards/list");
  };
  const onDeleteBoard = async (event) => {
    try {
      await deleteBoardgql({
        variables: { boardId: event.target.id },
      });
      Modal.success({ content: "삭제성공" });
    } catch (error) {
      Modal.error({ content: error.message });
    }
    router.push("/boards/list");
  };
  const onMoveToEdit = (event) => {
    router.push(`/boards/detail/${event.target.id}/edit`);
  };
  const onClickLike = async () => {
    try {
      await likeUpgql({
        variables: {
          boardId: router.query._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: {
              boardId: router.query._id,
            },
          },
        ],
      });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };
  const onClickDisLike = async () => {
    try {
      await dislikeUpgql({
        variables: {
          boardId: router.query._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: {
              boardId: router.query._id,
            },
          },
        ],
      });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <BoardDetailUI
      DetailRef={DetailRef}
      onClickDisLike={onClickDisLike}
      onClickLike={onClickLike}
      onMoveToEdit={onMoveToEdit}
      data={data}
      onMoveToList={onMoveToList}
      onDeleteBoard={onDeleteBoard}
    />
  );
}
