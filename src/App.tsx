import { useRef } from "react";
import "./App.css"; // This line is now active
// import Navbar from "./components/Navbar/Navbar"; // Keep commented out
import { Outlet } from "react-router-dom"; // Restored
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // Keep commented out

// const queryClient = new QueryClient(); // Keep commented out

function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
