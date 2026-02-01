import { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserList from "./components/UserList";
import { searchUsers } from "./services/githubApi";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (username) => {
    setLoading(true);
    setError("");
    setUsers([]);

    try {
      const results = await searchUsers(username);
      setUsers(results);
    } catch (err) {
      setError("Failed to fetch users. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>GitHub User Search 🔍</h1>

      <SearchBar onSearch={handleSearch} />

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <UserList users={users} />
    </div>
  );
}

export default App;
