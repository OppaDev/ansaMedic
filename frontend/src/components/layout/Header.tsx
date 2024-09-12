import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Ansa Medic Dent Logo" width={130} height={130} />
          </Link>
        </div>
        <nav className="hidden md:flex space-x-8">
          {[
            { href: '/', label: 'Inicio' },
            { href: '/about', label: 'Acerca de' },
            { href: '/products', label: 'Productos' },
            { href: '/service_technical', label: 'Servicio Técnico' },
            { href: '/contact', label: 'Contactanos' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-lg ${
                router.pathname === href
                  ? 'text-[#0f7d80] font-semibold'
                  : 'text-[#888786] hover:text-[#0f7d80] transition duration-300'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center">
          <Link href="/cart" className="flex items-center text-[#888786] hover:text-[#0f7d80] transition duration-300">
            <ShoppingCart size={24} />
            <span className="ml-2">Carrito (0)</span>
          </Link>
        </div>
        <button className="md:hidden text-[#0f7d80]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;