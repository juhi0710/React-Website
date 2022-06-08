import React from "react";

const Footer = () => {

  const d = new Date();
  const year = d.getFullYear();
  return (
    <>
      <footer className="w-100 bg-light text-center">
        <p>© {year} JuhiRajput. All Rights Reserved | Terms and Conditions</p>
      </footer>
    </>
  );
};

export default Footer;