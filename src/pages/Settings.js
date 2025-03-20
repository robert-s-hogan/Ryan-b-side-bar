import Button from "../components/Button";

export default function Settings() {
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-100 p-4 rounded-md">
          <h2 className="text-lg font-semibold">Account Settings</h2>
          <p>Email: user@example.com</p>
          <p className="mb-3">Notifications: Enabled</p>
          <Button
            theme="primary"
            onClick={() => alert("Updating Preferences...")}
          >
            Update Preferences
          </Button>
        </div>
        <div className="bg-gray-100 p-4 rounded-md">
          <h2 className="text-lg font-semibold">Privacy Settings</h2>
          <p>Two-Factor Authentication: Enabled</p>
          <p className="mb-3">Location Tracking: Disabled</p>
          <Button theme="primary" onClick={() => alert("Changing Settings...")}>
            Change Settings
          </Button>
        </div>
      </div>
    </div>
  );
}
