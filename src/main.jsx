import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { Provider } from "@/components/ui/provider";
import {  Box } from "@chakra-ui/react";
// import { ChakraProvider } from "@chakra-ui/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider >
      <BrowserRouter>
        <Box bg="white">
          <App />
        </Box>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);