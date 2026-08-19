import { useState } from "react";
import "./Footer.css";

const FooterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle subscribe
  };

  return (
    <footer className="site-footer" id="footer">
      <div className="newsletter">
        <div className="newsletter-content">
          <p className="section-number">§ 05 — Correspondence</p>
          <h2 className="newsletter-title">
            The VAEL
            <br />
            <em>Letter</em>
          </h2>
          <p className="newsletter-paragraph">
            Quarterly. Printed. Mailed to collectors. Essays on mechanical
            horology, interviews with our watchmakers, and advance notice of new
            limited pieces before public announcement.
          </p>
        </div>

        <div className="newsletter-form-wrap">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              id="email"
              type="email"
              placeholder="your@address.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="newsletter-input"
              required
            />
            <button type="submit" className="newsletter-submit">
              Subscribe
            </button>
          </form>
          <p className="form-fineprint">
            Print only. No spam. Unsubscribe at any time.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-logo">VAEL</p>
        <p className="footer-copyright">
          © 2026 VAEL Horlogerie SA — Le Brassus, Switzerland
        </p>
        <nav className="footer-nav">
          <a href="#privacy">Privacy</a>
          <a href="#legal">Legal</a>
          <a href="#dealers">Dealers</a>
          <a href="#servicing">Servicing</a>
        </nav>
      </div>
    </footer>
  );
};

export default FooterSection;
