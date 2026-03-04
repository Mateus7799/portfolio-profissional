import '../assets/css/Contato.css';

function Contato() {
  return (
    <div className="contato">
      <div className="container">
        <h1 className="page-title">Contato</h1>

        <div className="contact-card">
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Digite seu nome"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Digite seu e-mail"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensagem</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Digite sua mensagem"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contato;