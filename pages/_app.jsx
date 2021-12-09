import { IdProvider } from "@radix-ui/react-id";
import "utils//styles/global.scss";

function MyApp({ Component, pageProps }) {
  return (
    <IdProvider>
      <Component {...pageProps} />
    </IdProvider>
  );
}

export default MyApp;
