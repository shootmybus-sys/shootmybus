import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const NAV_ITEMS = [
  { id: "home", label: "Home", to: "/" },
  { id: "service", label: "Services", to: "/services" },
  { id: "portfolio", label: "Portfolio", to: "/portfolio" },
  { id: "about", label: "About", to: "/about" },
  { id: "blog", label: "Blog", to: "/blog" },
  { id: "contact", label: "Contact", to: "/contact", isAccent: true },
];

const HOME_SCROLL_SECTIONS = [
  { id: "home", elementId: "home" },
  { id: "service", elementId: "service" },
  { id: "portfolio", elementId: "portfolio" },
  { id: "about", elementId: "about" },
  { id: "contact", elementId: "contact" },
];

function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpenPath, setMenuOpenPath] = useState(null);
  const isMobileMenuOpen = menuOpenPath === location.pathname;
  const setIsMobileMenuOpen = (updater) => {
    setMenuOpenPath((prev) => {
      const currentOpen = prev === location.pathname;
      const nextOpen =
        typeof updater === "function" ? updater(currentOpen) : updater;
      return nextOpen ? location.pathname : null;
    });
  };
  const [homeActiveSection, setHomeActiveSection] = useState("home");
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (!isHomePage) return;

      const headerHeight = headerRef.current?.offsetHeight ?? 80;
      const probeY = headerHeight + 32;

      for (let i = HOME_SCROLL_SECTIONS.length - 1; i >= 0; i -= 1) {
        const section = HOME_SCROLL_SECTIONS[i];
        const target =
          document.getElementById(section.elementId) ||
          (section.id === "service" ? document.getElementById("services") : null);
        if (!target) continue;

        const rect = target.getBoundingClientRect();
        if (rect.height > 0 && rect.top <= probeY) {
          setHomeActiveSection(section.id);
          return;
        }
      }

      setHomeActiveSection("home");
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomePage]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpenPath(null);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpenPath(null);
      }
    };

    const handleOutsideClick = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setMenuOpenPath(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick, { passive: true });

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [isMobileMenuOpen]);

  const isItemActive = (item) => {
    if (isHomePage) {
      return homeActiveSection === item.id;
    }
    if (item.to === "/") return false;
    if (item.to === "/blog") {
      return location.pathname === "/blog" || location.pathname.startsWith("/blog/");
    }
    return location.pathname === item.to;
  };

  const handleNavClick = (item) => {
    setIsMobileMenuOpen(false);
    if (item.to === "/" && isHomePage) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const showSolidNavbar = isScrolled || !isHomePage;

  return (
    <header
      ref={headerRef}
      className={`smb-header${showSolidNavbar ? " is-scrolled" : ""}`}
    >
      <div className="smb-nav-shell">
        <nav className="smb-navbar" aria-label="Primary navigation">
          <Link
            to="/"
            className="smb-logo-link"
            aria-label="Shootmybus Home"
            onClick={() => handleNavClick(NAV_ITEMS[0])}
          >
            <span className="smb-logo-frame">
              <img
                src="/Logo/shootmybus.jpeg"
                alt="Shootmybus — Not Just a Shoot, It's a Memory."
                width="640"
                height="640"
                className="smb-logo-img"
              />
            </span>
          </Link>

          <ul className="smb-nav-links">
            {NAV_ITEMS.map((item) => {
              const isActive = isItemActive(item);
              const linkClasses = [
                "smb-nav-link",
                item.isAccent ? "smb-nav-link--accent" : "",
                isActive ? "is-active" : "",
              ]
                .filter(Boolean)
                .join(" ");

              return (
                <li key={item.id} className="smb-nav-item">
                  <Link
                    to={item.to}
                    className={linkClasses}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => handleNavClick(item)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            className={`smb-menu-toggle${isMobileMenuOpen ? " is-open" : ""}`}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="smb-mobile-menu"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            <span className="smb-hamburger" aria-hidden="true">
              <span className="smb-hamburger-line" />
              <span className="smb-hamburger-line" />
              <span className="smb-hamburger-line" />
            </span>
          </button>
        </nav>

        <div
          id="smb-mobile-menu"
          className={`smb-mobile-dropdown${isMobileMenuOpen ? " is-open" : ""}`}
          aria-hidden={!isMobileMenuOpen}
        >
          <div className="smb-mobile-dropdown-inner">
            <ul className="smb-mobile-list">
              {NAV_ITEMS.map((item) => {
                const isActive = isItemActive(item);
                const mobileClasses = [
                  "smb-mobile-link",
                  item.isAccent ? "smb-mobile-link--accent" : "",
                  isActive ? "is-active" : "",
                ]
                  .filter(Boolean)
                  .join(" ");

                return (
                  <li key={item.id}>
                    <Link
                      to={item.to}
                      className={mobileClasses}
                      tabIndex={isMobileMenuOpen ? 0 : -1}
                      aria-current={isActive ? "page" : undefined}
                      onClick={() => handleNavClick(item)}
                    >
                      <span>{item.label}</span>
                      {!item.isAccent && (
                        <span className="smb-mobile-dot" aria-hidden="true" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
