import "./Navigation.css";

const Navigation = () => {
  return (
    <>
      <nav className="navbar">
        <p className="logo">VALE</p>
        <div className="nav-right">
          <ul className="nav-links">
            <li>
              <a href="#collection">Collection</a>
            </li>
            <li>
              <a href="#atelier">Atelier</a>
            </li>
            <li>
              <a href="#heritage">Heritage</a>
            </li>
            <li>
              <a href="#footer">Contact</a>
            </li>
          </ul>

          <button className="acquire-btn">Acquire</button>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
