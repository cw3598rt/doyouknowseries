import { useRouter } from "next/router";
import HeaderUI from "./Header.presenter";

export default function Header() {
  const router = useRouter();
  const onClickMoveToMypage = () => {
    router.push("/mypage/profile");
  };
  const onClickMoveToBasket = () => {
    router.push("/mypage/basket");
  };
  return (
    <HeaderUI
      onClickMoveToMypage={onClickMoveToMypage}
      onClickMoveToBasket={onClickMoveToBasket}
    />
  );
}
