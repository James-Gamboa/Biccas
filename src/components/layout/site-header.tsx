"use client";

import Link from "next/link";
import { useCallback, useState } from "react";

import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const SiteHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = useCallback(() => {
    setIsMenuOpen((open) => !open);
  }, []);

  const handleCloseMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <header className="header">
      <div className="header-container _container">
        <div className="header-logo">
          <h1>Biccas</h1>
        </div>

        <nav
          className={cn("nav-main", isMenuOpen && "open")}
          aria-label="Main navigation"
        >
          <div className="nav-list">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                className="nav-item"
                href={link.href}
                onClick={handleCloseMenu}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>

        <div className="buttons">
          <Link className="button-first" href="#">
            Login
          </Link>
          <Link className="button-second" href="#">
            Sign up
          </Link>
        </div>

        <button
          type="button"
          className={cn("burger-menu", isMenuOpen && "active")}
          onClick={handleToggleMenu}
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
        >
          <span />
        </button>
      </div>
    </header>
  );
};
