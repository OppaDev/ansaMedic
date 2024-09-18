import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCloudinaryImages } from '../../hooks/useCloudinaryImages';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = useCloudinaryImages('HeroSection');

  useEffect(() => {
    if (slides.length === 0) return;
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides]);

  if (slides.length === 0) {
    return <div>Cargando...</div>; // O cualquier otro componente de carga
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-teal-800 to-teal-900 text-white">
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <Image
            key={index}
            src={slide}
            alt={`Equipo dental ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className={`transition-opacity duration-1000 ${index === currentSlide ? 'opacity-60' : 'opacity-0'}`}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">DentalPro Supplies</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl animate-fade-in-up animation-delay-300">Innovación, calidad superior y soporte técnico para tu práctica dental</p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-teal-600 hover:bg-teal-100 font-bold py-3 px-8 rounded-full transition duration-300 animate-fade-in-up animation-delay-600">
              Explorar Productos
            </button>
            <Link href="https://wa.me/TUNUMERODEWHATSAPP" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 flex items-center justify-center animate-fade-in-up animation-delay-900">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.4 3.6C18.2 1.3 15.2 0 12 0 5.4 0 0 5.4 0 12c0 2.1.5 4.2 1.5 6L0 24l6.2-1.5c1.8.9 3.8 1.4 5.8 1.4 6.6 0 12-5.4 12-12 0-3.2-1.3-6.2-3.6-8.4zM12 22c-1.8 0-3.5-.5-5-1.3l-.4-.2-3.8.9.9-3.8-.2-.4c-1-1.6-1.5-3.4-1.5-5.2 0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10zm5.5-7.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.2-.8.9-1 1.1-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.4.1-.1.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.7-1-2.3-.3-.6-.6-.5-.8-.5-.2 0-.4 0-.6 0-.2 0-.5.1-.8.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.2.2 2.1 3.3 5.2 4.5.7.3 1.3.5 1.8.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.1-1.4-.1-.1-.3-.2-.6-.3z" />
              </svg>
              Contactar por WhatsApp
            </Link>
          </div>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0 animate-fade-in-up animation-delay-1200">
          <form className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-teal-600 text-xl font-semibold mb-4">Contáctanos</h3>
            <div className="mb-4">
              <label htmlFor="name" className="sr-only">Nombre</label>
              <input type="text" id="name" name="name" placeholder="Nombre" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="sr-only">Correo electrónico</label>
              <input type="email" id="email" name="email" placeholder="Correo electrónico" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="sr-only">Mensaje</label>
              <textarea id="message" name="message" placeholder="Mensaje" rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" required></textarea>
            </div>
            <button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-md transition duration-300">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;