import React from "react";

export default function UserCard({ user }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "1rem",
        borderRadius: "8px",
        width: "250px",
      }}
    >
      <img
        src={user.avatar_url}
        alt={user.login}
        width="80"
        style={{ borderRadius: "50%" }}
      />
      <h3>{user.login}</h3>
      <a href={user.html_url} target="_blank" rel="noreferrer">
        View Profile
      </a>
    </div>
  );
}
