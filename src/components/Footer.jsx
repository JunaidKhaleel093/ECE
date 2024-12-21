import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Us */}
          <div className="text-left">
            <h3 className="text-xl font-semibold mb-6">About Us</h3>
            <p className="text-gray-400 leading-relaxed">
              We are a premier interior design studio, creating beautiful and
              functional spaces since 2010.
            </p>
          </div>

          {/* Contact */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-center">
                <Phone className="w-5 h-5 mr-3" />
                <span>
                  +91 9845002484 <br /> +91 9538900090
                </span>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="w-5 h-5 mr-3" />
                <span>
                  Ayub@ece99.com <br /> Irfan@ece99.com
                </span>
              </div>
              <div className="flex items-center justify-center">
                <MapPin className="w-5 h-5 mr-3" />
                <span>Adams Corner No37 3rd floor Coles Road Frazer town, Bangalore- 560005</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="/" className="hover:text-blue-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="hover:text-blue-400 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/About"
                  className="hover:text-blue-400 transition-colors"
                >
                  AboutUs
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p className="leading-relaxed">© 2024 ECE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
