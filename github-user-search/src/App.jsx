import { useState } from "react";
import { fetchUserData } from "./services/githubService";
import Search from "./components/Search";

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (username) => {
    setLoading(true);
    setError("");
    setUser(null);

    try {
      // Fetch user data using the username
      const data = await fetchUserData({ username });  // Here is the correct function call
      setUser(data); // Set the fetched user data
    } catch (err) {
      setError("Looks like we can't find the user"); // Handle errors (if any)
    } finally {
      setLoading(false); // Stop loading once the request is complete
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">GitHub User Search</h1>
      <Search onSearch={handleSearch} />  {/* Pass handleSearch to Search component */}

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {user && (
        <div className="border p-4 rounded-lg mt-4">
          <img src={user.avatar_url} alt={user.login} className="w-24 rounded-full" />
          <h2 className="text-xl">{user.name || user.login}</h2>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
            Visit Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default App;
