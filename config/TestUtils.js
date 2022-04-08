import { ChakraProvider } from "@chakra-ui/react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store/store";
import { theme } from "../styles/theme";

const AllProviders = ({ children }) => {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </Provider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllProviders, ...options });

export * from "@testing-library/react";

export { customRender as render };
