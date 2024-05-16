"use client";

import "./footer.css";

import Link from "next/link";

export default function Footer() {
  return (
    <div className="FooterItems">
      <footer className="footer bg-body-tertiary">
        <div className="container-fluid d-flex justify-content-between">
          <div>
            <h1 className="footer-logo">Art & Voyage</h1>
          </div>
          <div className="footer-links">
            <ul
              className="d-flex justify-content-end gap-3 mb-2 mb-lg-0"
              style={{ listStyle: "none" }}
            >
              <li>
                <Link style={{ textDecoration: "none", color: "rgb(12, 100, 118)" }} href="/location">Mettre mon logement en location </Link>
              </li>
              <li>
                <Link style={{ textDecoration: "none", color: "rgb(12, 100, 118)" }} href="/engagement">Nos engagements </Link>
              </li>
              <li>
                <Link style={{ textDecoration: "none", color: "rgb(12, 100, 118)" }} href="/cgu">CGU et mentions légales </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
