"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useMounted } from "@/hooks/useMounted";

const NAV_LINKS = [
  { id: "home", label: "Overview" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const MOBILE_NAV_LINKS = [
  { id: "home", label: "Overview" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

// Stable underline styles - must be identical on server and client to prevent hydration mismatch
const NAV_UNDERLINE_STYLE = {
  background: "linear-gradient(90deg, #6366F1, #8B5CF6, #EC4899)",
  boxShadow: "0 0 8px rgba(99,102,241,0.5)",
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const mounted = useMounted();
  const { setTheme, resolvedTheme } = useTheme();

  // Handle scroll for navbar background glass effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Set "home" as active when at the top of the page
      if (window.scrollY < 100) {
        setActiveSection("home");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver for active section detection based on scroll position
  useEffect(() => {
    const sections = NAV_LINKS.filter(link => link.id !== "home")
      .map(link => document.getElementById(link.id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-100px 0px -50% 0px" }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id) => {
    setActiveSection(id);
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  // Use mounted check to ensure isDark is consistent between server and client
  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300`}
      style={{
        background: isScrolled ? 'var(--nav-bg)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--nav-border)' : '1px solid transparent',
        boxShadow: isScrolled ? 'var(--nav-shadow)' : 'none',
      }}
    >
      {/* Inner container for content alignment */}
      <nav className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Brand Block */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("home");
          }}
          className="flex flex-col leading-tight transition-opacity hover:opacity-80"
        >
          <span
            className="text-base md:text-lg font-semibold tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            Aruthra Sathish Kumar
          </span>
          <span
            className="text-[10px] md:text-xs tracking-wide"
            style={{ color: 'var(--text-muted)' }}
          >
            Software &amp; AI Engineering
          </span>
        </a>

        {/* Nav Links - Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="relative px-1 py-2"
              >
                {/* Link text */}
                <span
                  className="text-sm transition-colors duration-150"
                  style={{
                    color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                    fontWeight: isActive ? 500 : 400,
                  }}
                >
                  {link.label}
                </span>

                {/* Shared layout underline - indigo/violet/pink gradient */}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-0 right-0 -bottom-0.5 h-[2px] rounded-full"
                    style={NAV_UNDERLINE_STYLE}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                    aria-hidden="true"
                  />
                )}
              </button>
            );
          })}

          {/* Theme Toggle Button - Desktop */}
          {mounted && (
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="ml-2 inline-flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200 hover:scale-105"
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-default)',
              }}
            >
              {isDark ? (
                <Sun className="h-4 w-4" style={{ color: 'var(--text-secondary)' }} />
              ) : (
                <Moon className="h-4 w-4" style={{ color: 'var(--text-secondary)' }} />
              )}
            </button>
          )}
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center gap-3">
          {MOBILE_NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="relative px-1 py-2"
              >
                <span
                  className="text-sm transition-colors duration-150"
                  style={{
                    color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                    fontWeight: isActive ? 500 : 400,
                  }}
                >
                  {link.label}
                </span>

                {/* Mobile shared layout underline - indigo/violet/pink gradient */}
                {isActive && (
                  <motion.span
                    layoutId="mobile-nav-underline"
                    className="absolute left-0 right-0 -bottom-0.5 h-[2px] rounded-full"
                    style={NAV_UNDERLINE_STYLE}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                    aria-hidden="true"
                  />
                )}
              </button>
            );
          })}

          {/* Theme Toggle Button - Mobile */}
          {mounted && (
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="ml-1 inline-flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200"
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-default)',
              }}
            >
              {isDark ? (
                <Sun className="h-4 w-4" style={{ color: 'var(--text-secondary)' }} />
              ) : (
                <Moon className="h-4 w-4" style={{ color: 'var(--text-secondary)' }} />
              )}
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}
