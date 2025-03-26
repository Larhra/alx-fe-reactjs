import React, { useState } from "react";
import fetchUserData from "../services/githubService";

const Search = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) return;

    const userData = await fetchUserData(name);
    setData(userData);
    setName("");
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
        <button
          type="submit"
          className="px-5 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
        >
          Search
        </button>
      </form>

      {data && (
        <div className="mt-6 p-4 border rounded-lg">
          <div className="flex items-center space-x-4">
            <img
              src={data.avatar_url}
              alt={`${data.login}'s avatar`}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="text-lg font-semibold">{data.login}</h3>
              <p className="text-gray-600">{data.name || "No name provided"}</p>
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
          <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
            <div className="bg-gray-100 p-2 rounded">
              <p>Repos</p>
              <p className="font-bold">{data.public_repos}</p>
            </div>
            <div className="bg-gray-100 p-2 rounded">
              <p>Followers</p>
              <p className="font-bold">{data.followers}</p>
            </div>
            <div className="bg-gray-100 p-2 rounded">
              <p>Following</p>
              <p className="font-bold">{data.following}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;