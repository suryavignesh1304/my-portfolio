import React, { useState } from 'react';
import { Link } from 'react-scroll';

const navItems = ['home', 'about', 'projects', 'experience', 'contact'];

interface HeaderProps {
  currentSection: string;
  setCurrentSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ setCurrentSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed w-full bg-white bg-opacity-90 z-50">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo / Title */}
        <div className="text-xl font-thin font-serif text-blue-400 hidden md:block">
          <Link to="home" smooth={true} duration={500} className="cursor-pointer">
            SuryaVignesh
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-500 hover:text-blue-400 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex justify-center space-x-6">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth={true}
                duration={500}
                spy={true}
                activeClass="text-blue-400"
                onSetActive={() => setCurrentSection(item)}
                className="text-sm uppercase tracking-wider cursor-pointer hover:text-blue-400 transition-colors"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="absolute top-full left-0 w-full bg-white bg-opacity-90 flex flex-col items-center space-y-4 mt-2 py-4 md:hidden">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  to={item}
                  smooth={true}
                  duration={500}
                  spy={true}
                  onSetActive={() => setCurrentSection(item)}
                  onClick={() => setIsOpen(false)} // Close the menu when an item is clicked
                  className="text-sm uppercase tracking-wider cursor-pointer hover:text-blue-400 transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
