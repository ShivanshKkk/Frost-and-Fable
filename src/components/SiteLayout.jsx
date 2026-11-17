import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { contactEmail } from "../data/siteContent.js";
import ArrowIcon from "./ArrowIcon.jsx";

const navigation = [
  { to: "/flavors", label: "Our flavors" },
  { to: "/about", label: "Our story" },
  { to: "/our-process", label: "Our process" },
  { to: "/gallery", label: "Gallery" },
  { to: "/review", label: "Reviews" },
  { to: "/contact", label: "Contact" },
];

function BrandLogo({ footer = false }) {
  return (
    <Link
      className={`wordmark${footer ? " wordmark--footer" : ""}`}
      to="/"
      aria-label="Frost and Fable home"
    >
      <span className="brand-logo-mark" aria-hidden="true">✳</span>
      <span className="brand-logo-name">frost <span>&amp;</span> fable</span>
    </Link>
  );
}

function SiteHeader() {
  return (
    <header className="site-header">
      <BrandLogo />
      <nav className="site-nav" aria-label="Main navigation">
        {navigation.map((item) => (
          <NavLink
            end
            key={item.to}
            to={item.to}
            className={({ isActive }) => (isActive ? "is-active" : "")}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      <a className="header-link" href={`mailto:${contactEmail}`}>
        Say hello <ArrowIcon />
      </a>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div>
          <p className="eyebrow">There’s always room</p>
          <h2>Save us a <em>scoop.</em></h2>
        </div>
        <a className="button button--light" href={`mailto:${contactEmail}`}>
          Say hello <ArrowIcon />
        </a>
      </div>
      <div className="footer-bottom">
        <BrandLogo footer />
        <p>Little batches. Lovely days. © {new Date().getFullYear()} Frost &amp; Fable.</p>
        <Link to="/" className="back-to-top">Back to home ↑</Link>
      </div>
    </footer>
  );
}

export default function SiteLayout() {
  return (
    <>
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
    </>
  );
}
