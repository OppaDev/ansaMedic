import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0f7d80] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Sobre Nosotros</h3>
            <p className="text-gray-300">Proveemos suministros dentales de alta calidad para profesionales, respaldados por un servicio técnico excepcional y programas de educación continua.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Inicio' },
                { href: '/products', label: 'Productos' },
                { href: '/about', label: 'Acerca de' },
                { href: '/contact', label: 'Contacto' },
                { href: '/service', label: 'Servicio Técnico' },
                { href: '/education', label: 'Educación Continua' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-gray-300 hover:text-white transition duration-300">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contáctanos</h3>
            <p className="text-gray-300">Email: info@dentalpro.com</p>
            <p className="text-gray-300">Teléfono: (123) 456-7890</p>
            <p className="text-gray-300">Dirección: Av. Dental 123, Ciudad Dental, CD 12345</p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0a5c5e] py-4">
        <div className="container mx-auto px-4 text-center text-gray-300">
          <p>&copy; 2024 DentalPro Supplies. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;