

import axios from "axios";

const githubService = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
  },
});

export const fetchUserData = async (query, page = 1) => {
  const response = await githubService.get(
    `/search/users?q=${query}&page=${page}&per_page=6`
  );
  return response.data;
};

export default githubService;
