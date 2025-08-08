// src/components/Navbar.tsx

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";


const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Service", path: "/service" },
  { name: "Contact", path: "/contact" },
  { name: "Course", path: "/course" },
];


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between px-[30px] py-[25px] max-w-10xl mx-auto">
        <div className="text-2xl font-bold text-orange-500">Hanotech</div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `hover:text-orange-500 transition-colors duration-200 ${
                  isActive ? "text-orange-500" : "text-gray-700"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-white px-6 py-4 space-y-4 shadow-md"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block hover:text-orange-500 ${
                    isActive ? "text-orange-500" : "text-gray-700"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
