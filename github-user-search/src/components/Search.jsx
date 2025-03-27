import React, { useState } from "react";
import fetchUserData from "../services/githubService";

const Search = ({ onSearch }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [minRepo, setMinRepo] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const searchParams = {
      username: name.trim() || null,
      location: location.trim() || null,
      repos: minRepo.trim() ? `>${minRepo.trim()}` : null,
    };

    try {
      const users = await fetchUserData(searchParams);
      if (!users || users.length === 0) {
        setError("Looks like we cant find the user"); // **Ensure exact match**
        setData([]);
      } else {
        setData(users);
        onSearch && onSearch(users);
      }
    } catch (err) {
      setError("Looks like we cant find the user"); // **Ensure exact match**
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-4 max-w-lg mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h1 className="text-xl mb-4">Search GitHub Users</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter GitHub username..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter preferred location..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        />
        <input
          type="number"
          value={minRepo}
          onChange={(e) => setMinRepo(e.target.value)}
          placeholder="Enter minimum repositories number..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        />
        <button
          type="submit"
          className="px-5 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center font-bold">Loading...</p>}

      {/* Ensure this message exists when no users are found */}
      {error && <p className="text-red-500 text-center font-bold">{error}</p>}

      {data.length > 0 && (
        <div className="mt-6">
          {data.map((user) => (
            <div key={user.id} className="p-4 border rounded-lg mb-4">
              <div className="flex items-center space-x-4">
                <img
                  src={user.avatar_url}
                  alt={`${user.login}'s avatar`}
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
      )}
    </div>
  );
};

export default Search;
