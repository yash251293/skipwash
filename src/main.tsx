import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx"; // Should be active
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.tsx"; // Restored
import BookPage from "./pages/BookPage/BookPage.tsx"; // Restored
import CheckoutPage from "./pages/Checkout/Checkout.tsx"; // Re-enabled
import { setupWorker } from "msw/browser"; // Restored
import { handlers } from "./mocks/handlers.ts"; // Restored

// Placeholder components
// const ContactPage = () => <div>Contact Page</div>; // Old definition removed/replaced
// const TrackingPage = () => <div>Tracking Page</div>; // Old definition removed/replaced
const NewContactComponent = () => <div style={{backgroundColor: 'lightyellow', padding: '20px'}}>New Contact Page Test - V1</div>;
const NewTrackingComponent = () => <div style={{backgroundColor: 'lightcyan', padding: '20px'}}>New Tracking Page Test - V1</div>;
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
      { path: "/contact", element: <NewContactComponent /> }, // Use new component
      { path: "/tracking", element: <NewTrackingComponent /> },// Use new component
      { path: "/checkout", element: <CheckoutPage /> },
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
