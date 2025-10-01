import en from "../locales/en.json";
import es from "../locales/es.json";
import { MortarboardFill, LaptopFill } from "react-bootstrap-icons";

// Define las props para recibir el idioma
type Props = { lang: string };

// Asegúrate de que Education reciba la prop 'lang'
export default function Education({ lang }: Props) {
  // Selecciona el objeto de traducción (t)
  const t = lang === "es" ? es : en;
  
  // Accede a la data de Educación
  const education = t.education;

  return (
    <section id="education" className="container py-5">
      {/* Título de la sección */}
      <h2 className="text-center mb-4">{education.title}</h2>

      {/* Educación Formal */}
      <div className="mb-5">
        <h4 className="mb-4">
          {/* Reemplaza la i con el componente de icono */}
          <MortarboardFill className="text-primary me-2" />
          {education.formal.heading}
        </h4>
        <div className="row g-4">
          {/* Mapeo dinámico para Educación Formal */}
          {education.formal.items.map((item: any, index: number) => (
            <div key={index} className="col-md-6">
              <div className="card shadow-lg h-100">
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">
                    {/* Institución */}
                    {item.institution}
                    {/* Muestra el estado (In progress) solo si existe */}
                    {item.status && <em> — {item.status}</em>}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Educación No Formal */}
      <div>
        <h4 className="mb-4">
          {/* Reemplaza la i con el componente de icono */}
          <LaptopFill className="text-success me-2" />
          {education.nonFormal.heading}
        </h4>
        <div className="row g-3">
          {/* Mapeo dinámico para Educación No Formal */}
          {education.nonFormal.items.map((item: any, index: number) => (
            <div key={index} className="col-md-4 col-sm-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h6 className="card-title mb-1">
                    {item.title}
                  </h6>
                  <p className="card-text small text-muted">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
