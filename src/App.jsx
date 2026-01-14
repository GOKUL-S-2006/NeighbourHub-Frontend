import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Issues from "./pages/Issues";
import AdminDashboard from "./pages/AdminDashboard";
import { isLoggedIn, isAdmin } from "./auth/auth";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/"
          element={isLoggedIn() ? <Issues /> : <Navigate to="/login" />}
        />

        <Route
          path="/admin"
          element={
            isLoggedIn() && isAdmin()
              ? <AdminDashboard />
              : <Navigate to="/" />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
