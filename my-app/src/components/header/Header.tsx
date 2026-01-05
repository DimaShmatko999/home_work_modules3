import "./Header.css";

export default function Header() {
    return (
        <header className="header">
            <nav className="header__nav">
                <a className="header__link active" href="#">all_posts</a>
                <a className="header__link" href="#">home_page</a>
                <a className="header__link" href="#">create_post</a>
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
    );
}