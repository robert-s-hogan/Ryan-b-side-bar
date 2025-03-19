import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useAuth } from "../context/AuthContext";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, login, logout } = useAuth();

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
            <li className="flex items-center space-x-2 cursor-pointer hover:text-gray-300">
              <span>🏠</span> {isOpen && <span>Dashboard</span>}
            </li>
            {isAuthenticated && (
              <>
                <li className="flex items-center space-x-2 cursor-pointer hover:text-gray-300">
                  <span>⚙️</span> {isOpen && <span>Settings</span>}
                </li>
                <li className="flex items-center space-x-2 cursor-pointer hover:text-gray-300">
                  <span>👤</span> {isOpen && <span>Profile</span>}
                </li>
              </>
            )}
          </ul>
        </nav>

        {/* Login/Logout Button */}
        <button
          className="mt-auto w-full text-left flex items-center space-x-2 cursor-pointer hover:text-gray-300"
          onClick={isAuthenticated ? logout : login}
        >
          <span>🚪</span>
          {isOpen && <span>{isAuthenticated ? "Logout" : "Login"}</span>}
        </button>
      </div>
    </div>
  );
}
