"use client"
import { useEffect } from "react"

export default function Experience() {
  // Aseguramos que los estilos de animación funcionen
  useEffect(() => {
    const style = document.createElement("style")
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
        background-color: #0d6efd;
        color: white;
        transform: rotateY(180deg);
      }
    `
    document.head.appendChild(style)
  }, [])

  return (
    <section id="experience" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Work Experience</h2>
        <div className="d-flex overflow-auto flex-nowrap px-2 pb-4 gap-3">

          {/* Example 1: DNP */}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front d-flex flex-column justify-content-center p-3">
                <img src="/images/logo_dnp.jpg" alt="DNP Logo" className="img-fluid mb-2" style={{ maxHeight: "60px" }} />
                <h6 className="mb-1">Specialized Professional</h6>
                <p className="text-muted mb-1 small">Departamento Nacional de Planeación</p>
                <small className="text-muted">2024 - Present</small>
              </div>
              <div className="flip-card-back d-flex flex-column justify-content-center p-3">
                <h6>Main Functions:</h6>
                <ul className="small ps-3 mb-0 text-start">
                  <li>Development and maintenance in Java, .NET and Angular.</li>
                  <li>Database optimization (Oracle / SQL Server).</li>
                  <li>Web services integration and UX improvements.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Example 2: Aerocivil */}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front d-flex flex-column justify-content-center p-3">
                <img src="/images/logo_aerocivil.png" alt="Aerocivil Logo" className="img-fluid mb-2" style={{ maxHeight: "60px" }} />
                <h6 className="mb-1">FullStack Developer</h6>
                <p className="text-muted mb-1 small">Aeronautica Civil</p>
                <small className="text-muted">Mar 2024 – Nov 2024</small>
              </div>
              <div className="flip-card-back d-flex flex-column justify-content-center p-3">
                <h6>Main Functions:</h6>
                <ul className="small ps-3 mb-0 text-start">
                  <li>Applications development with Oracle APEX.</li>
                  <li>Migration of Excel-based systems to APEX.</li>
                  <li>User training and support.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Example 3: SDA */}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front d-flex flex-column justify-content-center p-3">
                <img src="/images/logo_sda.jpg" alt="SDA Logo" className="img-fluid mb-2" style={{ maxHeight: "60px" }} />
                <h6 className="mb-1">ICT Project Coordinator</h6>
                <p className="text-muted mb-1 small">Secretaría Distrital de Ambiente</p>
                <small className="text-muted">Feb 2021 – Jul 2024</small>
              </div>
              <div className="flip-card-back d-flex flex-column justify-content-center p-3">
                <h6>Main Functions:</h6>
                <ul className="small ps-3 mb-0 text-start">
                  <li>End-to-end ICT project management.</li>
                  <li>Supervision of contracts and budgets.</li>
                  <li>Operational coordination and support.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* TODO: Add rest of companies (Megatel, FCM, In Motion, WB, Panasonic, Belltech, etc.) 
              following the same flip-card structure */}
        </div>
      </div>
    </section>
  )
}
