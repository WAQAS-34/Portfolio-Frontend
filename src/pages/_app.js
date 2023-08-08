
import Head from "next/head";
import "../styles/globalstyle.scss"
import Toast from "@/Component/Toast/Toast";
import { store, wrapper } from "@/store/store";
import { Provider } from "react-redux";
function App({ Component, pageProps }) {
  return (
    <>
    <Provider store={store}>
      <Head>
        <title>TECH SOLUTIONS</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.ico" />

      </Head>
      <Toast
      />

      <Component {...pageProps} />
      </Provider>
    </>
  );
}
export default wrapper.withRedux(App)