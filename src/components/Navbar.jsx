import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames"; 

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null); 

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target)
    ) {
      setIsMobileMenuOpen(false); 
    }
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="bg-gradient-to-r from-[#dcdcdc] to-[#a9a9a9] shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link
              to="/"
              className="flex items-center space-x-2 text-2xl font-bold text-[#105a63]"
            >
              ECE
            </Link>

            <div className="hidden md:flex space-x-4 items-center">
              <Link
                to="/"
                className="text-gray-700 hover:text-gray-900 px-3 py-2"
              >
                Home
              </Link>

              <Link
                to="/About"
                className="text-gray-700 hover:text-gray-900 px-3 py-2"
              >
                About
              </Link>

              <Link
                to="/projects"
                className="text-gray-700 hover:text-gray-900 px-3 py-2"
              >
                Projects
              </Link>
              <Link
                to= "./pages/Contact"
                className="text-gray-700 hover:text-gray-900 px-3 py-2"
              >
                Contact
              </Link>
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={handleMobileMenuToggle} className="text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div
            ref={mobileMenuRef}
            className={classNames(
              "md:hidden bg-white shadow-md rounded-md mt-2 transition-all duration-300 ease-in-out overflow-hidden",
              {
                "max-h-0 opacity-0 transform -translate-y-4": !isMobileMenuOpen,
                "max-h-96 opacity-100 transform translate-y-0": isMobileMenuOpen,
              }
            )}
          >
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/About"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Projects
                </Link>
                <Link
                to="./pages/Contact"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
