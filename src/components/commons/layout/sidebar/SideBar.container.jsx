import SidebarUI from "./SideBar.presenter";
import { useRouter } from "next/router";
export default function Sidebar() {
  const router = useRouter();
  const onMovetoHome = () => {
    router.push("/");
  };
  const onMovetoList = () => {
    router.push("/boards/list");
  };
  const onMovetoNew = () => {
    router.push("/boards/new");
  };
  const onMovetoYoutube = () => {
    router.push("/youtube/list");
  };
  const onMovetoMarket = () => {
    router.push("/usedItems/list");
  };
  const onMovetoSell = () => {
    router.push("/usedItems/new");
  };

  return (
    <SidebarUI
      onMovetoYoutube={onMovetoYoutube}
      onMovetoHome={onMovetoHome}
      onMovetoList={onMovetoList}
      onMovetoNew={onMovetoNew}
      onMovetoMarket={onMovetoMarket}
      onMovetoSell={onMovetoSell}
    />
  );
}
