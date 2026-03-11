import '../assets/css/Projetos.css';
import { useTranslation } from 'react-i18next';
import { projetosData } from '../data/projetosData';

function Projetos() {

  const { t } = useTranslation();

  return (
    <div className="projetos">
      <div className="container">

        <h1 className="page-title">{t("projetos")}</h1>

        <div className="projects-grid">

          {projetosData.map((project, index) => (
  <div key={project.id} className="project-card">
    <img src={project.imagem} alt={t(`projeto${index+1}-nome`)} className="project-image" />
    <h3 className="project-name">{t(`projeto${index+1}-nome`)}</h3>
    <p className="project-description">{t(`projeto${index+1}-descricao`)}</p>
    <div className="technologies">
      {project.tecnologias.map((tech, i) => (
        <span key={i} className="tech-tag">{tech}</span>
      ))}
    </div>
    <a href={project.link} className="github-link" target="_blank" rel="noopener noreferrer">
      {t("ver-projeto")}
    </a>
  </div>
))}

        </div>

      </div>
    </div>
  );
}

export default Projetos;