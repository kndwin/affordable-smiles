import "utils/styles/global.scss";

import { useEffect } from "react";
import { useRouter } from "next/router";
import { IdProvider } from "@radix-ui/react-id";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init("321794219896522");
        ReactPixel.pageView();

        router.events.on("routeChangeComplete", () => {
          ReactPixel.pageView();
        });
      });
  }, [router.events]);

  return (
    <IdProvider>
      <Component {...pageProps} />
    </IdProvider>
  );
}

export default MyApp;
