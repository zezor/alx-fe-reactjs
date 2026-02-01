// import axios from "axios";

// const githubApi = axios.create({
//   baseURL: "https://api.github.com",
//   headers: {
//     Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
//   },
// });

// // ✅ NAMED EXPORT
// export const searchUsers = async (username) => {
//   const response = await githubApi.get(`/search/users?q=${username}`);
//   return response.data.items;
// };

// // ✅ DEFAULT EXPORT
// export default githubApi;
import axios from "axios";

const githubApi = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
  },
});

export const searchUsers = async ({ username, location, minRepos, page = 1 }) => {
  let query = username;

  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>${minRepos}`;

  const response = await githubApi.get(
    `/search/users?q=${query}&page=${page}&per_page=6`
  );

  return response.data;
};

export default githubApi;
