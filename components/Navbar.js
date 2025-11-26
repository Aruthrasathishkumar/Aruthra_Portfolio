"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3"
          : "py-4"
      }`}
      style={{
        background: isScrolled ? 'rgba(12, 12, 15, 0.8)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--border-default)' : '1px solid transparent',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            href="#home"
            className="text-lg font-semibold transition-colors hover:opacity-80"
            style={{ color: 'var(--text-primary)' }}
          >
            Aruthra<span style={{ color: 'var(--accent)' }}>.</span>
          </a>

          {/* Nav Links - Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg"
                style={{ color: 'var(--text-secondary)' }}
                onMouseEnter={(e) => {
                  e.target.style.color = 'var(--text-primary)';
                  e.target.style.background = 'var(--bg-surface)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'var(--text-secondary)';
                  e.target.style.background = 'transparent';
                }}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href="#projects"
              className="px-3 py-2 text-sm font-medium"
              style={{ color: 'var(--text-secondary)' }}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="px-3 py-2 text-sm font-medium"
              style={{ color: 'var(--accent-light)' }}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
