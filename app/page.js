import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MeshGradient from "@/components/MeshGradient";

export default function HomePage() {
  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <MeshGradient />

      {/* Navigation */}
      <Navbar />

      <main id="home">
        {/* Hero - Name, title, value prop, CTAs */}
        <Hero />

        {/* Skills - Short, focused */}
        <Skills />

        {/* Projects - Architecture, metrics, impact */}
        <Projects />

        {/* Certifications - Cloud credentials */}
        <Certifications />

        {/* Experience - FAANG-style bullets */}
        <Experience />

        {/* Education - Academic background */}
        <Education />

        {/* Contact - Simple: Email, GitHub, LinkedIn, Resume */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
