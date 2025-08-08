import { Instagram, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-black py-10 px-6 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* About */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-orange-400">Hanotech</h2>
          <p className="text-sm text-gray-300">
            Blending technology and construction to create innovative solutions for businesses, students, and young tech minds.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-orange-400">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-orange-300">Home</a></li>
            <li><a href="#" className="hover:text-orange-300">About</a></li>
            <li><a href="#" className="hover:text-orange-300">Courses</a></li>
            <li><a href="#" className="hover:text-orange-300">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-orange-400">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={16} /> 09076573487
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> hello@hanotech.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Lagos, Nigeria
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-orange-400">Newsletter</h3>
          <p className="text-sm text-gray-300 mb-3">Subscribe to get updates on courses, events, and more.</p>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-md text-black outline-none"
              required
            />
            <button
              type="submit"
              className="bg-orange-400 hover:bg-orange-500 text-sky-950 font-bold py-2 rounded-md transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-6 mt-10">
        <motion.a
          whileHover={{ scale: 1.2 }}
          href="https://instagram.com/hanotechk"
          target="_blank"
          className="p-3 bg-orange-400 rounded-full text-sky-950"
        >
          <Instagram size={20} />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.2 }}
          href="https://wa.me/2349076573487"
          target="_blank"
          className="p-3 bg-orange-400 rounded-full text-sky-950"
        >
          <MessageCircle size={20} />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.2 }}
          href="mailto:hanotechk@gmail.com"
          className="p-3 bg-orange-400 rounded-full text-sky-950"
        >
          <Mail size={20} />
        </motion.a>
      </div>

      {/* Bottom line */}
      <div className="text-center text-sm text-gray-400 mt-10 border-t border-sky-700 pt-4">
        © {new Date().getFullYear()} Habtech. All rights reserved.
      </div>
    </footer>
  );
}
