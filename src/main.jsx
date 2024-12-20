import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Work from "./pages/Work.jsx";

import { ThemeProvider } from "./context/ThemeProvider.jsx";
import { DeviceProvider } from "./context/deviceContext.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/work",
        element: <Work />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <React.StrictMode>
      <DeviceProvider>
        <I18nextProvider i18n={i18n}>
          <RouterProvider router={router} basename="./" />
        </I18nextProvider>
      </DeviceProvider>
    </React.StrictMode>
  </ThemeProvider>
);
