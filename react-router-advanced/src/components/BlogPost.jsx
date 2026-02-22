import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { id } = useParams();

  return (
    <div>
      <h2>Blog Post ID: {id}</h2>
      <p>Content for blog post {id} will be fetched from API here.</p>
    </div>
  );
}
