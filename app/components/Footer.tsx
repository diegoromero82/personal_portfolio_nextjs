// app/[lang]/components/Footer.tsx

import en from "../locales/en.json";
import es from "../locales/es.json";

type Props = { lang: string };

export default function Footer({ lang }: Props) {
  // Selección del objeto de traducción y datos del footer
  const t = lang === "es" ? es : en;
  const footerData = t.footerSection;

  return (
    <footer className="bg-white text-center p-4 shadow-lg border-top">
      <div className="container">
        
        {/* Título Social */}
        <p className="lead mb-3 text-muted">{footerData.social_title}</p>

        {/* Enlaces Sociales Dinámicos */}
        <div className="mb-3">
          {footerData.social_links.map((link: any) => (
            <a
              key={link.alt}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              title={link.alt}
              className="text-decoration-none text-dark mx-3"
              style={{ fontSize: "1.8rem" }}
            >
              {/* Se asume que 'bi' son clases de Bootstrap Icons */}
              <i className={link.icon_class}></i>
            </a>
          ))}
        </div>

        {/* Copyright Dinámico */}
        <p className="mb-0 text-secondary small">
          {footerData.copyright}
        </p>
      </div>
    </footer>
  );
}