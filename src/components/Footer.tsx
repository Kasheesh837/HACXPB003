import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-2">
                <span className="text-white font-bold text-lg">2W</span>
              </div>
              <span className="text-xl font-bold">BikeHub</span>
            </div>
            <p className="text-gray-400">
              Your trusted partner for finding the perfect two-wheeler. Compare, calculate, and choose with confidence.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-pink-400 cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-gray-400 hover:text-red-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#bikes" className="text-gray-400 hover:text-white transition-colors">Bikes</a></li>
              <li><a href="#scooters" className="text-gray-400 hover:text-white transition-colors">Scooters</a></li>
              <li><a href="#electric" className="text-gray-400 hover:text-white transition-colors">Electric Vehicles</a></li>
              <li><a href="#upcoming" className="text-gray-400 hover:text-white transition-colors">Upcoming Launches</a></li>
              <li><a href="#showrooms" className="text-gray-400 hover:text-white transition-colors">Showrooms</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">EMI Calculator</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Fuel Cost Calculator</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Compare Vehicles</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Test Ride Booking</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sell Your Vehicle</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-blue-400" />
                <span className="text-gray-400">info@bikehub.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-blue-400" />
                <span className="text-gray-400">+91 1800-123-4567</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 mt-1 text-blue-400" />
                <span className="text-gray-400">
                  123 Auto Street,<br />
                  Mumbai, Maharashtra 400001
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 BikeHub. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;