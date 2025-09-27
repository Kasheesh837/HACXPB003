import React from 'react';
import { X, Zap, Fuel, Gauge, Cog } from 'lucide-react';
import { Vehicle } from '../types';

interface CompareModalProps {
  vehicles: Vehicle[];
  onClose: () => void;
}

const CompareModal: React.FC<CompareModalProps> = ({ vehicles, onClose }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">Compare Vehicles</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehicles.map(vehicle => (
              <div key={vehicle.id} className="border rounded-lg overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{vehicle.name}</h3>
                  <p className="text-gray-600 mb-4">{vehicle.brand}</p>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Price:</span>
                      <span className="font-semibold">{formatPrice(vehicle.price)}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Type:</span>
                      <span className="font-semibold capitalize">{vehicle.type}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Fuel:</span>
                      <div className="flex items-center">
                        {vehicle.fuelType === 'electric' ? (
                          <Zap className="w-4 h-4 mr-1" />
                        ) : (
                          <Fuel className="w-4 h-4 mr-1" />
                        )}
                        <span className="font-semibold capitalize">{vehicle.fuelType}</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Mileage:</span>
                      <span className="font-semibold">{vehicle.mileage}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Engine:</span>
                      <span className="font-semibold">{vehicle.engine}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Power:</span>
                      <span className="font-semibold">{vehicle.power}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Rating:</span>
                      <span className="font-semibold">{vehicle.rating}/5</span>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {vehicle.features.map((feature, index) => (
                        <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {vehicles.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-600">No vehicles selected for comparison.</p>
              <p className="text-sm text-gray-500 mt-2">Select up to 3 vehicles to compare.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompareModal;