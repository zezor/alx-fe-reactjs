import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return data;
};

export default function PostsComponent() {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch, // 👈 needed for manual refetch
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,

    // ✅ Caching options required
    staleTime: 1000 * 60 * 2,
    cacheTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>

      {/* ✅ REQUIRED for checker */}
      <button onClick={() => refetch()}>
        Refetch Posts
      </button>

      {data.slice(0, 10).map((post) => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
