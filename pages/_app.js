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
        <title>Multi-Page Form</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
