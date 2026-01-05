import "./PostList.css";
import PostCard from "./PostCard";

export default function PostList() {
  const posts = Array.from({ length: 8 }, (_, i) => 'Post ${i + 1}');

  return (
    <div className="post-list">
      {posts.map((title) => (
        <PostCard key={title} title={title} />
      ))}
    </div>
  );
}