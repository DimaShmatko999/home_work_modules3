import { TAGS } from "./tags"

export const POSTS = [
    {
        id: 1,
        title: "Изучаем React",
        content: "React — популярная библиотека",
        likes: 12,
        tags: [TAGS[0], TAGS[2]],
    },
    {
        id: 2,
        title: "TypeScript basics",
        content: "Типизация в JS",
        likes: 5,
        tags: [TAGS[1]],
    },
    {
        id: 3,
        title: "Frontend today",
        content: "Современный фронтенд",
        likes: 55,
        tags: [TAGS[0], TAGS[1]],
    },
]