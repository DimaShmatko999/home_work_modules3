import { useEffect, useState } from "react"
import PostCard from "./PostCard"
import SidebarFilters from "../slide_bar/SidebarFilters"
import "./PostList.css"
import { POSTS } from "../../data/posts"

const PostList = () => {
    const [searchValue, setSearchValue] = useState("")
    const [selectedTags, setSelectedTags] = useState<number[]>([])
    const [likesMinimumValue, setLikesMinimumValue] = useState(0)

    const [filteredPosts, setFilteredPosts] = useState(POSTS)

    useEffect(() => {
        let foundPosts = POSTS.filter(post =>
            post.title.toLowerCase().includes(searchValue.toLowerCase())
        )

      foundPosts = foundPosts.filter(
          post => post.likes >= likesMinimumValue
      )

      if (selectedTags.length > 0) {
          foundPosts = foundPosts.filter(post =>
              selectedTags.every(tagId =>
                  post.tags.some(tag => tag.id === tagId)
          )
        )
      }

      setFilteredPosts(foundPosts)
    }, [searchValue, selectedTags, likesMinimumValue])

    return (
        <div className="postList">
            <SidebarFilters
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
            likesMinimumValue={likesMinimumValue}
            setLikesMinimumValue={setLikesMinimumValue}
        />

        <div className="content">
            {filteredPosts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
        </div>
        </div>
    )
}

export default PostList