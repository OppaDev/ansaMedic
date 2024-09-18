import React from 'react';

const TechnicalService = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6 text-teal-600">Servicio Técnico Especializado</h2>
        <p className="text-xl mb-8 text-gray-600">Nuestro equipo de expertos está listo para mantener tu equipo en óptimas condiciones.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-4 text-teal-600">Mantenimiento Preventivo</h3>
            <p className="text-gray-600">Programas personalizados para extender la vida útil de tus equipos.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-4 text-teal-600">Reparaciones Rápidas</h3>
            <p className="text-gray-600">Soluciones eficientes para minimizar el tiempo de inactividad de tu consultorio.</p>
          </div>
        </div>
        <button className="mt-12 bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
          Solicitar Servicio Técnico
        </button>
      </div>
    </section>
  );
};

export default TechnicalService;