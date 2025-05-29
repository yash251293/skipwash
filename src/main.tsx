import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import HomePage from "./pages/HomePage/HomePage.tsx";
// import BookPage from "./pages/BookPage/BookPage.tsx";
// import CheckoutPage from "./pages/Checkout/Checkout.tsx";
// import { setupWorker } from "msw/browser";
// import { handlers } from "./mocks/handlers.ts";

// Placeholder components (commented out)
// const ContactPage = () => <div>Contact Page</div>;
// const TrackingPage = () => <div>Tracking Page</div>;
// const NotFoundPage = () => <div>404 - Page Not Found</div>;

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div style={{color: 'black', fontSize: '24px', textAlign: 'center', paddingTop: '40px', backgroundColor: 'lightcoral', height: '100vh'}}>
        Direct inline element in main.tsx router - It Works!
      </div>
    ),
  },
]);

// const server = setupWorker(...handlers);
// server.start();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
