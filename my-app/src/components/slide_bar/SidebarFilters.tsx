import "./SidebarFilters.css"
import { TAGS } from "../../data/tags"

interface Props {
searchValue: string
    setSearchValue: (v: string) => void
    selectedTags: number[]
    setSelectedTags: React.Dispatch<React.SetStateAction<number[]>>
    likesMinimumValue: number
    setLikesMinimumValue: (v: number) => void
}

const SidebarFilters = ({
    searchValue,
    setSearchValue,
    selectedTags,
    setSelectedTags,
    likesMinimumValue,
    setLikesMinimumValue,
}: Props) => {
    return (
      <aside className="sidebar">
        <input
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
          placeholder="Поиск по названию"
        />

        <div className="tags">
          {TAGS.map(tag => (
            <button
              key={tag.id}
              onClick={() =>
                setSelectedTags(prev =>
                  prev.includes(tag.id)
                    ? prev.filter(id => id !== tag.id)
                    : [...prev, tag.id]
                )
              }
              className={
                selectedTags.includes(tag.id)
                  ? "tag active"
                  : "tag"
              }
            >
              {tag.name}
            </button>
          ))}
        </div>

        <div className="likesFilter">
          <label>
            <input
              type="radio"
              checked={likesMinimumValue === 0}
              onChange={() => setLikesMinimumValue(0)}
            />
            Все
          </label>

          <label>
            <input
              type="radio"
              checked={likesMinimumValue === 10}
              onChange={() => setLikesMinimumValue(10)}
            />
            от 10
          </label>

          <label>
            <input
              type="radio"
              checked={likesMinimumValue === 50}
              onChange={() => setLikesMinimumValue(50)}
            />
            от 50
          </label>
        </div>
      </aside>
    )
}

export default SidebarFilters