import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <p>© {currentYear} Victoria Munteanu</p>
    </div>
  );
}
export default Footer;
