import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login(); // Set authentication to true
    navigate("/"); // Redirect to the dashboard after login
  };

  return (
    <div className="p-5 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-white mb-6">Login</h1>
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md w-full max-w-lg mx-auto text-center">
        <p className="mb-4">Click below to log in.</p>
        <Button theme="primary" onClick={handleLogin}>
          Login
        </Button>
      </div>
    </div>
  );
}
