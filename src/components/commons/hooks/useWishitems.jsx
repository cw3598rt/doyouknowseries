import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { getDate } from "../../../commons/libararies/utils";
import { userLoggedWishItemsState } from "../../../commons/store";

export default function useWishItems() {
  const [wishedItems, setWishedItems] = useRecoilState(
    userLoggedWishItemsState
  );
  useEffect(() => {
    const today = new Date();
    const modifiedDate = getDate(today);
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");

    const todayWishedItems = baskets.filter(
      (basket) => basket.date === modifiedDate
    );
    setWishedItems(todayWishedItems);
  }, []);
}
