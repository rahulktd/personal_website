import React from 'react';
import logo from '../Assets/6521d0cd477949508c6068994f287514.png';

function Footer() {
  return (
    <footer className="bg-gray-200 py-4">
      <div className="container mx-auto flex justify-center items-center">
        <img src={logo} className="h-20 w-20 mr-2" alt="logo" />
      </div>
    </footer>
  );
}

export default Footer;
