import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="contact-info">
            <h3>Contato</h3>
            <p>seuemail@exemplo.com</p>
            <p>+55 (00) 1234-5678</p>
          </div>
          <div className="social-links">
            <h3>Redes Sociais</h3>
            <div className="social-icons">
              <a href="#" className="social-link" aria-label="LinkedIn">LinkedIn</a>
              <a href="#" className="social-link" aria-label="GitHub">GitHub</a>
              <a href="#" className="social-link" aria-label="Twitter">Twitter</a>
            </div>
          </div>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;
