import React, { useState, useEffect } from "react";

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("about")}
              className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300"
            >
              HK
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-white/90 hover:text-white font-medium transition-colors duration-300 relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-white/90 hover:text-white font-medium transition-colors duration-300 relative group"
            >
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-white/90 hover:text-white font-medium transition-colors duration-300 relative group"
            >
              Experience
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <a
              href="/resume/Resume%20Hodaya%20Karo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 hover:text-white font-medium transition-colors duration-300 relative group"
            >
              Resume
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="mailto:hodayak3@gmail.com"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-3 animate-in slide-in-from-top">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-white/90 hover:text-white py-2 px-4 rounded-lg hover:bg-white/10 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="block w-full text-left text-white/90 hover:text-white py-2 px-4 rounded-lg hover:bg-white/10 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="block w-full text-left text-white/90 hover:text-white py-2 px-4 rounded-lg hover:bg-white/10 transition-colors"
            >
              Experience
            </button>
            <a
              href="/resume/Resume%20Hodaya%20Karo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-white/90 hover:text-white py-2 px-4 rounded-lg hover:bg-white/10 transition-colors"
            >
              Resume
            </a>
            <a
              href="mailto:hodayak3@gmail.com"
              className="block bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold py-2 px-4 rounded-lg text-center"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

