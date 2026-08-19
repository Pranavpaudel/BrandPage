import "./Atelier.css";

const specs = [
  { label: "Location", value: "Le Brassus, Vallée de Joux" },
  { label: "Watchmakers", value: "Eleven — full manufacture" },
  { label: "Annual output", value: "312 signed instruments" },
  { label: "Components per piece", value: "248 – 417 parts" },
];

const AtelierSection = () => {
  return (
    <section className="atelier" id="atelier">
      <div className="atelier-image">
        <img
          src="/image/movement.png"
          alt="Close-up of a VAEL watch movement being assembled"
        />
      </div>

      <div className="atelier-content">
        <p className="section-number">§ 04 — The Atelier</p>

        <h2 className="atelier-title">
          Built by
          <br />
          <em>one hand,</em>
          <br />
          start to finish.
        </h2>

        <p className="atelier-paragraph">
          Our manufacture in Le Brassus employs eleven watchmakers. Each is
          responsible for exactly one watch at a time — from raw ébauche to
          final timing certification. No assembly line. No division of labour.
          Every VAEL carries a single craftsperson's identity.
        </p>

        <dl className="atelier-specs">
          {specs.map((spec) => (
            <div className="atelier-spec-row" key={spec.label}>
              <dt className="spec-label">{spec.label}</dt>
              <dd className="spec-value">{spec.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default AtelierSection;
