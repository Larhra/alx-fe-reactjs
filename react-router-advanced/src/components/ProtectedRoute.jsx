import { Navigate } from "react-router-dom";

// Simulated authentication function
const useAuth = () => {
    const user = localStorage.getItem("user"); // Mock authentication check
    return user ? true : false;
};

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = useAuth();

    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
