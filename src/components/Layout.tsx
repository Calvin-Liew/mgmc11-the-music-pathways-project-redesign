import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <img 
                src="/MPP.png" 
                alt="The Music Pathways Project" 
                className="h-8 md:h-10 w-auto object-contain transition-transform group-hover:scale-105"
                style={{ display: 'block' }}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              <Link
                to="/about"
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  isActive('/about') 
                    ? 'text-[#002A5C] bg-[#002A5C]/10' 
                    : 'text-gray-700 hover:text-[#002A5C] hover:bg-gray-50'
                }`}
              >
                About
              </Link>
              <Link
                to="/for-students"
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  isActive('/for-students') 
                    ? 'text-[#002A5C] bg-[#002A5C]/10' 
                    : 'text-gray-700 hover:text-[#002A5C] hover:bg-gray-50'
                }`}
              >
                For Students
              </Link>
              <Link
                to="/for-educators"
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  isActive('/for-educators') 
                    ? 'text-[#002A5C] bg-[#002A5C]/10' 
                    : 'text-gray-700 hover:text-[#002A5C] hover:bg-gray-50'
                }`}
              >
                For Educators
              </Link>
              <Link
                to="/contact"
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  isActive('/contact') 
                    ? 'text-[#002A5C] bg-[#002A5C]/10' 
                    : 'text-gray-700 hover:text-[#002A5C] hover:bg-gray-50'
                }`}
              >
                Contact
              </Link>
              <Link
                to="/pathways"
                className="px-5 py-2 bg-gradient-to-r from-[#002A5C] to-[#001d3f] text-white rounded-lg font-semibold hover:from-[#001d3f] hover:to-[#002A5C] hover:shadow-lg transition-all transform hover:-translate-y-0.5 text-sm"
              >
                Explore Pathways
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2 border-t border-gray-100 animate-in slide-in-from-top">
              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg transition-all ${
                  isActive('/about') ? 'bg-[#002A5C]/10 text-[#002A5C] font-semibold' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                About
              </Link>
              <Link
                to="/for-students"
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg transition-all ${
                  isActive('/for-students') ? 'bg-[#002A5C]/10 text-[#002A5C] font-semibold' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                For Students
              </Link>
                  <Link
                    to="/for-educators"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg transition-all ${
                      isActive('/for-educators') ? 'bg-[#002A5C]/10 text-[#002A5C] font-semibold' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    For Educators
                  </Link>
                  <Link
                    to="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg transition-all ${
                      isActive('/contact') ? 'bg-[#002A5C]/10 text-[#002A5C] font-semibold' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    Contact
                  </Link>
              <div className="pt-2 border-t border-gray-100">
                <Link
                  to="/pathways"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block mx-4 px-4 py-3 bg-gradient-to-r from-[#002A5C] to-[#001d3f] text-white rounded-lg font-semibold text-center"
                >
                  Explore Pathways
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>

      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-[#0F172A] text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="text-xl font-bold mb-2">The Music Pathways Project</div>
              <div className="text-sm text-gray-400 mb-4">University of Toronto Scarborough</div>
              <p className="text-sm text-gray-400">
                The Music Pathways Project (TMPP) based at the University of Toronto Scarborough is a research-informed initiative responding to the disconnect between student perceptions of music careers and the realities of a rapidly evolving music industry.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">IMPORTANT LINKS</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/for-educators" className="text-gray-400 hover:text-white transition-colors">
                    For Educators
                  </Link>
                </li>
                <li>
                  <Link to="/for-students" className="text-gray-400 hover:text-white transition-colors">
                    For Students
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Accessibility
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            Copyright © {new Date().getFullYear()} The Music Pathways Project
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

