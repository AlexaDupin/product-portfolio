"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useId, useState, useSyncExternalStore, type KeyboardEvent } from "react";
import { nav, person, routes } from "@/content/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import styles from "./SiteNav.module.css";

const SCROLL_THRESHOLD = 24;

const subscribeToScroll = (onChange: () => void) => {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
};

const isCurrent = (pathname: string, href: string) =>
  href === routes.home ? pathname === href : pathname.startsWith(href);

export function SiteNav() {
  const pathname = usePathname();
  const menuId = useId();
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useSyncExternalStore(
    subscribeToScroll,
    () => window.scrollY > SCROLL_THRESHOLD,
    () => false,
  );

  const overHero = pathname === routes.home && !scrolled && !menuOpen;
  const closeMenu = () => setMenuOpen(false);

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  };

  return (
    <header className={`${styles.header} ${overHero ? styles.overHero : styles.solid}`}>
      <nav className={`container ${styles.bar}`} aria-label={nav.navLabel} onKeyDown={handleKeyDown}>
        <Link href={routes.home} className={styles.brand} aria-label={nav.homeLabel} onClick={closeMenu}>
          {person.name}
        </Link>

        <button
          type="button"
          className={styles.toggle}
          aria-expanded={menuOpen}
          aria-controls={menuId}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="visually-hidden">{menuOpen ? nav.menuCloseLabel : nav.menuOpenLabel}</span>
          <span className={`${styles.icon} ${menuOpen ? styles.iconOpen : ""}`} aria-hidden="true" />
        </button>

        {/* Clicks on any link inside the menu bubble up here and close it. */}
        <div id={menuId} className={`${styles.menu} ${menuOpen ? styles.menuOpen : ""}`} onClick={closeMenu}>
          <ul className={styles.links}>
            {nav.items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={styles.link}
                  aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ButtonLink link={nav.cta} variant="white" className={styles.cta} />
        </div>
      </nav>
    </header>
  );
}
