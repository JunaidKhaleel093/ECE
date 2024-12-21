import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* About Us */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-400 leading-relaxed">
              We are a premier interior design studio, creating beautiful and
              functional spaces since 2010. Our mission is to blend creativity
              and innovation to transform your spaces into works of art.
            </p>
          </div>

          {/* Contact Information */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start">
                <Phone className="w-5 h-5 mr-3 text-blue-400" />
                <span className="text-gray-400">
                  +91 9845002484 <br /> +91 9538900090
                </span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Mail className="w-5 h-5 mr-3 text-blue-400" />
                <span className="text-gray-400">
                  Ayub@ece99.com <br /> Irfan@ece99.com
                </span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <MapPin className="w-5 h-5 mr-3 text-blue-400" />
                <span className="text-gray-400">
                  Adams Corner, No. 37, 3rd floor <br />
                  Coles Road, Frazer Town, Bangalore - 560005
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center">
          <p className="text-gray-400 leading-relaxed">
            © 2024 ECE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}