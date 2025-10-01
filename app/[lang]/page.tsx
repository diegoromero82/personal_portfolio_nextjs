import Navbar from "../components/Navbar";
import AboutMe from "../components/AboutMe";
import Education from "../components/Education";
import Skills from "../components/Skills";
import SoftSkills from "../components/SoftSkills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

export default async function Home({ params }: { params: { lang: string } }) {
  
  const { lang } = await params;   

  return (
    <main>      
      <Navbar lang={lang} />
      <AboutMe lang={lang} />
      <Education lang={lang} />
      <Skills lang={lang} />
      <SoftSkills lang={lang} />
      <Experience lang={lang} />
      <Projects lang={lang} /> 
      <Footer lang={lang} />
    </main>
  );
}
