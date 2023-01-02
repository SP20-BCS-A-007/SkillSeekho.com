import React from "react";

const Footer = () => {
  return (
    <footer class="text-center fs-6 fw-bold text-white" style={{bottom: "0"}}>
      <div class="text-center p-3 bg-secondary" >
        © 2022 Copyright: 
        <a className="text-white" style={{textDecoration: 'none'}} href="/"> SkillSeekho.com</a>
      </div>
    </footer>
  );
};

export default Footer;
