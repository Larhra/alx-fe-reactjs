import axios from "axios";

const BASE_URL = "https://api.github.com/search/users";

export default async function fetchUserData({ username, location, repos }) {
  try {
    let query = [];

    if (username) query.push(`${username} in:login`);
    if (location) query.push(`location:${location}`);
    if (repos) query.push(`repos:${repos}`);

    if (query.length === 0) {
      throw new Error("At least one search parameter is required.");
    }

    const url = `${BASE_URL}?q=${query.join("+")}`;
    const res = await axios.get(url);

    if (!res.data.items || res.data.items.length === 0) {
      throw new Error("No users found matching your search criteria.");
    }

    return res.data.items;
  } catch (error) {
    if (error.response?.status === 403) {
      throw new Error("GitHub API rate limit exceeded. Please try again later.");
    }
    throw new Error(error.response?.data?.message || error.message || "Failed to fetch user data");
  }
}

// ["https://api.github.com/search/users?q", "minRepos"]