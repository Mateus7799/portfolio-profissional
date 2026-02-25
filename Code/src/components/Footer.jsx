import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="contact-info">
            <h3>Contato</h3>
            <p>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=peuaze@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
              >
                peuaze@gmail.com
                 </a>
            </p>
            <p>
              <a href="https://wa.me/5531992903740" target="_blank" rel="noopener noreferrer">
                +55 (31) 99290-3740
              </a>
            </p>
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