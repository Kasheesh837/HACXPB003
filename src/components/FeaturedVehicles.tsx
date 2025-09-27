import React from 'react';
import { Vehicle } from '../types';
import VehicleCard from './VehicleCard';

interface FeaturedVehiclesProps {
  vehicles: Vehicle[];
  onCompare: (vehicle: Vehicle) => void;
  onTestRide: (vehicle: Vehicle) => void;
  selectedForCompare: Vehicle[];
}

const FeaturedVehicles: React.FC<FeaturedVehiclesProps> = ({ vehicles, onCompare, onTestRide, selectedForCompare }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Vehicles
          </h2>
          <p className="text-xl text-gray-600">
            Top picks from our collection of bikes, scooters, and electric vehicles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map(vehicle => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              onCompare={onCompare}
              onTestRide={onTestRide}
              isSelectedForCompare={selectedForCompare.some(v => v.id === vehicle.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedVehicles;