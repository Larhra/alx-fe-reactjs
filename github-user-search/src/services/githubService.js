export default async function fetchUserData(username) {
    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
  
      if (!res.ok) {
        throw new Error(`User not found (${res.status})`);
      }
  
      return await res.json();
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error;
    }
  }