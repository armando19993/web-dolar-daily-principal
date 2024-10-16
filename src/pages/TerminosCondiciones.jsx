import React from 'react';
import logoBlanco from '../assets/LogoBlanco.png';

export const TerminosCondiciones = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      {/* Barra superior pequeña */}
      <div className="w-full bg-[#3c3c3c] text-white text-right p-2 text-[12pt]">
        <span>Contacto Soporte: +58 4248647216 | soporte@dolardaily.com</span>
      </div>

      {/* Barra más gruesa con el logo y texto */}
      <div className="w-full bg-[#38a838] p-4 px-12 flex items-center">
        <img src={logoBlanco} alt="Logo" className="w-32" />
        <div className="border-l-2 border-white h-16 mx-4"></div>
        <h1 className="text-white text-3xl font-bold">Términos y Condiciones</h1>
      </div>

      {/* Contenido con el título y párrafo */}
      <div className="px-4 py-6 px-20">
        <h2 className="text-2xl font-bold mb-4">Responsabilidad del Cliente</h2>
        <p className="text-base indent-8 mb-6">
          El cliente se obliga a proporcionar información veraz, completa y actualizada en el momento de realizar cualquier transacción. Cualquier error, omisión o inexactitud en la información proporcionada será de exclusiva responsabilidad del cliente, eximiendo a la empresa de cualquier responsabilidad derivada de tales inexactitudes.
        </p>

        <h2 className="text-2xl font-bold mb-4">Tarifas y Comisiones</h2>
        <p className="text-base indent-8 mb-6">
          Las tarifas y comisiones aplicables a los servicios se encuentran expresamente detalladas y comprendidas en el costo total de la transacción. El cliente reconoce y acepta pagar las tarifas al momento de utilizar el servicio. Dichas tarifas podrán ser actualizadas periódicamente, y la empresa se compromete a informar al cliente de manera oportuna sobre cualquier modificación que se realice.
        </p>

        <h2 className="text-2xl font-bold mb-4">Limitaciones de Responsabilidad</h2>
        <p className="text-base indent-8 mb-6">
          La empresa no será responsable por retrasos o incumplimientos que resulten de circunstancias fuera de su control, incluyendo, pero no limitado a, inactividad de las instituciones bancarias receptoras o errores en los datos proporcionados por el cliente. En caso de que se presente algún daño directo, la responsabilidad de la empresa se limitará al monto total de la transacción afectada.
        </p>

        <h2 className="text-2xl font-bold mb-4">Procedimiento de Reclamaciones</h2>
        <p className="text-base indent-8 mb-6">
          El cliente tendrá derecho a presentar reclamaciones relacionadas con el servicio dentro de un plazo máximo de 24 horas posteriores a la realización de la transacción. Solo serán atendidas aquellas reclamaciones en las que se demuestre error por parte de la empresa emisora. Las reclamaciones que deriven de errores en la información proporcionada por el cliente serán declaradas inactivas, cerradas o rechazadas.
        </p>

        <ul className="list-disc pl-10 mb-6">
          <li>Presentación de la reclamación a través de los canales designados (plazo máximo de 24 horas después de la transacción).</li>
          <li>Plazo de respuesta por parte de la empresa (24 a 72 horas).</li>
          <li>Información sobre posibles soluciones o compensaciones.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">Política de Privacidad</h2>
        <p className="text-base indent-8 mb-6">
          La empresa se compromete a proteger la privacidad de la información personal del cliente. La información proporcionada será utilizada únicamente para los fines de la transacción solicitada y no será compartida con terceros sin el consentimiento expreso del cliente, salvo en los casos en que sea requerido por ley o por una autoridad competente.
        </p>
      </div>

      {/* Footer */}
      <footer className="w-full bg-[#38a838] text-white text-center p-4">
        <p>&copy; 2024 Todos los derechos reservados</p>
      </footer>
    </div>
  );
};
