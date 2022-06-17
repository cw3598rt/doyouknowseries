import { RecoilRoot } from "recoil";

import "antd/dist/antd.css";
import { Global } from "@emotion/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "../src/components/commons/layout";
import { globalStyle } from "../src/commons/styles";
import ApolloSetting from "../src/components/commons/apollo";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <Global styles={globalStyle} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;
