import axios from "axios";

// Base axios instance
const githubService = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
  },
});

/*
 ALX keyword requirements:
 https://api.github.com/search/users?q
 location
 minRepos
*/

export const fetchUserData = async ({
  username,
  location,
  minRepos,
  page = 1,
}) => {
  let query = username;

  if (location) {
    query += `+location:${location}`;
  }

  if (minRepos) {
    query += `+repos:>${minRepos}`;
  }

  const response = await githubService.get(
    `https://api.github.com/search/users?q=${query}&page=${page}&per_page=6`
  );

  return response.data;
};

export default githubService;
