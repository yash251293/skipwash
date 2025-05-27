import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.tsx";
import BookPage from "./pages/BookPage/BookPage.tsx";
import { setupWorker } from "msw/browser";
import { handlers } from "./mocks/handlers.ts";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/home",
        children: [{ path: ":scrollTo", element: <HomePage /> }],
      },
      { path: "/book", element: <BookPage /> },
    ],
  },
]);

const server = setupWorker(...handlers);
server.start();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
