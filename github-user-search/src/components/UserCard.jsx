// import React from "react";

// export default function UserCard({ user }) {
//   return (
//     <div
//       style={{
//         border: "1px solid #ddd",
//         padding: "1rem",
//         borderRadius: "8px",
//         width: "250px",
//       }}
//     >
//       <img
//         src={user.avatar_url}
//         alt={user.login}
//         width="80"
//         style={{ borderRadius: "50%" }}
//       />
//       <h3>{user.login}</h3>
//       <a href={user.html_url} target="_blank" rel="noreferrer">
//         View Profile
//       </a>
//     </div>
//   );
// }

export default function UserCard({ user }) {
  return (
    <div className="bg-white shadow rounded p-4 text-center">
      <img
        src={user.avatar_url}
        alt={user.login}
        className="w-20 h-20 mx-auto rounded-full"
      />

      <h3 className="mt-2 font-semibold">{user.login}</h3>

      <a
        href={user.html_url}
        target="_blank"
        rel="noreferrer"
        className="text-blue-600 text-sm"
      >
        View Profile
      </a>
    </div>
  );
}
