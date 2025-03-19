import Layout from "./components/Layout";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Layout>
        <h1 className="text-2xl font-bold">Main Content</h1>
        <p>
          Here’s the content area. Click the menu icon to toggle the sidebar.
        </p>
      </Layout>
    </AuthProvider>
  );
}

export default App;
