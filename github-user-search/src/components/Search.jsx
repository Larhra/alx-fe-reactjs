import React, { useState } from "react";
import fetchUserData from "../services/githubService"; // Import the API function

const Search = () => {
  const [name, setName] = useState(""); // State for username input
  const [loading, setLoading] = useState(false); // State for loading status
  const [error, setError] = useState(""); // State for error messages
  const [data, setData] = useState(null); // State for storing fetched user data

  // Handle form submission
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(""); // Reset any previous error

    try {
      const user = await fetchUserData(name); // Fetch user data from GitHub
      setData(user); // Store fetched user data
    } catch (error) {
      setError("Looks like we can't find the user"); // Error handling
      setData(null); // Reset user data on error
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
          onChange={(e) => setName(e.target.value)} // Handle input change
          placeholder="Enter GitHub username..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        />
        <button
          type="submit"
          className="px-5 py-2 bg-blue-500 text-white rounded-md"
        >
          Search
        </button>
      </form>

      {/* Conditional rendering based on loading, error, or user data */}
      {loading && (
        <div className="mx-auto text-2xl text-center font-bold">
          <p>Loading...</p>
        </div>
      )}

      {error && (
        <div className="mx-auto text-2xl text-center font-bold text-red-500">
          <p>{error}</p>
        </div>
      )}

      {data && !loading && (
        <div className="mt-6">
          <div className="p-4 border rounded-lg mb-4">
            <div className="flex items-center space-x-4">
              <img
                src={data.avatar_url}
                alt={`${data.login}'s avatar`}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="text-lg font-semibold">{data.login}</h3>
                <a
                  href={data.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
