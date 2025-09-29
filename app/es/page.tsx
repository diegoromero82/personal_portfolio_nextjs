// app/es/page.tsx
export default function HomeEs() {
  return (
    <>
      {/* About Me */}
      <section id="aboutme" className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-4 text-center mb-3">
            <img
              src="https://media.licdn.com/dms/image/v2/D4E03AQERbJWr40xZOg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1688164685599?e=2147483647&v=beta&t=o9Q_UMusLYLTrFspJuE-dX9yJXIiGdACKMozuoFpLrs"
              className="rounded-circle img-fluid border border-3 border-primary"
              alt="Diego Romero"
            />
          </div>
          <div className="col-md-8">
            <h1 className="mb-3">¡Hola, soy Diego!</h1>
            <p>
              Soy un profesional en tecnología con más de 20 años de experiencia
              global en TI, telecomunicaciones, desarrollo de software, servicio
              al cliente y conectividad. Combino conocimientos técnicos con visión
              estratégica para entregar soluciones de alto impacto.
            </p>
            <ul className="list-group list-group-flush mb-3">
              <li className="list-group-item">
                <strong>Gestión de Proyectos (5+ años)</strong>: He coordinado
                proyectos de transformación digital en entidades públicas y privadas,
                aplicando metodologías PMI y marcos ágiles.
              </li>
              <li className="list-group-item">
                <strong>Desarrollo Full Stack (6+ años)</strong>: Experiencia en
                Java, .NET, JavaScript, PL/SQL y bases de datos Oracle/MS SQL Server.
                Manejo frameworks como Angular, Blazor y Oracle APEX.
              </li>
              <li className="list-group-item">
                <strong>Experiencia Comercial (10+ años)</strong>: Lideré procesos de
                ventas consultivas y gestión de cuentas en sectores industriales y
                financieros.
              </li>
            </ul>
            <p>
              Certificado como <a
                href="https://committee.iso.org/sites/jtc1sc7/home/projects/flagship-standards/iso-25000-square-series.html"
                target="_blank"
              >Auditor Interno en ISO/IEC 25000:2014 (SQuaRE)</a>.
            </p>
            <p>
              🧠 Estratégico • 🎯 Orientado a resultados • 💬 Comunicativo • 🌐 Basado en Bogotá • 🚀 Abierto a trabajo remoto
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

