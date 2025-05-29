import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx"; // Should be active
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import HomePage from "./pages/HomePage/HomePage.tsx"; // Commented out
// import BookPage from "./pages/BookPage/BookPage.tsx"; // Commented out
// import CheckoutPage from "./pages/Checkout/Checkout.tsx"; // Commented out
import { setupWorker } from "msw/browser"; // Restored
import { handlers } from "./mocks/handlers.ts"; // Restored

// Placeholder components (commented out)
// const ContactPage = () => <div>Contact Page</div>;
// const TrackingPage = () => <div>Tracking Page</div>;
// const NotFoundPage = () => <div>404 - Page Not Found</div>;

const MinimalTestPage = () => (
  <div style={{color: 'black', fontSize: '30px', textAlign: 'center', paddingTop: '50px', backgroundColor: 'lightseagreen', height: '100vh' }}>
    Minimal Test Page via Outlet!
  </div>
);

const router = createBrowserRouter([
  {
    element: <App />, // App.tsx as layout
    children: [
      {
        path: "/",
        element: <MinimalTestPage />, // Render MinimalTestPage via Outlet
      },
      // No other routes for this test
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
