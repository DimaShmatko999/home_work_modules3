import "./App.css";
import Header from "./components/header/Header";
import SidebarFilters from "./components/slide_bar/SidebarFilters";
import PostList from "./components/post_list/PostList";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="page">
      <Header />

      <div className="main">
        <SidebarFilters />

        <div className="content">
          <PostList />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;