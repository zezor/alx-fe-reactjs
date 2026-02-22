import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { postId } = useParams();

  return (
    <div>
      <h2>Blog Post ID: {postId}</h2>
      <p>Content for blog post {postId} will be fetched from API here.</p>
    </div>
  );
}
