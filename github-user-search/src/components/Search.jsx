import { useState } from "react";

function Search({ onSearch, users = [], loading = false }) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(username);
  };

  return (
    <div>
      {/* SEARCH FORM */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search GitHub user"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {/* LOADING STATE */}
      {loading && <p>Loading</p>}

      {/* EMPTY STATE */}
      {!loading && users.length === 0 && (
        <p>Looks like we cant find the user</p>
      )}

      {/* RESULTS */}
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <img src={user.avatar_url} alt={user.login} />
            <p>{user.login}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
