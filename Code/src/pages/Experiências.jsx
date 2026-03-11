import '../assets/css/Experiencias.css';
import { experienciasData } from "../data/experienciasData";
import { useTranslation } from "react-i18next";

function Experiencias() {

  const { t } = useTranslation();

  const experiencias = experienciasData.map(exp => ({
    ...exp,
    empresa: t(exp.empresa),
    cargo: t(exp.cargo),
    periodo: t(exp.periodo),
    descricao: t(exp.descricao)
  }));

  return (
    <div className="experiencias">
      <div className="container">

        <h1 className="page-title">{t("experiencias")}</h1>

        <div className="experience-grid">

          {experiencias.map((exp) => (

            <div key={exp.id} className="experience-card">

              <div className="experience-header">
                <h3 className="experience-company">{exp.empresa}</h3>
                <span className="experience-period">{exp.periodo}</span>
              </div>

              <h4 className="experience-role">{exp.cargo}</h4>

              <p className="experience-description">
                {exp.descricao}
              </p>

            </div>

          ))}

        </div>
      </div>
    </div>
  );
}

export default Experiencias;