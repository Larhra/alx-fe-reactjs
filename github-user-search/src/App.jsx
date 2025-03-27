import { useState } from "react";
import fetchUserData from "./services/githubService";
import Search from "./components/Search";

const App = () => {
  const [users, setUsers] = useState([]); // Store the users
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (searchParams) => {
    setLoading(true);
    setError("");
    setUsers([]); // Clear previous users

    try {
      const data = await fetchUserData(searchParams);
      setUsers(data); // Set the fetched user data
    } catch (err) {
      setError("Looks like we can't find the user"); // Error message
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">GitHub User Search</h1>
      <Search onSearch={handleSearch} /> {/* Pass handleSearch to Search component */}

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      
      {users.length > 0 ? (
        <div className="mt-6">
          {users.map((user) => (
            <div key={user.id} className="p-4 border rounded-lg mb-4">
              <div className="flex items-center space-x-4">
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="text-lg font-semibold">{user.login}</h3>
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
};

export default App;
