import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useSelector((state) => state.auth);

  console.log(isAuthenticated, loading);

  // Wait until auth check finishes
  if (loading) {
    return <div>Loading...</div>;
  }

  // If not logged in
  if (!isAuthenticated) {
    return <Navigate to="/login" replace/>;
  }

  // If logged in
  return children;
};

export default ProtectedRoute;
