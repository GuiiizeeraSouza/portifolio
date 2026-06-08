"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useGameScores } from "@/hooks/useGameScores";
import "./header.css";

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Projetos", href: "/projetos" },
  { label: "Experiências", href: "#experiences" },
  { label: "Tecnologias", href: "#technologies" },
  { label: "Jogo da Memória", href: "/memory" },
  { label: "Quiz", href: "/quiz" },
];

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title = "Meu App" }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const router = useRouter();
  const pathname = usePathname();
  const { scores } = useGameScores();

  const totalPoints = scores.reduce((sum, score) => sum + score.score, 0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNavClick = (href: string) => {

    setMenuOpen(false);


    if (href.startsWith("#")) {

      if (pathname !== "/") {
        router.push("/");

        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 500);
      } else {

        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {

      router.push(href);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const max =
        document.documentElement.scrollHeight - window.innerHeight || 1;
      const value = Math.min(100, Math.max(0, (window.scrollY / max) * 100));
      setProgress(value);
      if (menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  return (
    <header
      className={`header-wrapper ${mounted ? "header-mounted" : ""} ${scrolled ? "header-scrolled" : ""
        } ${menuOpen ? "menu-open" : ""}`}
    >
      <div
        className="header-overlay"
        aria-hidden
        onClick={() => setMenuOpen(false)}
      />
      <div className="header-content">
        <div className="header-brand">
          <img
            src="/MyProfilePhoto.jpg"
            alt="Foto de perfil"
            className="brand-mark"
            style={{ width: '60px', height: '55px', borderRadius: '50%' }}
          />
        </div>

        <button
          className="menu-toggle"
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`header-nav ${menuOpen ? "is-open" : ""}`}>
          <ul className="header-links">
            {navLinks.map((link) => (
              <li className="header-link-item" key={link.label}>
                <a
                  href={link.href}
                  className="header-link"
                  onClick={() => handleNavClick(link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="header-cta">
            {mounted && totalPoints > 0 && (
              <div className="header-score">
                <span className="header-score-icon">🏆</span>
                <span className="header-score-value">{totalPoints}</span>
                <span className="header-score-label">pts</span>
              </div>
            )}
            <a className="primary-btn" href="https://www.linkedin.com/in/guilherme-souza-/" target="_blank" rel="noopener noreferrer">
              <svg aria-hidden className="linkedin-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </nav>
      </div>
      <div className="header-gradient" />
      <div className="header-progress">
        <span style={{ width: `${progress}%` }} />
      </div>
    </header>
  );
};

export default Header;
