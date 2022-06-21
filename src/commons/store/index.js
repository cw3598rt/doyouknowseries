import { atom } from "recoil";

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const userInfoState = atom({
  key: "userInfoState",
  default: {
    email: "",
    name: "",
  },
});
export const clickedItemsState = atom({
  key: "clickedItemsState",
  default: [],
});
export const userLoggedWishItemsState = atom({
  key: "userLoggedWishItemsState",
  default: [],
});
