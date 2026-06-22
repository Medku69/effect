import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavigationProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Navigation({ onScrollTo }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Hero");

  const handleNavClick = (sectionId: string, tabName: string) => {
    setActiveTab(tabName);
    onScrollTo(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <nav
      id="main-navigation"
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between p-4 sm:p-5"
    >
      {/* Left: Logo & Wordmark */}
      <div 
        id="nav-logo-group" 
        className="flex items-center gap-3 cursor-pointer select-none"
        onClick={() => handleNavClick("hero-section", "Hero")}
      >
        <svg
          id="lithos-logo-svg"
          width="26"
          height="26"
          viewBox="0 0 256 256"
          fill="#ffffff"
          className="hover:rotate-12 transition-transform duration-300"
        >
          <path d="M 256 256 L 128 256 L 0 128 L 128 128 Z M 256 128 L 128 128 L 0 0 L 128 0 Z" />
        </svg>
      </div>

      {/* Center Pill (Desktop only) */}
      <div
        id="desktop-nav-pill"
        className="hidden md:flex absolute left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-3 py-2 items-center gap-2"
      >
        <button
          id="nav-item-hero"
          onClick={() => handleNavClick("hero-section", "Hero")}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
            activeTab === "Hero"
              ? "text-white bg-white/30 backdrop-blur-sm"
              : "text-white/80 hover:bg-white/20 hover:text-white"
          }`}
        >
          Нүүр
        </button>

        <button
          id="nav-item-about-achluun"
          onClick={() => handleNavClick("about-section", "About")}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
            activeTab === "About"
              ? "text-white bg-emerald-500/30 backdrop-blur-sm border border-emerald-500/30"
              : "text-white/80 hover:bg-white/20 hover:text-white"
          }`}
        >
          Ачлуун
        </button>
        
        <button
          id="nav-item-contact"
          onClick={() => handleNavClick("contact-section", "Contact")}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
            activeTab === "Contact"
              ? "text-white bg-orange-500/30 backdrop-blur-sm border border-orange-500/30"
              : "text-white/80 hover:bg-white/20 hover:text-white"
          }`}
        >
          Холбоо барих
        </button>
      </div>

      {/* Right (desktop only) */}
      <div id="desktop-nav-right" className="hidden md:flex items-center gap-3">
      </div>

      {/* Mobile Hamburger Icon */}
      <button
        id="mobile-menu-toggle"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden flex items-center justify-center text-white bg-white/10 hover:bg-white/20 active:scale-95 p-2 rounded-full border border-white/20 transition-all pointer-events-auto"
        aria-label="Toggle Menu"
      >
        {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Dropdown Expandable Navigation Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-dropdown-menu"
          className="absolute top-full left-4 right-4 mt-3 bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl p-5 flex flex-col gap-4 shadow-2xl z-[150] md:hidden"
        >
          <div className="flex flex-col gap-1">
            <span className="text-white/40 text-xs font-semibold tracking-wider uppercase mb-2 pl-3">
              Цэс
            </span>
            <button
              id="mobile-nav-hero"
              onClick={() => handleNavClick("hero-section", "Hero")}
              className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center justify-between ${
                activeTab === "Hero"
                  ? "bg-white/15 text-white"
                  : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
            >
              Нүүр хуудас
            </button>
            <button
              id="mobile-nav-about"
              onClick={() => handleNavClick("about-section", "About")}
              className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center justify-between ${
                activeTab === "About"
                  ? "bg-emerald-500/20 text-emerald-300"
                  : "text-emerald-300/80 hover:bg-white/5"
              }`}
            >
              Ачлууны тухай
              <ArrowUpRight size={14} className="opacity-60" />
            </button>
            <button
              id="mobile-nav-contact"
              onClick={() => handleNavClick("contact-section", "Contact")}
              className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center justify-between ${
                activeTab === "Contact"
                  ? "bg-orange-500/20 text-orange-300"
                  : "text-orange-300/80 hover:bg-white/5"
              }`}
            >
              Холбоо барих
              <ArrowUpRight size={14} className="opacity-60" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
