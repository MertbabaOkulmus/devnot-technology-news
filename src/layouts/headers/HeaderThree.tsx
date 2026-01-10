"use client";

import Image from "next/image";
import NavMenu from "./menu/NavMenu";
import Link from "next/link";
import UseSticky from "@/hooks/UseSticky";
import MobileMenu from "./menu/MobileMenu";
import { useEffect, useState } from "react";
import logo_2 from "@/assets/img/logo/devnot-logo.png";
import footerLogo from "@/assets/img/logo/devnot-logo-white.png";

const HeaderThree = () => {
  const { sticky } = UseSticky();
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    const readTheme = () => {
      try {
        const lsTheme = localStorage.getItem("tg_theme_scheme");

        if (lsTheme === "dark") {
          setIsDark(true);
          return;
        }
        if (lsTheme === "light") {
          setIsDark(false);
          return;
        }

        const attrTheme = document.documentElement.getAttribute("tg-theme");
        if (attrTheme === "dark") {
          setIsDark(true);
          return;
        }
        if (attrTheme === "light") {
          setIsDark(false);
          return;
        }

        const prefersDark =
          typeof window !== "undefined" &&
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches;

        setIsDark(!!prefersDark);
      } catch {
        setIsDark(false);
      }
    };

    readTheme();

    const onStorage = (e: StorageEvent) => {
      if (e.key === "tg_theme_scheme") readTheme();
    };
    window.addEventListener("storage", onStorage);

    const observer = new MutationObserver(() => readTheme());
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["tg-theme"] });

    return () => {
      window.removeEventListener("storage", onStorage);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <header className="header-style-three">
        <div id="header-fixed-height" className={sticky ? "active-height" : ""}></div>

        <div id="sticky-header" className={`menu-area menu-style-three ${sticky ? "sticky-menu" : ""}`}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="menu-wrap">
                  <nav className="menu-nav">
                    <div className="logo">
                      <Link href="/">
                        <Image src={isDark ? footerLogo : logo_2} alt="" />
                      </Link>
                    </div>

                    <div className="navbar-wrap main-menu d-none d-lg-flex">
                      <NavMenu />
                    </div>

                    <div onClick={() => setMobileMenu(true)} className="mobile-nav-toggler">
                      <i className="fas fa-bars"></i>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
    </>
  );
};

export default HeaderThree;
