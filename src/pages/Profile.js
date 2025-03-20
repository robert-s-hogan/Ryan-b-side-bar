import Button from "../components/Button";

export default function Profile() {
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-100 p-4 rounded-md">
          <h2 className="text-lg font-semibold">User Information</h2>
          <p>Name: John Doe</p>
          <p>Email: johndoe@example.com</p>
          <p>Member Since: January 2024</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-md mt-4">
          <h2 className="text-lg font-semibold">Preferences</h2>
          <p>Theme: Dark Mode</p>
          <p className="mb-3">Language: English</p>
          <Button theme="primary" onClick={() => alert("Editing Profile...")}>
            Edit Profile
          </Button>
        </div>
      </div>
    </div>
  );
}
