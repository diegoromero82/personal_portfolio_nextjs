import en from "../locales/en.json";
import es from "../locales/es.json";

// Importa el hook para navegación en Next.js (si lo necesitas)
// import { useRouter } from 'next/router'; 

type Props = { lang: string };

// Usamos el 'use client' si este componente maneja clicks o estado (como el idioma)
// "use client"; 

export default function Navbar({ lang }: Props) {
  // const router = useRouter(); // Inicializa el router si lo usas
  const t = lang === "es" ? es : en;
  const navbarData = t.navbar;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="container">
        {/* Logo/Brand (No traducido) */}
        <a className="navbar-brand" href="#aboutme">
          <img 
            src="/images/logo_drs_ei.jpeg" 
            className="rounded-circle" 
            alt="Logo" 
            height="40" 
          />
        </a>
        
        {/* Toggler button (No traducido) */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            {/* Mapeo dinámico de enlaces */}
            {navbarData.links.map((link: any, index: number) => (
              <li key={index} className="nav-item">
                <a className="nav-link" href={link.href}>
                  {link.text}
                </a>
              </li>
            ))}

            {/* Selector de idioma dinámico */}
            <a 
              className="btn btn-outline-light ms-2" 
              href={navbarData.language_selector.href}
              // Opcional: onClick={() => router.push(navbarData.language_selector.href)}
            >
              <span className={`${navbarData.language_selector.flag_class} me-1`}></span> 
              {navbarData.language_selector.button_text}
            </a>

          </ul>
        </div>
      </div>
    </nav>
  );
}