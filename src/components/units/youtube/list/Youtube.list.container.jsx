import axios from "axios";
import { useEffect, useState, useRef } from "react";
import YoutubeUI from "./Youtube.list.presenter";

export default function Youtube() {
  const [koreaVideo, setKoreaVideo] = useState();
  const [selectedVideo, setSelectedVideo] = useState();
  const [isSelected, setIsSelected] = useState(false);
  const [searchedvideo, setSearchedvideo] = useState();
  const SearchRef = useRef();
  const onSearchVideo = (event) => {
    setSearchedvideo(event.target.value);
  };
  const onClickVideo = (event) => {
    console.log(event.currentTarget);
    setSelectedVideo(event.currentTarget.id);
    setIsSelected(true);
  };
  const onChangeList = async () => {
    const result = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?key=AIzaSyCRyqajHUtFLOPRB6m1lI3nhIlvGn8P7vc&part=snippet&maxResults=25&q=${searchedvideo}&order=viewCount`
    );
    setKoreaVideo(result.data.items);
    setIsSelected(false);
    SearchRef.current.value = "";
    SearchRef.current.focus();
  };
  useEffect(() => {
    const getKoreaInfo = async () => {
      const result = await axios.get(
        "https://www.googleapis.com/youtube/v3/search?key=AIzaSyCRyqajHUtFLOPRB6m1lI3nhIlvGn8P7vc&part=snippet&maxResults=25&q=korea&order=viewCount"
      );
      setKoreaVideo(result.data.items);
    };
    getKoreaInfo();
  }, []);
  return (
    <YoutubeUI
      SearchRef={SearchRef}
      onChangeList={onChangeList}
      onSearchVideo={onSearchVideo}
      selectedVideo={selectedVideo}
      isSelected={isSelected}
      koreaVideo={koreaVideo}
      onClickVideo={onClickVideo}
    />
  );
}
