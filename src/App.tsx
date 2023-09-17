import { BrowserRouter } from "react-router-dom";
import Auth from "./pages/Auth";
export default function App() {
  return (
    <BrowserRouter>
      <Auth/>
    </BrowserRouter>
  );
}
