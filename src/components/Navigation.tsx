import "./Navigation.css";

const Navigation = () => {
  return (
    <>
      <nav className="navbar">
        <p className="logo">VALE</p>
        <div className="nav-right">
          <ul className="nav-links">
            <li>
              <a href="#">Collection</a>
            </li>
            <li>
              <a href="#">Atelier</a>
            </li>
            <li>
              <a href="#">Heritage</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>

          <button className="acquire-btn">Acquire</button>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
