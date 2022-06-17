import BoardCreateUI from "./BoardNew.presenter";
import { useRouter } from "next/router";
import { useState, useRef } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardNew.query";
import { Modal } from "antd";
import { useEffect } from "react";

export default function BoardCreate(props) {
  const WriteRef = useRef();
  const router = useRouter();
  const [createBoardgql] = useMutation(CREATE_BOARD);
  const [updateBoardgql] = useMutation(UPDATE_BOARD);
  const [isActive, setIsActive] = useState(false);
  const [address, setAddress] = useState({});
  const [imgurl, setImgurl] = useState(["", "", ""]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [inputs, setInputs] = useState({
    writer: "",
    password: "",
    title: "",
    contents: "",
    youtubeUrl: "",
    addressDetail: "",
  });

  useEffect(() => {
    WriteRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);
  const onChangeInputs = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
    if (
      event.target.value &&
      inputs.password &&
      inputs.title &&
      inputs.contents
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
    if (
      inputs.writer &&
      event.target.value &&
      inputs.title &&
      inputs.contents
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
    if (
      inputs.writer &&
      inputs.password &&
      event.target.value &&
      inputs.contents
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
    if (
      inputs.writer &&
      inputs.password &&
      inputs.title &&
      event.target.value
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const handleComplete = (data) => {
    setAddress(data);
    setIsModalVisible(false);
  };
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onCreateBoard = async () => {
    if (!inputs.writer) Modal.warning({ content: "작성자를 입력해주세요" });
    if (!inputs.password) Modal.warning({ content: "비밀번호를 입력해주세요" });
    if (!inputs.title) Modal.warning({ content: "제목을 입력해주세요" });
    if (!inputs.contents) Modal.warning({ content: "내용을 입력해주세요" });
    if (inputs.writer && inputs.password && inputs.contents && inputs.title) {
      try {
        const result = await createBoardgql({
          variables: {
            createBoardInput: {
              writer: inputs.writer,
              password: inputs.password,
              title: inputs.title,
              contents: inputs.contents,
              youtubeUrl: inputs.youtubeUrl,
              boardAddress: {
                zipcode: address.zonecode || "",
                address: address.address || "",
                addressDetail: inputs.addressDetail,
              },
              images: imgurl,
            },
          },
        });
        Modal.success({ content: "게시물 등록 완료" });
        router.push(`/boards/detail/${result.data?.createBoard._id}`);
      } catch (error) {
        Modal.error({ content: error.message });
      }
    }
  };
  const onMoveToList = () => {
    router.push("/boards/list");
  };

  const onUpdateBoard = async () => {
    const updateBoardInput = {};
    if (inputs.title) updateBoardInput.title = inputs.title;
    if (inputs.contents) updateBoardInput.contents = inputs.contents;
    if (inputs.title !== "" || inputs.contents !== "") {
      try {
        const result = await updateBoardgql({
          variables: {
            password: inputs.password,
            boardId: router.query._id,
            updateBoardInput: updateBoardInput,
          },
        });
        Modal.success({ content: "게시물 등록 완료" });
        router.push(`/boards/detail/${result.data?.updateBoard._id}`);
      } catch (error) {
        Modal.error({ content: error.message });
      }
    }
  };
  const onChangeFileUrls = (fileUrl, index) => {
    const newFileUrls = [...imgurl];
    newFileUrls[index] = fileUrl;
    setImgurl(newFileUrls);
  };
  useEffect(() => {
    if (props.defaultData?.fetchBoard.images?.length) {
      setImgurl([...props.defaultData?.fetchBoard.images]);
    }
  }, [props.defaultData]);

  return (
    <BoardCreateUI
      WriteRef={WriteRef}
      onChangeFileUrls={onChangeFileUrls}
      onUpdateBoard={onUpdateBoard}
      defaultData={props.defaultData}
      isEdit={props.isEdit}
      imgurl={imgurl}
      address={address}
      isActive={isActive}
      onMoveToList={onMoveToList}
      onCreateBoard={onCreateBoard}
      onChangeInputs={onChangeInputs}
      isModalVisible={isModalVisible}
      handleOk={handleOk}
      handleCancel={handleCancel}
      showModal={showModal}
      handleComplete={handleComplete}
    />
  );
}
