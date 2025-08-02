"use client";

import React, { useEffect, useState } from "react";
import Logo from "../assets/img/logo.webp";
import Image from "next/image";
import { useRouter } from "next/router";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top px-4 ${
        scrolled ? "bg-black" : "bg-transparent"
      }`}
      style={{ transition: "background-color 0.3s ease" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">
          <Image src={Logo} alt="Logo" width={120} className="logo" />
        </a>

        <button
          className="navbar-toggler bg-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0 me-3">
            <li className="nav-item mx-3">
              <a
                className={`nav-link ${
                  activeLink === "home" ? "text-primary" : "text-white"
                }`}
                href="#home"
                onClick={() => handleLinkClick("home")}
              >
                Home
              </a>
            </li>
            <li className="nav-item mx-3">
              <a
                className={`nav-link ${
                  activeLink === "about" ? "text-primary" : "text-white"
                }`}
                href="#about"
                onClick={() => handleLinkClick("about")}
              >
                About
              </a>
            </li>
            <li className="nav-item mx-3">
              <a
                className={`nav-link ${
                  activeLink === "services" ? "text-primary" : "text-white"
                }`}
                href="#services"
                onClick={() => handleLinkClick("services")}
              >
                Services
              </a>
            </li>
            <button
              className="rounded-pill contactBtn"
              onClick={() => router.push("/contact")}
            >
              Contact Us
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
