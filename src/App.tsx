import { useRef } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Outlet />
    </QueryClientProvider>
  );
}

export default App;
