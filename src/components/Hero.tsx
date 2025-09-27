import React, { useState } from 'react';
import { Search, Calculator, Zap, Car } from 'lucide-react';
import { Vehicle } from '../types';
import { vehicles } from '../data/vehicles';

interface HeroProps {
  onSearch: (vehicles: Vehicle[]) => void;
  onCalculator: (type: 'emi' | 'fuel') => void;
}

const Hero: React.FC<HeroProps> = ({ onSearch, onCalculator }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const brands = [...new Set(vehicles.map(v => v.brand))];

  const handleSearch = () => {
    let filtered = vehicles;

    if (searchQuery) {
      filtered = filtered.filter(v => 
        v.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.brand.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedBrand) {
      filtered = filtered.filter(v => v.brand === selectedBrand);
    }

    if (selectedType) {
      filtered = filtered.filter(v => v.type === selectedType);
    }

    if (priceRange) {
      const [min, max] = priceRange.split('-').map(Number);
      filtered = filtered.filter(v => v.price >= min && v.price <= max);
    }

    onSearch(filtered);
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find Your Perfect
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Two-Wheeler
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">
            Discover bikes, scooters, and EVs from top brands with smart tools and expert guidance
          </p>
        </div>

        {/* Search Section */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="md:col-span-2">
              <input
                type="text"
                placeholder="Search by name or brand..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="px-4 py-3 rounded-lg bg-white/90 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <option value="">All Brands</option>
              {brands.map(brand => (
                <option key={brand} value={brand}>{brand}</option>
              ))}
            </select>

            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-3 rounded-lg bg-white/90 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <option value="">All Types</option>
              <option value="bike">Bikes</option>
              <option value="scooter">Scooters</option>
              <option value="ev">Electric</option>
            </select>

            <button
              onClick={handleSearch}
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg transition-colors flex items-center justify-center"
            >
              <Search className="w-5 h-5 mr-2" />
              Search
            </button>
          </div>
        </div>

        {/* Quick Tools */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div 
            onClick={() => onCalculator('emi')}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all cursor-pointer group"
          >
            <Calculator className="w-8 h-8 text-yellow-400 mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold mb-2">EMI Calculator</h3>
            <p className="text-blue-100">Calculate monthly payments and plan your purchase</p>
          </div>

          <div 
            onClick={() => onCalculator('fuel')}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all cursor-pointer group"
          >
            <Zap className="w-8 h-8 text-green-400 mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold mb-2">Fuel Cost Calculator</h3>
            <p className="text-blue-100">Compare running costs of different vehicles</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all cursor-pointer group">
            <Car className="w-8 h-8 text-purple-400 mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold mb-2">Test Ride</h3>
            <p className="text-blue-100">Book a test ride at your nearest showroom</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;