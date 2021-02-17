import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <span className="footer__created">Created by &nbsp;</span>
      <a href="https://shotalex.github.io/" target="_blank" className="footer__author">
        Shot Alex
      </a>
    </footer>
  );
};

export default Footer;
