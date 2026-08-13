import "./App.css";

function App() {
  return (
    <div className="page">
      <nav className="navbar">
        <div className="logo">
          <img src="/image/Text.png" alt="Vael Logo" />
        </div>

        <div className="nav-right">
          <ul className="nav-links">
            <li><a href="#">Collection</a></li>
            <li><a href="#">Atelier</a></li>
            <li><a href="#">Heritage</a></li>
            <li><a href="#">Contact</a></li>
          </ul>

          <button className="acquire-btn">Acquire</button>
        </div>
      </nav>
    </div>
  );
}

export default App;