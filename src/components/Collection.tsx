import "./Collection.css";

const watches = [
  {
    name: "Calibre I",
    price: "CHF 18,400",
    image: "/watches/calibre-i.png",
    movement: "In-house Cal. V-01",
    power: "72-hour reserve",
    case: "40mm — Titanium",
    crystal: "Sapphire, AR-coated",
    ref: "REF. VAE-001-BLK",
  },
  {
    name: "Nocturne",
    price: "CHF 22,800",
    image: "./watches/nocturne.png",
    movement: "In-house Cal. V-02N",
    power: "96-hour reserve",
    case: "38mm — Blackened steel",
    crystal: "Domed sapphire",
    ref: "REF. VAE-002-NTR",
  },
  {
    name: "Perpétuel",
    price: "CHF 34,600",
    image: "/watches/perpetuel.png",
    movement: "In-house Cal. V-03P",
    power: "60-hour reserve",
    case: "41mm — Aged bronze",
    crystal: "Box sapphire",
    ref: "REF. VAE-003-PRP",
  },
];

const CollectionSection = () => {
  return (
    <section className="collection">
      <div className="collection-header">
        <div>
          <p className="section-number">§ 03 — Current Collection</p>
          <h2 className="collection-title">
            Three instruments.
            <br />
            <em>No concessions.</em>
          </h2>
        </div>
        <a href="#specifications" className="collection-link">
          View full specifications
        </a>
      </div>

      <ul className="watch-grid">
        {watches.map((watch) => (
          <li className="watch-card" key={watch.ref}>
            <div className="watch-image">
              <img src={watch.image} alt={watch.name} />
            </div>

            <div className="watch-info">
              <div className="watch-heading">
                <h3 className="watch-name">{watch.name}</h3>
                <p className="watch-price">{watch.price}</p>
              </div>

              <hr className="watch-divider" />

              <dl className="watch-specs">
                <div className="spec">
                  <dt className="spec-label">Movement</dt>
                  <dd className="spec-value">{watch.movement}</dd>
                </div>
                <div className="spec">
                  <dt className="spec-label">Power</dt>
                  <dd className="spec-value">{watch.power}</dd>
                </div>
                <div className="spec">
                  <dt className="spec-label">Case</dt>
                  <dd className="spec-value">{watch.case}</dd>
                </div>
                <div className="spec">
                  <dt className="spec-label">Crystal</dt>
                  <dd className="spec-value">{watch.crystal}</dd>
                </div>
              </dl>

              <p className="watch-ref">{watch.ref}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CollectionSection;
