import * as S from "./Banner.style";
import Slider from "react-slick";

export default function BannerUI() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: true,
    centerMode: true,
    className: "center",
    centerPadding: "350px",
    arrows: false,
  };
  return (
    <S.Wrapper>
      <Slider {...settings}>
        <div>
          <S.Imgs
            src="../../../../../doyouknow.jpeg"
            alt="doyouknowcollection"
          />
        </div>
        <div>
          <S.Imgs
            src="../../../../../doyouknow1.jpeg"
            alt="doyouknowcollection"
          />
        </div>
        <div>
          <S.Imgs
            src="../../../../../doyouknow2.jpeg"
            alt="doyouknowcollection"
          />
        </div>
        <div>
          <S.Imgs
            src="../../../../../doyouknow3.png"
            alt="doyouknowcollection"
          />
        </div>
        <div>
          <S.Imgs
            src="../../../../../doyouknow4.jpeg"
            alt="doyouknowcollection"
          />
        </div>
        <div>
          <S.Imgs
            src="../../../../../doyouknow5.png"
            alt="doyouknowcollection"
          />
        </div>
      </Slider>
    </S.Wrapper>
  );
}
