'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
        { 
          href: '/products', 
          label: 'Products',
          submenu: [
            { href: '/products/xenex', label: 'XENEX' },
            { href: '/products/xdrive', label: 'XDRIVE' }
          ]
        },
    { 
      href: '/builds', 
      label: 'Cars',
      submenu: [
        { href: '/film-cars', label: 'Film Cars' }
      ]
    },
    { href: '/about', label: 'About' },
    { href: '/media', label: 'Media' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'border-b border-xenex-red/20' : ''
    }`} style={{ 
      backgroundColor: '#000000',
      background: '#000000',
      boxShadow: 'none',
      textShadow: 'none',
      filter: 'none',
      WebkitFilter: 'none',
      backdropFilter: 'none',
      WebkitBackdropFilter: 'none'
    }}>
      <nav className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.submenu && link.submenu.some(sub => pathname === sub.href));
              const hasSubmenu = link.submenu && link.submenu.length > 0;
              
              return (
                <div
                  key={link.href}
                  className="relative group"
                  onMouseEnter={() => hasSubmenu && setOpenSubmenu(link.href)}
                  onMouseLeave={() => hasSubmenu && setOpenSubmenu(null)}
                >
                  <Link
                    href={link.href}
                    className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 flex items-center ${
                      isActive
                        ? 'text-xenex-red bg-xenex-gray border border-xenex-red/30'
                        : 'text-white/80 hover:text-xenex-red hover:bg-xenex-gray/50'
                    }`}
                  >
                    {link.label}
                    {hasSubmenu && (
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>
                  
                  {/* Submenu Dropdown */}
                  {hasSubmenu && openSubmenu === link.href && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-xenex-gray rounded-lg shadow-lg border border-xenex-red/30 overflow-hidden z-50 animate-fade-in">
                      {link.submenu?.map((subLink) => {
                        const isSubActive = pathname === subLink.href;
                        return (
                          <Link
                            key={subLink.href}
                            href={subLink.href}
                            className={`block px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                              isSubActive
                                ? 'text-xenex-red bg-xenex-dark'
                                : 'text-white/80 hover:text-xenex-red hover:bg-xenex-dark/50'
                            }`}
                          >
                            {subLink.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white hover:text-xenex-red transition-colors p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-2 animate-fade-in">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.submenu && link.submenu.some(sub => pathname === sub.href));
              const hasSubmenu = link.submenu && link.submenu.length > 0;
              const isSubmenuOpen = openSubmenu === link.href;
              
              return (
                <div key={link.href}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={link.href}
                      onClick={() => !hasSubmenu && setIsMenuOpen(false)}
                      className={`flex-1 block px-4 py-3 rounded-lg transition-all duration-300 ${
                        isActive
                          ? 'text-xenex-red bg-xenex-gray border border-xenex-red/30'
                          : 'text-white/80 hover:text-xenex-red hover:bg-xenex-gray/50'
                      }`}
                    >
                      {link.label}
                    </Link>
                    {hasSubmenu && (
                      <button
                        onClick={() => setOpenSubmenu(isSubmenuOpen ? null : link.href)}
                        className="px-4 py-3 text-white/80 hover:text-xenex-red transition-colors"
                      >
                        <svg 
                          className={`w-5 h-5 transition-transform ${isSubmenuOpen ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    )}
                  </div>
                  {hasSubmenu && isSubmenuOpen && (
                    <div className="ml-4 mt-2 space-y-1">
                      {link.submenu?.map((subLink) => {
                        const isSubActive = pathname === subLink.href;
                        return (
                          <Link
                            key={subLink.href}
                            href={subLink.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={`block px-4 py-2 rounded-lg transition-all duration-300 ${
                              isSubActive
                                ? 'text-xenex-red bg-xenex-gray/50 border border-xenex-red/30'
                                : 'text-white/70 hover:text-xenex-red hover:bg-xenex-gray/30'
                            }`}
                          >
                            {subLink.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
}
