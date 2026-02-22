import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (!res.ok) throw new Error("Failed to fetch posts");

  return res.json();
};

export default function PostsComponent() {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 1000 * 60,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <button onClick={() => refetch()}>
        Refetch
      </button>

      {data.slice(0, 10).map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
