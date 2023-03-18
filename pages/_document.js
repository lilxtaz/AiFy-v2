import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="./favicon.ico" />
        <script
          type="text/javascript"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-D9D8FHXVNY"
        ></script>
        <script type="text/javascript">
          {` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-D9D8FHXVNY');`}
        </script>
      </Head>
      <body>
        <div id="fb-root"></div>

        <div id="fb-customer-chat" className="fb-customerchat"></div>

        <Script strategy="lazyOnload">
          {`var chatbox = document.getElementById('fb-customer-chat');
      chatbox.setAttribute("page_id", "112444918393835");
      chatbox.setAttribute("attribution", "biz_inbox");
    `}
        </Script>
        <Script strategy="lazyOnload">
          {`window.fbAsyncInit = function() {
        FB.init({
          xfbml            : true,
          version          : 'v16.0'
        });
      };

      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));`}
              
        </Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
