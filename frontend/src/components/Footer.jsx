import React from "react";

function Footer() {
  return (
    <footer className="footer footer-center bg-base-100 bg-opacity-85 text-base-content p-4">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by
          DumiFlex
        </p>
      </aside>
    </footer>
  );
}

export default Footer;
