"use client";
import { useEffect } from "react";
import en from "../locales/en.json";
import es from "../locales/es.json";

// Definición de props
type Props = { lang: string };

export default function Experience({ lang }: Props) {
  // 1. Selección del objeto de traducción (t) y datos
  const t = lang === "es" ? es : en;
  const experienceData = t.experienceSection;

  // 2. Estilos CSS para la tarjeta flip
  // Usamos useEffect para inyectar los estilos CSS específicos de la animación.
  useEffect(() => {
    const styleId = "flip-card-styles";
    if (document.getElementById(styleId)) return;

    const style = document.createElement("style");
    style.id = styleId;
    style.innerHTML = `
      .flip-card {
        background-color: transparent;
        width: 280px;
        height: 250px;
        perspective: 1000px;
        flex: 0 0 auto;
      }
      .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.8s;
        transform-style: preserve-3d;
      }
      .flip-card:hover .flip-card-inner {
        transform: rotateY(180deg);
      }
      .flip-card-front, .flip-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        border-radius: 0.5rem;
      }
      .flip-card-front {
        background-color: #fff;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      }
      .flip-card-back {
        background-color: #0d6efd; /* bg-primary */
        color: white;
        transform: rotateY(180deg);
      }
    `;
    document.head.appendChild(style);
    
    // Cleanup function para evitar duplicados si el componente se desmonta
    return () => {
        const existingStyle = document.getElementById(styleId);
        if (existingStyle) {
            document.head.removeChild(existingStyle);
        }
    };
  }, []);

  return (
    <section id="experience" className="py-5 bg-light">
      <div className="container">
        {/* Título dinámico de la sección */}
        <h2 className="text-center mb-5">{experienceData.title}</h2>

        {/* Contenedor de las tarjetas con scroll horizontal (overflow-auto) */}
        <div className="d-flex overflow-auto flex-nowrap px-2 pb-4 gap-3">

          {/* Mapeo de la experiencia laboral */}
          {experienceData.items.map((job: any) => (
            <div key={job.id} className="flip-card">
              <div className="flip-card-inner">

                {/* Cara Frontal (Información Principal) */}
                <div className="flip-card-front d-flex flex-column justify-content-center p-3">
                  <img
                    src={job.logoUrl}
                    alt={job.logoAlt}
                    className="img-fluid mb-2"
                    style={{ maxHeight: "60px" }}
                  />
                  <h6 className="mb-1">{job.jobTitle}</h6>
                  <p className="text-muted mb-1 small">{job.company}</p>
                  <small className="text-muted">{job.dates}</small>
                </div>

                {/* Cara Trasera (Responsabilidades) */}
                <div className="flip-card-back d-flex flex-column justify-content-center p-3">
                  <h6>{experienceData.responsibilities_title}</h6>
                  <ul className="small ps-3 mb-0 text-start">
                    {/* Mapeo de las responsabilidades */}
                    {job.responsibilities.map((resp: string, idx: number) => (
                      <li key={idx}>{resp}</li>
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
