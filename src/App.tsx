import { useRef } from "react";
import "./App.css"; // This line is now active
// import Navbar from "./components/Navbar/Navbar"; // Keep commented out
import { Outlet } from "react-router-dom"; // Restored
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // Restored

const queryClient = new QueryClient(); // Restored

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <>
        <Outlet />
      </>
    </QueryClientProvider>
  );
}

export default App;
