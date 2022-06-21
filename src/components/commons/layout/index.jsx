import Banner from "./banner/Banner.container";
import Header from "./header/Header.container";
import Sidebar from "./sidebar/SideBar.container";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  top: 0px;
  left: 0px;
`;
const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 0px;
  left: 100px;
  padding-right: 7rem;
`;
const Main = styled.div`
  width: 100%;
  height: 50rem;
  padding: 1rem 2rem 1rem 2rem;
`;

const HIDDEN_HEADER = ["/", "/login/signup", "/youtube/list"];
const HIDDEN_BANNER = [
  "/",
  "/boards/new",
  "/login/signup",
  "/boards/detail",
  "/youtube/list",
  "/usedItems/new",
];
const HIDDEN_SIDEBAR = ["/", "/login/signup"];
export default function Layout(props) {
  const router = useRouter();

  const isHiddenHeader = HIDDEN_HEADER.includes(router.asPath);
  const isHiddenBanner = HIDDEN_BANNER.includes(router.asPath);
  const isHiddenSidebar = HIDDEN_SIDEBAR.includes(router.asPath);

  return (
    <Wrapper>
      {!isHiddenSidebar && <Sidebar />}
      <Box>
        {!isHiddenHeader && <Header />}
        {!isHiddenBanner && <Banner />}

        <Main>{props.children}</Main>
      </Box>
    </Wrapper>
  );
}
