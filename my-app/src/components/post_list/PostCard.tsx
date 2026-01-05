import "./PostCard.css"

interface Tag {
    id: number
    name: string
}

interface Post {
    id: number
    title: string
    content: string
    likes: number
    tags: Tag[]
}

const PostCard = ({ post }: { post: Post }) => {
    return (
        <div className="postCard">
            <h3>{post.title}</h3>
            <p>{post.content}</p>

            <div className="likes">
                ❤️ {post.likes}
            </div>

            <div className="tags">
                {post.tags.map(tag => (
                    <span key={tag.id} className="tag">
                        {tag.name}
                    </span>
                ))}
            </div>
        </div>
    )
}


export default PostCard