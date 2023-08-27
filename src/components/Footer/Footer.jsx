import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <h1 className="footer-title">Rakib</h1>

        <ul className="footer-list">
          <li>
            <a href="#about" className="footer-link">
              About
            </a>
          </li>

          <li>
            <a href="#projects" className="footer-link">
              Projects
            </a>
          </li>

          <li>
            <a href="#testimonials" className="footer-link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer-social">
          <a
            href="https://www.linkedin.com/in/zannatul-ferdus-rakib-897b42224"
            className="footer-social-icon"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className="uil uil-linkedin-alt"></i>
          </a>
          <a
            href="https://www.facebook.com/zannatulf.rakib"
            className="footer-social-icon"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className="uil uil-facebook-f"></i>
          </a>
          <a
            href="https://github.com/zannatul-rakib"
            className="footer-social-icon"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className="uil uil-github-alt"></i>
          </a>
        </div>

        <span className="footer-copy">
          &#169; Rakib 2023 All right Reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
