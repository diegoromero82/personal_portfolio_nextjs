// app/[lang]/components/Projects.tsx

import en from "../locales/en.json";
import es from "../locales/es.json";

type Props = { lang: string };

export default function Projects({ lang }: Props) {
  // 1. Seleccionar el objeto de traducción (t) y los datos de proyectos
  const t = lang === "es" ? es : en;
  const projectsData = t.projectsSection;

  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        {/* Título de la sección dinámico */}
        <h2 className="text-center mb-5">{projectsData.title}</h2>

        <div className="row g-4">
          
          {/* Mapeo dinámico de los proyectos */}
          {projectsData.items.map((project: any) => (
            // Usa la clase de columna dinámica (col_class) del JSON
            <div key={project.id} className={project.col_class}>
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  {/* Contenido del proyecto dinámico */}
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.text}</p>
                  
                  {/* Subtítulo de características dinámico */}
                  <h6>{projectsData.features_subtitle}</h6>
                  
                  {/* Mapeo de las características/bullets */}
                  <ul className="small text-muted">
                    {project.features.map((feature: string, idx: number) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
}