import UserCard from "./UserCard";

export default function UserList({ users }) {
  if (!users.length) return null;

  return (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
