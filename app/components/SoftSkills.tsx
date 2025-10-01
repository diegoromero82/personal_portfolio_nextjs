import en from "../locales/en.json";
import es from "../locales/es.json";

// Define las props para recibir el idioma
type Props = { lang: string };

export default function SoftSkills({ lang }: Props) {
  // 1. Selecciona el objeto de traducción (t)
  const t = lang === "es" ? es : en;
  
  // 2. Accede a la data de Habilidades Blandas
  const softSkills = t.skillsSection.soft;

  return (
    <section id="softskills" className="container py-5">
      {/* 3. Título de la sección dinámico */}
      <h2 className="text-center mb-4">{softSkills.title}</h2>
      
      <div className="row g-4">
        {/* 4. Mapeo dinámico de las habilidades blandas */}
        {softSkills.items.map((skill: any, index: number) => (
          <div key={index} className="col-sm-6 col-md-4">
            <div className="card h-100 shadow-sm text-center">
              <div className="card-body">
                {/* Ícono dinámico usando la clase `bi-` del JSON */}
                <i
                  className={`bi bi-${skill.icon} ${skill.colorClass} fs-1 mb-3`}
                ></i>
                {/* Título de la habilidad dinámico */}
                <h5 className="card-title">{skill.title}</h5>
                {/* Descripción de la habilidad (traducida) dinámico */}
                <p className="card-text">{skill.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}