import { Link } from "react-router-dom"
import "./Header.css"

export default function Header() {
    return (
        <header className="header">
            <nav className="header__nav">
                <Link className="header__link" to="/posts">
                    all_posts
                </Link>

                <Link className="header__link" to="/">
                    home_page
                </Link>

                <Link className="header__link" to="/create_post">
                    create_post
                </Link>
            </nav>

            <div className="header__right">
                <img
                    src="/avatar.png"
                    alt="avatar"
                    className="header__avatar"
                />
                <span className="header__lang">ENG</span>
            </div>
        </header>
    )
}