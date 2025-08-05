import { CloseOutlined, MenuOutlined } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';

const LiComponent = ({ children, href, onClick }) => (
  <li
    onClick={onClick}
    className="cursor-pointer text-gray-50 hover:text-gray-200 duration-150"
  >
    <a href={href}>{children}</a>
  </li>
);

const Navbar = () => {
  const [scrolledPastScreen, setScrolledPastScreen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Beranda', href: '/#beranda' },
    { label: 'Tentang Kami', href: '/#tentang' },
    { label: 'Produk', href: '/#produk' },
    { label: 'Harga', href: '/#harga' },
    { label: 'Kontak', href: '/#kontak' },
  ];


  useEffect(() => {
    const handleScroll = () => {
      const screenHeight = window.innerHeight;
      setScrolledPastScreen(window.scrollY > screenHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header>
      <nav
        className={`fixed top-0 w-full left-0 z-50 transition-colors duration-150 ${scrolledPastScreen
          ? 'bg-black/70 backdrop-blur-md shadow-md'
          : 'bg-black/10 backdrop-blur-md shadow-md'
          }`}
      >
        <div className="px-4 sm:px-8 md:px-10 lg:px-16 py-5 flex items-center">
          <div className="flex-1 md:hidden lg:block">
            <a href="/#" className="cursor-pointer">
              <img
                className="w-auto h-8"
                src="/assets/exantara-logo.webp"
                alt="Logo"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6 lg:space-x-10 text-base md:flex-1 lg:flex-none">
            {navLinks.map((link) => (
              <LiComponent key={link.href} href={link.href}>
                {link.label}
              </LiComponent>
            ))}
          </ul>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-4 ml-8">
            <a
              href="/login"
              className="border border-white/20 hover:border-white/40 text-white px-5 py-2.5 rounded-full text-sm transition-all backdrop-blur-sm hover:bg-white/5"
            >
              Login
            </a>
            <a
              href="#mulai"
              className="bg-blue-700 hover:bg-blue-800 transition-all text-white font-semibold py-2.5 px-5 rounded-full text-sm"
            >
              Mulai Sekarang
            </a>
          </div>


          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="block md:hidden text-4xl text-gray-300"
          >
            <MenuOutlined fontSize="inherit" />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        onClick={() => setMobileMenuOpen(false)}
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
      ></div>

      {/* Drawer with animation */}
      <div
        className={`fixed top-0 left-0 h-screen w-4/5 bg-[#080a1f] z-50 shadow-lg p-6 flex flex-col justify-between transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div>
          <div className="flex justify-between items-center mb-6">
            <img className="h-8" src="/assets/exantara-logo.webp" alt="Logo" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-white text-3xl"
            >
              <CloseOutlined />
            </button>
          </div>

          <ul className="flex flex-col space-y-6 text-lg text-white">
            {navLinks.map((link) => (
              <LiComponent
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </LiComponent>
            ))}
          </ul>


        </div>

        {/* Action Buttons for mobile */}
        <div className="flex flex-col space-y-4 mt-8">
          <a
            href="#mulai"
            className="bg-blue-700 hover:bg-blue-800 transition-all text-white font-semibold py-3 px-6 rounded-full text-center"
          >
            Mulai Sekarang
          </a>
          <a
            href="/login"
            className="text-white font-medium text-center"
          >
            Login
          </a>
        </div>
        z

        <p className="text-xs text-gray-500 mt-12">
          © {new Date().getFullYear()} Exantara. All rights reserved.
        </p>
      </div>
    </header>
  );
};

export default Navbar;