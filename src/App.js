import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      {/* Main Content */}
      <div className="flex-1 p-10">
        <h1 className="text-2xl font-bold">Main Content</h1>
        <p>
          Here’s the content area. Click the menu icon to toggle the sidebar.
        </p>
      </div>
    </div>
  );
}

export default App;
