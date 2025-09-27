import React, { useState } from 'react';
import { Search, Menu, X, Scale, ShoppingCart, User } from 'lucide-react';

interface HeaderProps {
  onSellClick: () => void;
  selectedCount: number;
  onCompareClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSellClick, selectedCount, onCompareClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-2">
                <span className="text-white font-bold text-lg">2W</span>
              </div>
              <span className="text-xl font-bold text-gray-900">BikeHub</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#bikes" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Bikes
            </a>
            <a href="#scooters" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Scooters
            </a>
            <a href="#electric" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Electric
            </a>
            <a href="#upcoming" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Upcoming
            </a>
            <a href="#showrooms" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Showrooms
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {selectedCount > 0 && (
              <button
                onClick={onCompareClick}
                className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Scale className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {selectedCount}
                </span>
              </button>
            )}
            <button
              onClick={onSellClick}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Sell Your Bike
            </button>
            <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <User className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {selectedCount > 0 && (
              <button
                onClick={onCompareClick}
                className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Scale className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {selectedCount}
                </span>
              </button>
            )}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <a href="#bikes" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Bikes</a>
              <a href="#scooters" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Scooters</a>
              <a href="#electric" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Electric</a>
              <a href="#upcoming" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Upcoming</a>
              <a href="#showrooms" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Showrooms</a>
              <button
                onClick={onSellClick}
                className="w-full text-left px-3 py-2 text-green-600 font-medium"
              >
                Sell Your Bike
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;