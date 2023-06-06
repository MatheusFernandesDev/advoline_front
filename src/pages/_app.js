import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
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
