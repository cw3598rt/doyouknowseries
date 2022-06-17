import * as S from "./BoardNew.styles";
import { Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";
import { v4 } from "uuid";
import Upload from "../../../commons/uploads/01/Uploads01.container";
export default function BoardCreateUI(props) {
  return (
    <S.Box ref={props.WriteRef}>
      {props.isModalVisible && (
        <Modal
          title="주소검색"
          visible={true}
          onOk={props.handleOk}
          onCancel={props.handleCancel}
        >
          <DaumPostcodeEmbed onComplete={props.handleComplete} />
        </Modal>
      )}
      <S.Head>{props.isEdit ? "게시물 수정" : "게시물 작성"}</S.Head>
      <S.Divider></S.Divider>
      <S.TitleBox>
        <S.Title>제목</S.Title>
        <S.TitleInput
          type="text"
          name="title"
          onChange={props.onChangeInputs}
          defaultValue={props.defaultData?.fetchBoard?.title}
        />
      </S.TitleBox>
      <S.ContentsBox>
        <S.ContentsLabel>내용</S.ContentsLabel>
        <S.TextInput
          name="contents"
          onChange={props.onChangeInputs}
          defaultValue={props.defaultData?.fetchBoard?.contents}
        />
      </S.ContentsBox>
      <S.YoutubeBox>
        <S.Youtubelabel>유튜브</S.Youtubelabel>
        <S.YoutubeInput
          type="text"
          name="youtubeUrl"
          onChange={props.onChangeInputs}
        />
      </S.YoutubeBox>
      <S.ImgBox>
        <S.Imglabel>이미지</S.Imglabel>
        <S.Imgs>
          {props.imgurl.map((el, index) => (
            <Upload
              key={v4()}
              index={index}
              onChangeFileUrls={props.onChangeFileUrls}
              fileUrl={el}
            />
          ))}
        </S.Imgs>
      </S.ImgBox>
      <S.AddressBox>
        <S.PostCode>우편번호</S.PostCode>
        <S.SearchBox>
          <S.ZipCode
            type="text"
            name="zipcode"
            value={
              props.address.zonecode ||
              props.defaultData?.fetchBoard?.boardAddress?.zipcode
            }
            readOnly
          />
          <S.SearchBtn onClick={props.showModal}>검색</S.SearchBtn>
        </S.SearchBox>
        <S.AddressContainer>
          <S.AddressLabel>주소</S.AddressLabel>
          <S.AddressInputs
            type="text"
            name="address"
            value={
              props.address.address ||
              props.defaultData?.fetchBoard?.boardAddress?.address
            }
          />
        </S.AddressContainer>
        <S.DetailAddressBox>
          <S.DetailAddressLabel>상세주소</S.DetailAddressLabel>
          <S.DetailAddressInputs
            type="text"
            name="addressDetail"
            onChange={props.onChangeInputs}
            defaultValue={props.defaultData?.fetchBoard?.addressDetail}
          />
        </S.DetailAddressBox>
      </S.AddressBox>
      <S.WriterandPasswordBox>
        <S.WriterBox>
          <S.Writer>작성자</S.Writer>
          <S.WriterInput
            type="text"
            name="writer"
            onChange={props.onChangeInputs}
            defaultValue={props.defaultData?.fetchBoard?.writer}
          />
        </S.WriterBox>
        <S.PasswordBox>
          <S.Password>비밀번호</S.Password>
          <S.PasswordInput
            type="password"
            name="password"
            onChange={props.onChangeInputs}
          />
        </S.PasswordBox>
      </S.WriterandPasswordBox>
      <S.BTNBox>
        <S.EnrollBtn
          isActive={props.isActive}
          onClick={props.isEdit ? props.onUpdateBoard : props.onCreateBoard}
        >
          {props.isEdit ? "수정" : "등록"}
        </S.EnrollBtn>
        <S.CancelBtn onClick={props.onMoveToList}>취소</S.CancelBtn>
      </S.BTNBox>
    </S.Box>
  );
}
