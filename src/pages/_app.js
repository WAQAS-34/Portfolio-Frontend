
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
    // Facebook Pixel
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
  }, [])

  return (
    <>
      <Provider store={store}>
        <Head>
          {/* Global meta tags - page-specific SEO will override these */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="theme-color" content="#000000" />
          <link rel="icon" href="/favicon.ico" />
          
          {/* Preconnect to external domains for performance */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          
          {/* DNS prefetch for external resources */}
          <link rel="dns-prefetch" href="//connect.facebook.net" />
        </Head>
        
        <Toast />
        <WhatsAppIcon />
        <SocialIcon />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default wrapper.withRedux(App)