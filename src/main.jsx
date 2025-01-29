// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import { BrowserRouter } from "react-router-dom";
// import { Provider } from "@/components/ui/provider";
// import {  Box } from "@chakra-ui/react";
// // import { ChakraProvider } from "@chakra-ui/react";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <Provider>
//       <BrowserRouter>
//         <Box bg="white" >
//           <App />
//         </Box>
//       </BrowserRouter>
//     </Provider>
//   </StrictMode>
// );




import React from "react";
import { createRoot } from "react-dom/client"; // Correct import
import App from "./App";
import { Provider } from "@/components/ui/provider";

// Ensure the root element exists
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found. Make sure your HTML includes a div with id='root'.");
}

// Create the React root and render the app
createRoot(rootElement).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
