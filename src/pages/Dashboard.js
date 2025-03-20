import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Overview Card */}
        <div className="bg-gray-100 p-4 rounded-md shadow">
          <h2 className="text-lg font-semibold">User Overview</h2>
          <p>Welcome back, John Doe!</p>
          <p>Last login: March 19, 2025</p>
        </div>

        {/* Activity Card */}
        <div className="bg-gray-100 p-4 rounded-md shadow">
          <h2 className="text-lg font-semibold">Recent Activity</h2>
          <ul className="list-disc ml-5">
            <li>Completed Quiz: JavaScript Basics</li>
            <li>Updated Profile Settings</li>
            <li>Joined a new learning group</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="bg-gray-100 p-4 rounded-md shadow space-y-3">
          <h2 className="text-lg font-semibold">Quick Links</h2>

          <Button theme="primary" onClick={() => navigate("/quiz")}>
            Start a New Quiz
          </Button>

          <Button theme="secondary" onClick={() => navigate("/profile")}>
            Edit Profile
          </Button>

          <Button theme="primary" onClick={() => navigate("/settings")}>
            Update Settings
          </Button>
        </div>
      </div>
    </div>
  );
}
