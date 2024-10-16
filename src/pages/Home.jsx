import React from 'react';
import { Link } from 'react-router-dom';
import logoOriginal from '../assets/LogoOriginal.png';

export const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src={logoOriginal} alt="Logo" className="" />
      <div className="flex items-center text-gray-500 font-bold">
        <Link to="/terminos-condiciones" className="mx-2">Términos y Condiciones</Link>
        <span className="mx-2">•</span>
        <Link to="/contact" className="mx-2">Contáctanos</Link>
      </div>
    </div>
  );
};
