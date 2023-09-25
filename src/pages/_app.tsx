import store from "@/store";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  //configure layout for each component
  const Layout =
    (Component as any).layout ||
    (({ children }: { children: React.FC }) => children);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Provider store={store}>
        <Layout pageProps={pageProps}>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}
