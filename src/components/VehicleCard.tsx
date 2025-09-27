import React from 'react';
import { Star, Zap, Fuel, Heart, Scale, Calendar } from 'lucide-react';
import { Vehicle } from '../types';

interface VehicleCardProps {
  vehicle: Vehicle;
  onCompare: (vehicle: Vehicle) => void;
  onTestRide: (vehicle: Vehicle) => void;
  isSelectedForCompare: boolean;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle, onCompare, onTestRide, isSelectedForCompare }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const getFuelIcon = (fuelType: string) => {
    switch (fuelType) {
      case 'electric':
        return <Zap className="w-4 h-4" />;
      default:
        return <Fuel className="w-4 h-4" />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          {vehicle.isNew && (
            <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              New
            </span>
          )}
          {vehicle.isBestSeller && (
            <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              Best Seller
            </span>
          )}
        </div>
        <div className="absolute top-4 right-4 flex gap-2">
          <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
            <Heart className="w-4 h-4 text-gray-600" />
          </button>
          <button
            onClick={() => onCompare(vehicle)}
            className={`p-2 rounded-full transition-colors ${
              isSelectedForCompare 
                ? 'bg-blue-600 text-white' 
                : 'bg-white/90 hover:bg-white text-gray-600'
            }`}
          >
            <Scale className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            {vehicle.name}
          </h3>
          <div className="flex items-center text-gray-600">
            {getFuelIcon(vehicle.fuelType)}
            <span className="ml-1 text-sm capitalize">{vehicle.fuelType}</span>
          </div>
        </div>
        
        <p className="text-gray-600 mb-3">{vehicle.brand}</p>
        
        <div className="flex items-center mb-4">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm font-medium">{vehicle.rating}</span>
          </div>
          <span className="text-gray-400 text-sm ml-2">({vehicle.reviews} reviews)</span>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
          <div>
            <span className="text-gray-500">Mileage:</span>
            <p className="font-medium">{vehicle.mileage}</p>
          </div>
          <div>
            <span className="text-gray-500">Engine:</span>
            <p className="font-medium">{vehicle.engine}</p>
          </div>
        </div>

        <div className="flex justify-between items-center mb-4">
          <div>
            <span className="text-2xl font-bold text-gray-900">{formatPrice(vehicle.price)}</span>
            <p className="text-sm text-gray-500">Ex-showroom price</p>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => onTestRide(vehicle)}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center"
          >
            <Calendar className="w-4 h-4 mr-2" />
            Test Ride
          </button>
          <button className="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-2 px-4 rounded-lg font-medium transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;