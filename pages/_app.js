import Head from "next/head";
import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/general/Layout";
import { Provider } from "react-redux";
import store from "../store/store";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Multi-Page Form App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="A multi-page form app to collect info for job bounties"
        />
        <meta
          name="google-site-verification"
          content="EeNHS2n2MgRdNTw09xRKOWu_F-feKe9d6hnrSPoW49w"
        />
      </Head>
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </Provider>
    </>
  );
}

export default MyApp;
