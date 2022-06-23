import {
  ApolloLink,
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../commons/store";
import { onError } from "@apollo/client/link/error";
import { getAccessToken } from "../../../commons/libararies/getAccessToken";

export default function ApolloSetting(props) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  useEffect(() => {
    // const Token = localStorage.getItem("accessToken");
    // setAccessToken(Token || "");
    getAccessToken().then((Token) => {
      setAccessToken(Token);
    });
    const userInfo = JSON.parse(localStorage.getItem("userInfo") || "[]");
    setUserInfo(userInfo || "");
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions.code === "UNAUTHENTICATED") {
          getAccessToken().then((Token) => {
            setAccessToken(Token);
            operation.setContext({
              headers: {
                ...operation.getContext().headers,
                Authorization: `Bearer ${Token}`,
              },
            });
            return forward(operation);
          });
        }
      }
    }
  });
  const uploadLink = createUploadLink({
    uri: "https://backend07.codebootcamp.co.kr/graphql",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: "include",
  });
  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: new InMemoryCache(),
  });
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
