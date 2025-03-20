import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useAuth } from "../context/AuthContext";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, login, logout } = useAuth();
  const navigate = useNavigate();

  const handleAuthClick = () => {
    if (isAuthenticated) {
      logout();
      navigate("/login");
    } else {
      login();
      navigate("/");
    }
  };

  return (
    <div className="flex">
      <div
        className={`bg-gray-800 text-white h-screen p-5 flex flex-col items-start transition-all duration-300 ${
          isOpen ? "w-64" : "w-16"
        }`}
      >
        <div className="flex items-center justify-between w-full">
          <span className="text-lg font-bold">{isOpen ? "My Logo" : "🔹"}</span>

          <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <FiChevronLeft size={24} />
            ) : (
              <FiChevronRight size={24} />
            )}
          </button>
        </div>

        <nav className="mt-5 w-full">
          <ul className="space-y-4">
            {isAuthenticated && (
              <>
                <li>
                  <Link
                    to="/"
                    className="flex items-center space-x-2 hover:text-gray-300"
                  >
                    <span>🏠</span> {isOpen && <span>Dashboard</span>}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/settings"
                    className="flex items-center space-x-2 hover:text-gray-300"
                  >
                    <span>⚙️</span> {isOpen && <span>Settings</span>}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/profile"
                    className="flex items-center space-x-2 hover:text-gray-300"
                  >
                    <span>👤</span> {isOpen && <span>Profile</span>}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/quiz"
                    className="flex items-center space-x-2 hover:text-gray-300"
                  >
                    <span>📝</span> {isOpen && <span>Quiz</span>}
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>

        <button
          className="mt-auto w-full text-left flex items-center space-x-2 cursor-pointer hover:text-gray-300"
          onClick={handleAuthClick}
        >
          <span>🚪</span>
          {isOpen && <span>{isAuthenticated ? "Logout" : "Login"}</span>}
        </button>
      </div>
    </div>
  );
}
