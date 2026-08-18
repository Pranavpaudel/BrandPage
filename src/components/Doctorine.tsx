import "./Doctorine.css";

const Doctorine = () => {
  return (
    <section className="doctrine">
      <div className="doctrine-intro">
        <p className="section-number">§ 02</p>
        <h2 className="doctrine-title">
          The <em>Doctrine</em>
        </h2>
        <p className="doctrine-description">
          Four principles govern every decision made in the VAEL manufacture,
          from material selection to final timing adjustment.
        </p>
      </div>

      <ul className="doctrine-list">
        <li className="doctrine-item">
          <hr className="item-divider" />
          <p className="item-number">01</p>
          <h3 className="item-title">Reduction</h3>
          <p className="item-text">
            Every element present earns its place. We remove until removal
            itself would be a loss — then stop.
          </p>
        </li>
        <li className="doctrine-item">
          <hr className="item-divider" />
          <p className="item-number">02</p>
          <h3 className="item-title">Permanence</h3>
          <p className="item-text">
            We build for instruments that will outlast their owners. Trend is
            the enemy of legacy.
          </p>
        </li>
        <li className="doctrine-item">
          <hr className="item-divider" />
          <p className="item-number">03</p>
          <h3 className="item-title">Precision</h3>
          <p className="item-text">
            A tolerance of one micron is not a boast. It is the minimum
            acceptable threshold for entry.
          </p>
        </li>
        <li className="doctrine-item">
          <hr className="item-divider" />
          <p className="item-number">04</p>
          <h3 className="item-title">Restraint</h3>
          <p className="item-text">
            Ornament is not forbidden — it is earned. Surface decoration follows
            function, never precedes it.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Doctorine;
