import "./PostCard.css";

export default function PostCard({ title }: { title: string }) {
  return (
    <div className="post-card">
      <div className="post-card__icon">👤</div>
      <div className="post-card__title">{title}</div>
    </div>
  );
}