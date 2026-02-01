// import { useState } from "react";

// export default function SearchBar({ onSearch }) {
//   const [username, setUsername] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!username.trim()) return;
//     onSearch(username);
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{ marginBottom: "1.5rem" }}>
//       <input
//         type="text"
//         placeholder="Search GitHub username..."
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         style={{ padding: "0.6rem", width: "250px" }}
//       />
//       <button style={{ marginLeft: "0.5rem", padding: "0.6rem" }}>
//         Search
//       </button>
//     </form>
//   );
// }

import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ username, location, minRepos });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md mb-6 grid gap-4 md:grid-cols-4"
    >
      <input
        type="text"
        placeholder="Username"
        className="border p-2 rounded"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Location (e.g. Ghana)"
        className="border p-2 rounded"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <input
        type="number"
        placeholder="Min Repos"
        className="border p-2 rounded"
        value={minRepos}
        onChange={(e) => setMinRepos(e.target.value)}
      />

      <button
        className="bg-black text-white rounded px-4 py-2 hover:bg-gray-800"
      >
        Search
      </button>
    </form>
  );
}
