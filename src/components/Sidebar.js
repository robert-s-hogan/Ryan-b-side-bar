import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // Arrow icons

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white h-screen p-5 flex flex-col items-start transition-all duration-300 ${
          isOpen ? "w-64" : "w-16"
        }`}
      >
        {/* Logo + Toggle Button */}
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <span className="text-lg font-bold">{isOpen ? "My Logo" : "🔹"}</span>

          {/* Toggle Button */}
          <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <FiChevronLeft size={24} />
            ) : (
              <FiChevronRight size={24} />
            )}
          </button>
        </div>

        {/* Sidebar Items */}
        <nav className="mt-5 w-full">
          <ul className="space-y-4">
            <li className="flex items-center space-x-2 cursor-pointer hover:text-gray-300">
              <span>🏠</span> {isOpen && <span>Dashboard</span>}
            </li>
            <li className="flex items-center space-x-2 cursor-pointer hover:text-gray-300">
              <span>⚙️</span> {isOpen && <span>Settings</span>}
            </li>
            <li className="flex items-center space-x-2 cursor-pointer hover:text-gray-300">
              <span>👤</span> {isOpen && <span>Profile</span>}
            </li>
            <li className="flex items-center space-x-2 cursor-pointer hover:text-gray-300">
              <span>🚪</span> {isOpen && <span>Logout</span>}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
