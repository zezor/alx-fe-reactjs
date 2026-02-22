import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>

      <p>Welcome to the Advanced React Router Project.</p>

      <nav>
        <ul>
          <li>
            <Link to="/profile">Go to Profile (Protected)</Link>
          </li>

          <li>
            <Link to="/profile/details">Profile Details (Nested)</Link>
          </li>

          <li>
            <Link to="/profile/settings">Profile Settings (Nested)</Link>
          </li>

          <li>
            <Link to="/blog/1">View Blog Post 1 (Dynamic)</Link>
          </li>

          <li>
            <Link to="/blog/42">View Blog Post 42 (Dynamic)</Link>
          </li>

          <li>
            <Link to="/login">Login Page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
