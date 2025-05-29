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

// Placeholder components (commented out as part of old router)
// const ContactPage = () => <div>Contact Page</div>;
// const TrackingPage = () => <div>Tracking Page</div>;
// const NotFoundPage = () => <div>404 - Page Not Found</div>;

const MinimalTestPage = () => (
  <div style={{color: 'black', fontSize: '30px', textAlign: 'center', paddingTop: '50px', backgroundColor: 'lightgreen', height: '100vh' }}>
    Minimal Test Page - It Works!
  </div>
);

// const router = createBrowserRouter([
//   {
//     element: <App />,
//     children: [
//       { path: "/", element: <HomePage /> },
//       {
//         path: "/home",
//         children: [{ path: ":scrollTo", element: <HomePage /> }],
//       },
//       { path: "/book", element: <BookPage /> },
//       { path: "/contact", element: <ContactPage /> },
//       { path: "/tracking", element: <TrackingPage /> },
//       { path: "/checkout", element: <CheckoutPage /> },
//       { path: "*", element: <NotFoundPage /> },
//     ],
//   },
// ]);

const minimalRouter = createBrowserRouter([
  {
    path: "/",
    element: <MinimalTestPage />,
  },
]);

// const server = setupWorker(...handlers);
// server.start();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={minimalRouter} />
  </StrictMode>
);
