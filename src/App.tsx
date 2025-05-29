import { useRef } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar"; // Will be unused, but instruction is to focus on QCP
import { Outlet } from "react-router-dom";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// const queryClient = new QueryClient();

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Outlet />
    </>
  );
}

export default App;
