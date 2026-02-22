import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isAuthenticated = false; // change to true to simulate login

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
}
