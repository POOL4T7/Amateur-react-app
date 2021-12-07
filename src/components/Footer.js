import React from "react";

const Footer = () => {
  return (
    <section className="footer">
      <div className=" container text-center py-5">
        Copyright &copy; Amature 2021 - {new Date().getFullYear()}
      </div>
    </section>
  );
};

export default Footer;
