import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/about', label: 'Acerca de' },
  { href: '/products', label: 'Productos' },
  { href: '/service_technical', label: 'Servicio Técnico' },
  { href: '/contact', label: 'Contactanos' },
];

const NavLink = ({ href, label, isActive, onClick }) => (
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Link
      href={href}
      className={`text-lg ${
        isActive
          ? 'text-[#0f7d80] font-semibold'
          : 'text-[#888786] hover:text-[#0f7d80] transition duration-300'
      }`}
      onClick={onClick}
    >
      {label}
    </Link>
  </motion.div>
);

const Header = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`bg-white w-full transition-all duration-300 ${
        isScrolled ? 'shadow-md' : ''
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo.png" 
            alt="Ansa Medic Dent Logo" 
            width={100} 
            height={100} 
            sizes="100px"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
          />
        </Link>

        <nav className="hidden md:flex md:items-center md:space-x-8">
          {navLinks.map(({ href, label }) => (
            <NavLink
              key={href}
              href={href}
              label={label}
              isActive={router.pathname === href}
            />
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Link href="/cart" className="flex items-center text-[#888786] hover:text-[#0f7d80] transition duration-300">
            <ShoppingCart size={24} />
            <span className="ml-2 hidden md:inline">({cartCount})</span>
          </Link>

          <motion.button
            className="md:hidden text-[#0f7d80]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-4 z-50"
          >
            <div className="flex justify-end">
              <motion.button
                onClick={() => setIsMenuOpen(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-[#0f7d80]"
              >
                <X size={24} />
              </motion.button>
            </div>
            <nav className="flex flex-col space-y-4 mt-8">
              {navLinks.map(({ href, label }) => (
                <NavLink
                  key={href}
                  href={href}
                  label={label}
                  isActive={router.pathname === href}
                  onClick={() => setIsMenuOpen(false)}
                />
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;