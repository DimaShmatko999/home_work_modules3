import "./SidebarFilters.css";

export default function SidebarFilters() {
  return (
    <aside className="sidebar">
      <label>Пошук постів:</label>
      <div className="sidebar__row">
        <span className="icon">🔍</span>
        <input type="text" placeholder="Пошук постів" />
      </div>

      <label>Фільтри пошуку:</label>
      <div className="sidebar__row">
        <span className="icon">⚙️</span>
        <input type="text" placeholder="Фільтри" />
      </div>

      <button>Шукати</button>
    </aside>
  );
}