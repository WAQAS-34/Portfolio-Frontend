
import Head from "next/head";
import "../styles/globalstyle.scss"
import Toast from "@/Component/Toast/Toast";
import { store, wrapper } from "@/store/store";
import { Provider } from "react-redux";
import { useEffect } from "react";
import WhatsAppIcon from "@/Component/WhatsUpFloatingIcon/WhatsUpFloatingIcon";
import SocialIcon from "@/Component/SocialIcon/SocialIcon";
function App({ Component, pageProps }) {
  useEffect(() => {
    // <script>s
    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return; n = f.fbq = function () {
        n.callMethod ?
        n.callMethod.apply(n, arguments) : n.queue.push(arguments)
      };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
      n.queue = []; t = b.createElement(e); t.async = !0;
      t.src = v; s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s)
    }(window, document, 'script',
      'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '372162275272968');
    fbq('track', 'PageView');
    {/* </script> */ }

  }, [])

  return (
    <>
      <Provider store={store}>
        <Head>
          <title>Dev Pixel Solutions</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <link rel="icon" href="/favicon.ico" />

        </Head>
        <Toast
        />
          <WhatsAppIcon />
          <SocialIcon />

        <Component {...pageProps} />
      </Provider>
    </>
  );
}
export default wrapper.withRedux(App)