import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme/theme";
import "@fontsource/shadows-into-light";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
