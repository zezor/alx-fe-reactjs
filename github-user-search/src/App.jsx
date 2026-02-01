// import { useState } from "react";
// import SearchBar from "./components/SearchBar";
// import UserList from "./components/UserList";
// import { searchUsers } from "./services/githubApi";

// function App() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleSearch = async (username) => {
//     setLoading(true);
//     setError("");
//     setUsers([]);

//     try {
//       const results = await searchUsers(username);
//       setUsers(results);
//     } catch (err) {
//       setError("Failed to fetch users. Try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ padding: "2rem" }}>
//       <h1>GitHub User Search 🔍</h1>

//       <SearchBar onSearch={handleSearch} />

//       {loading && <p>Loading...</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}

//       <UserList users={users} />
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserList from "./components/UserList";
import { searchUsers } from "./services/githubApi";

function App() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (params) => {
    setLoading(true);
    setPage(1);
    setQuery(params);
    

    
    const data = await searchUsers({ ...params, page: 1 });
    setUsers(data.items);

    
    setError("Failed to fetch users. Try again.");
    
    setLoading(false);
    
  };

  const loadMore = async () => {
    const nextPage = page + 1;
    const data = await searchUsers({ ...query, page: nextPage });
    setUsers((prev) => [...prev, ...data.items]);
    setPage(nextPage);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">GitHub User Search 🔍</h1>

      <SearchBar onSearch={handleSearch} />

      {loading && <p>Loading...</p>}

      <UserList users={users} />

      {users.length > 0 && (
        <button
          onClick={loadMore}
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded"
        >
          Load More
        </button>
      )}
    </div>
  );
}

export default App;
