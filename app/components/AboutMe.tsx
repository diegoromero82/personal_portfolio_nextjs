import en from "../locales/en.json";
import es from "../locales/es.json";
import { EnvelopeFill, Linkedin, Github } from "react-bootstrap-icons";

// Definición de las propiedades del componente
type Props = { lang: string };

export default function AboutMe({ lang }: Props) {
  
    // 1. Selecciona el objeto de traducción (t)
  const t = lang === "es" ? es : en;

  // 2. Desestructuración para acceso limpio a las nuevas secciones  
  const keySkills = t.skills.keySkills;
  const certification = t.skills.certification;
  const personalTraits = t.skills.traits;

  return (
    <section id="aboutme" className="container py-5">
      <div className="row align-items-center">
        
        {/* Imagen de perfil */}
        <div className="col-md-4 text-center mb-3">
          <img
            src="https://media.licdn.com/dms/image/v2/D4E03AQERbJWr40xZOg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1688164685599?e=2147483647&v=beta&t=o9Q_UMusLYLTrFspJuE-dX9yJXIiGdACKMozuoFpLrs"
            className="rounded-circle img-fluid border border-3 border-primary shadow"
            alt="Diego Romero"
          />
        </div>

        {/* Texto y experiencia */}
        <div className="col-md-8">
          <h1 className="mb-3">{t.about.title}</h1>
          <p>
            {t.about.description}
          </p>

          {/* Highlights */}
          <ul className="list-group list-group-flush mb-3">
            {/* 3. Mapeo dinámico del array keySkills */}
            {keySkills.map((skill: any, index: number) => (
              <li key={index} className="list-group-item">                
                <strong>{skill.title}</strong>: {skill.description}
              </li>
            ))}
          </ul>

          {/* Certificación */}
          <p>
            {/* 4. Usamos certification.text y certification.link */}
            {certification.text.split(" ").slice(0, 2).join(" ")} {/* "Certified in" / "Certificado en" */}
            <a
              href={certification.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {certification.text.split(" ").slice(2).join(" ")} {/* "ISO/IEC 25000:2014 (SQuaRE)" */}
            </a>
            .
          </p>
          
          {/* Rasgos Personales */}
          <p>
            {/* 5. Usamos la cadena de texto de personalTraits */}
            {personalTraits}
          </p>

          {/* Contacto (Se mantiene estático) */}
          <div className="d-flex gap-3 mt-3">
            {/* ... Resto de los enlaces de contacto ... */}
            <a
              href="mailto:diego.romero82@gmail.com"
              className="btn btn-outline-primary rounded-circle"
              title="Email"
            >
              <EnvelopeFill size={20} />
            </a>
            <a
              href="https://linkedin.com/in/diegoromero01"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary rounded-circle"
              title="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/diegoromero82"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-dark rounded-circle"
              title="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

