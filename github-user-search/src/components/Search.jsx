import React, { useState } from "react";
import fetchUserData from "../services/githubService";

const Search = ({ onSearch }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [minRepo, setMinRepo] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); // Adding error state

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Reset error state before new search

    const searchParams = {
      username: name.trim() || null,
      location: location.trim() || null,
      repos: minRepo.trim() ? `>${minRepo.trim()}` : null,
    };

    onSearch(searchParams)
      .catch((err) => {
        // If an error occurs, set the error state
        setError("Looks like we can't find the user");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h1 className="text-xl mb-4">Search GitHub Users</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter GitHub username..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter preferred location..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          value={minRepo}
          onChange={(e) => setMinRepo(e.target.value)}
          placeholder="Enter minimum repositories number..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-5 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {loading && (
        <div className="mx-auto text-2xl text-center font-bold">
          <p>Loading...</p>
        </div>
      )}

      {error && (
        <div className="text-red-500 mx-auto text-xl text-center font-bold">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default Search;