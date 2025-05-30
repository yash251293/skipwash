import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx"; // Should be active
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.tsx"; // Restored
import BookPage from "./pages/BookPage/BookPage.tsx"; // Restored
// import CheckoutPage from "./pages/Checkout/Checkout.tsx"; // Commented out
import { setupWorker } from "msw/browser"; // Restored
import { handlers } from "./mocks/handlers.ts"; // Restored

// Placeholder components
const ContactPage = () => <div>Contact Page</div>; // Definition remains, route will be inactive
const TrackingPage = () => <div>Tracking Page</div>; // Definition remains, route will be inactive
const NotFoundPage = () => <div>404 - Page Not Found</div>; // Ensure active

// MinimalTestPage definition removed

const router = createBrowserRouter([
  {
    element: <App />, // App.tsx as layout
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/home", // If HomePage uses :scrollTo, this route is needed
        children: [{ path: ":scrollTo", element: <HomePage /> }],
      },
      { path: "/book", element: <BookPage /> },
      // { path: "/contact", element: <ContactPage /> },  // Comment out
      // { path: "/tracking", element: <TrackingPage /> },// Comment out
      // { path: "/checkout", element: <CheckoutPage /> },// Comment out
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

const server = setupWorker(...handlers); // Restored
server.start(); // Restored

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
