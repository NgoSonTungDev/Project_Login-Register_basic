import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccountManagement from "./pages/AccountManagement/AccountManagement";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Register from "./pages/Register/Register";
import './App.scss';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/accountmanagement" element={<AccountManagement />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/not-found" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
