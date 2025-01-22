import React from "react";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-black/20 text-base-content p-4 bg-clip-padding backdrop-filter backdrop-blur-lg border-t border-accent/30">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by
          <span className="font-bold text-accent"> FSociety</span>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
