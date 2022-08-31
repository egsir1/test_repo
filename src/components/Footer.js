import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="page-footer">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} All rights reserved
          <Link href className="grey-text text-lighten-4 right" to="/">
            SPA
          </Link>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
