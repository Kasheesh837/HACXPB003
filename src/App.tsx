import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedVehicles from './components/FeaturedVehicles';
import VehicleGrid from './components/VehicleGrid';
import CompareModal from './components/CompareModal';
import CalculatorModal from './components/CalculatorModal';
import TestRideModal from './components/TestRideModal';
import SellVehicleModal from './components/SellVehicleModal';
import UpcomingLaunches from './components/UpcomingLaunches';
import ShowroomLocator from './components/ShowroomLocator';
import Footer from './components/Footer';
import { Vehicle } from './types';
import { vehicles } from './data/vehicles';

function App() {
  const [selectedVehicles, setSelectedVehicles] = useState<Vehicle[]>([]);
  const [showCompare, setShowCompare] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);
  const [calculatorType, setCalculatorType] = useState<'emi' | 'fuel'>('emi');
  const [showTestRide, setShowTestRide] = useState(false);
  const [showSellVehicle, setShowSellVehicle] = useState(false);
  const [selectedTestRideVehicle, setSelectedTestRideVehicle] = useState<Vehicle | null>(null);
  const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>(vehicles);

  const handleCompareToggle = (vehicle: Vehicle) => {
    setSelectedVehicles(prev => {
      const exists = prev.find(v => v.id === vehicle.id);
      if (exists) {
        return prev.filter(v => v.id !== vehicle.id);
      } else if (prev.length < 3) {
        return [...prev, vehicle];
      }
      return prev;
    });
  };

  const handleTestRide = (vehicle: Vehicle) => {
    setSelectedTestRideVehicle(vehicle);
    setShowTestRide(true);
  };

  const handleCalculator = (type: 'emi' | 'fuel') => {
    setCalculatorType(type);
    setShowCalculator(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        onSellClick={() => setShowSellVehicle(true)}
        selectedCount={selectedVehicles.length}
        onCompareClick={() => setShowCompare(true)}
      />
      
      <Hero 
        onSearch={setFilteredVehicles}
        onCalculator={handleCalculator}
      />
      
      <FeaturedVehicles 
        vehicles={vehicles.slice(0, 6)}
        onCompare={handleCompareToggle}
        onTestRide={handleTestRide}
        selectedForCompare={selectedVehicles}
      />
      
      <VehicleGrid 
        vehicles={filteredVehicles}
        onCompare={handleCompareToggle}
        onTestRide={handleTestRide}
        selectedForCompare={selectedVehicles}
      />
      
      <UpcomingLaunches />
      
      <ShowroomLocator />
      
      <Footer />

      {showCompare && (
        <CompareModal
          vehicles={selectedVehicles}
          onClose={() => setShowCompare(false)}
        />
      )}

      {showCalculator && (
        <CalculatorModal
          type={calculatorType}
          onClose={() => setShowCalculator(false)}
        />
      )}

      {showTestRide && selectedTestRideVehicle && (
        <TestRideModal
          vehicle={selectedTestRideVehicle}
          onClose={() => {
            setShowTestRide(false);
            setSelectedTestRideVehicle(null);
          }}
        />
      )}

      {showSellVehicle && (
        <SellVehicleModal
          onClose={() => setShowSellVehicle(false)}
        />
      )}
    </div>
  );
}

export default App;