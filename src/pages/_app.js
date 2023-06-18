import { useEffect } from "react";
import { useRouter } from "next/router";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      NProgress.start();
    };

    const handleComplete = () => {
      NProgress.done();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, []);
  return (
    <ChakraProvider
      toastOptions={{
        defaultOptions: { position: "top-right", isClosable: true },
      }}
    >
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
