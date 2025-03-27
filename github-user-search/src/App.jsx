import { useState } from "react";
import fetchUserData from "./services/githubService";
import Search from "./components/Search";

const App = () => {
  const [users, setUsers] = useState([]); // Store the fetched users
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (searchParams) => {
    setLoading(true);
    setError(""); // Reset error before a new search
    setUsers([]); // Reset the previous user data

    try {
      const data = await fetchUserData(searchParams); // Fetch the user data
      if (data && data.length > 0) {
        setUsers(data); // Set the fetched user data
      } else {
        setError("Looks like we can't find the user"); // No users found
      }
    } catch (err) {
      setError("Looks like we can't find the user"); // Error occurred during API call
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">GitHub User Search</h1>
      <Search onSearch={handleSearch} /> {/* Pass handleSearch to Search component */}

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>} {/* Display error message */}

      {users.length > 0 ? (
        <div className="mt-6">
          {users.map((user) => (
            <div key={user.id} className="p-4 border rounded-lg mb-4">
              <div className="flex items-center space-x-4">
                <img
                  src={user.avatar_url} // Ensure this exists in the user object
                  alt={user.login} // Ensure this exists in the user object
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="text-lg font-semibold">{user.login}</h3> {/* Display username */}
                  <a
                    href={user.html_url} // Ensure this exists in the user object
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
        <p>No users found.</p> // Fallback message when no users are found
      )}
    </div>
  );
};

export default App;
