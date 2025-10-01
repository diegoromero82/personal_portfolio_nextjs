import en from "../locales/en.json";
import es from "../locales/es.json";

// Define las props para recibir el idioma
type Props = { lang: string };

export default function Skills({ lang }: Props) {
  // 1. Selecciona el objeto de traducción (t)
  const t = lang === "es" ? es : en;
  
  // 2. Accede a la data de Habilidades Técnicas
  const technicalSkills = t.skillsSection.technical;

  return (
    <section id="skills" className="container py-5">
      {/* 3. Título de la sección dinámico */}
      <h2 className="text-center mb-4">{technicalSkills.title}</h2>
      
      <div className="row g-4">
        {/* 4. Mapeo dinámico de las habilidades */}
        {technicalSkills.items.map((skill: any, index: number) => (
          <div key={index} className="col-sm-6 col-md-3">
            <div className="card h-100 shadow-sm text-center">
              <div className="p-3">
                <img
                  // Fuente de la imagen del JSON
                  src={skill.imageUrl}
                  // Texto alternativo del JSON
                  alt={skill.altText} 
                  className="img-fluid"
                  style={{ height: "80px", objectFit: "contain" }}
                />
              </div>
              <div className="card-body">
                {/* Nombre de la habilidad del JSON */}
                <h5 className="card-title">{skill.name}</h5>
                {/* Experiencia (traducida) del JSON */}
                <p className="card-text">{skill.experience}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}