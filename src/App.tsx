import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import DashBoard from "./pages/DashBoard";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  );
}
