import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx"; // Should be active
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import HomePage from "./pages/HomePage/HomePage.tsx"; // Commented out
// import BookPage from "./pages/BookPage/BookPage.tsx"; // Commented out
// import CheckoutPage from "./pages/Checkout/Checkout.tsx"; // Commented out
// import { setupWorker } from "msw/browser";
// import { handlers } from "./mocks/handlers.ts";

// Placeholder components (commented out)
// const ContactPage = () => <div>Contact Page</div>;
// const TrackingPage = () => <div>Tracking Page</div>;
// const NotFoundPage = () => <div>404 - Page Not Found</div>;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Render the imported App component directly
  },
]);

// const server = setupWorker(...handlers);
// server.start();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
