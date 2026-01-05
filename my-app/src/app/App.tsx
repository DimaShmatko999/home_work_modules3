import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "../layout/Layout"
import HomePage from "../pages/home/HomePage"
import PostsPage from "../pages/posts/PostsPage"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="posts" element={<PostsPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App