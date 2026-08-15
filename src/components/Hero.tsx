import "./Hero.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="estd-info">§ 01 — Est. Geneva, 2009</p>

        <h1 className="hero-title">
          Time, <em>distilled.</em>
        </h1>

        <hr className="hero-divider" />

        <p className="hero-paragraph">
          VAEL builds mechanical watches for those who understand that precision
          is not a feature — it is a philosophy. Each instrument is assembled by
          a single watchmaker, from first component to final regulation.
        </p>

        <dl className="hero-stats">
          <div className="stat">
            <dt className="stat-value">312</dt>
            <dd className="stat-label">
              Pieces
              <br />
              Annually
            </dd>
          </div>
          <div className="stat">
            <dt className="stat-value">14</dt>
            <dd className="stat-label">
              Years in
              <br />
              Manufacture
            </dd>
          </div>
          <div className="stat">
            <dt className="stat-value">0.8s</dt>
            <dd className="stat-label">
              Daily
              <br />
              Deviation
            </dd>
          </div>
        </dl>
      </div>

      <div className="hero-image">
        <img src="./watch.jpg" alt="Close-up of a VAEL mechanical watch face" />
      </div>
    </section>
  );
};
export default HeroSection;
