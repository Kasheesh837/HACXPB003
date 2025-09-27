import React, { useState } from 'react';
import { MapPin, Phone, Navigation, Clock } from 'lucide-react';
import { showrooms } from '../data/showrooms';

const ShowroomLocator: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');

  const cities = [...new Set(showrooms.map(s => s.address.split(',').pop()?.trim()))];
  const brands = [...new Set(showrooms.flatMap(s => s.brands))];

  const filteredShowrooms = showrooms.filter(showroom => {
    const cityMatch = !selectedCity || showroom.address.includes(selectedCity);
    const brandMatch = !selectedBrand || showroom.brands.includes(selectedBrand);
    return cityMatch && brandMatch;
  });

  return (
    <section id="showrooms" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Find Showrooms Near You
          </h2>
          <p className="text-xl text-gray-600">
            Locate authorized dealers and book your test ride
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center">
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Cities</option>
            {cities.map(city => city && (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>

          <select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Brands</option>
            {brands.map(brand => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredShowrooms.map(showroom => (
            <div key={showroom.id} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">{showroom.name}</h3>
                <MapPin className="w-5 h-5 text-blue-600" />
              </div>

              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="w-4 h-4 text-gray-400 mt-1 mr-2 flex-shrink-0" />
                  <p className="text-sm text-gray-600">{showroom.address}</p>
                </div>

                <div className="flex items-center">
                  <Phone className="w-4 h-4 text-gray-400 mr-2" />
                  <p className="text-sm text-gray-600">{showroom.phone}</p>
                </div>

                <div className="flex items-center">
                  <Clock className="w-4 h-4 text-gray-400 mr-2" />
                  <p className="text-sm text-gray-600">Open: 10 AM - 8 PM</p>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Available Brands:</p>
                  <div className="flex flex-wrap gap-1">
                    {showroom.brands.map(brand => (
                      <span key={brand} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-2 mt-4">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center">
                  <Navigation className="w-4 h-4 mr-1" />
                  Get Directions
                </button>
                <button className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                  Call Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredShowrooms.length === 0 && (
          <div className="text-center py-12">
            <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No showrooms found</h3>
            <p className="text-gray-600">Try adjusting your search criteria to find showrooms near you.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ShowroomLocator;