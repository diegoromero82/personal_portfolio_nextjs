"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isSpanish = pathname?.startsWith("/es");
  const otherHref = isSpanish ? "/" : "/es";

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="container">
        <Link className="navbar-brand" href={isSpanish ? "/es" : "/"}>
          <img
            src="/images/logo_drs_ei.jpeg"
            className="rounded-circle"
            alt="Logo"
            height="40"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <a className="nav-link" href="#aboutme">
                {isSpanish ? "Acerca de mí" : "About Me"}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#education">
                {isSpanish ? "Educación" : "Education"}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">
                {isSpanish ? "Habilidades" : "Skills"}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                {isSpanish ? "Proyectos" : "Projects"}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#recommendations">
                {isSpanish ? "Recomendaciones" : "Recommendations"}
              </a>
            </li>

            {/* Botón de idioma */}
            <li className="nav-item ms-2">
              <Link href={otherHref} className="btn btn-outline-light">
                {isSpanish ? "EN" : "ES"}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
