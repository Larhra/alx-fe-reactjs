import React, { useState } from "react";
import fetchUserData from "../services/githubService";

const Search = ({ onSearch }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [minRepo, setMinRepo] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading("Loading...");
    setError(""); // Reset error message

    try {
      const searchParams = {
        username: name.trim() || null,
        location: location.trim() || null,
        repos: minRepo.trim() ? `>${minRepo.trim()}` : null,
      };

      const users = await fetchUserData(searchParams); // Fetch user data from the service
      if (users.length === 0) {
        setError("Looks like we can't find the user");
      }
      setData(users); // Set the fetched data
    } catch (error) {
      setError("An error occurred while fetching user data.");
    } finally {
      setLoading(""); // Stop loading once the request is complete
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
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 hover:border-gray-400"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter preferred location..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 hover:border-gray-400"
        />
        <input
          type="number"
          value={minRepo}
          onChange={(e) => setMinRepo(e.target.value)}
          placeholder="Enter minimum repositories number..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 hover:border-gray-400"
        />
        <button
          type="submit"
          className="px-5 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
        >
          Search
        </button>
      </form>

      {loading && (
        <div className="mx-auto text-2xl text-center font-bold">
          <p>{loading}</p>
        </div>
      )}

      {error && (
        <div className="text-red-500 text-center font-bold">
          <p>{error}</p>
        </div>
      )}

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
