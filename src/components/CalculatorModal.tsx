import React, { useState } from 'react';
import { X, Calculator, Fuel } from 'lucide-react';

interface CalculatorModalProps {
  type: 'emi' | 'fuel';
  onClose: () => void;
}

const CalculatorModal: React.FC<CalculatorModalProps> = ({ type, onClose }) => {
  // EMI Calculator State
  const [loanAmount, setLoanAmount] = useState(200000);
  const [interestRate, setInterestRate] = useState(9.5);
  const [tenure, setTenure] = useState(36);

  // Fuel Calculator State
  const [vehiclePrice, setVehiclePrice] = useState(150000);
  const [mileage, setMileage] = useState(45);
  const [fuelPrice, setFuelPrice] = useState(100);
  const [monthlyKm, setMonthlyKm] = useState(1000);

  const calculateEMI = () => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 100 / 12;
    const months = tenure;
    
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                (Math.pow(1 + monthlyRate, months) - 1);
    
    return {
      emi: Math.round(emi),
      totalAmount: Math.round(emi * months),
      totalInterest: Math.round(emi * months - principal)
    };
  };

  const calculateFuelCost = () => {
    const monthlyFuelCost = (monthlyKm / mileage) * fuelPrice;
    const yearlyFuelCost = monthlyFuelCost * 12;
    const fiveYearCost = yearlyFuelCost * 5;
    
    return {
      monthly: Math.round(monthlyFuelCost),
      yearly: Math.round(yearlyFuelCost),
      fiveYear: Math.round(fiveYearCost),
      totalOwnershipCost: Math.round(vehiclePrice + fiveYearCost)
    };
  };

  const emiData = calculateEMI();
  const fuelData = calculateFuelCost();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center">
            {type === 'emi' ? (
              <>
                <Calculator className="w-6 h-6 mr-2" />
                EMI Calculator
              </>
            ) : (
              <>
                <Fuel className="w-6 h-6 mr-2" />
                Fuel Cost Calculator
              </>
            )}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          {type === 'emi' ? (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Loan Amount: ₹{loanAmount.toLocaleString()}
                </label>
                <input
                  type="range"
                  min="50000"
                  max="1000000"
                  step="10000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(parseInt(e.target.value))}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Interest Rate: {interestRate}%
                </label>
                <input
                  type="range"
                  min="6"
                  max="15"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tenure: {tenure} months
                </label>
                <input
                  type="range"
                  min="12"
                  max="84"
                  step="6"
                  value={tenure}
                  onChange={(e) => setTenure(parseInt(e.target.value))}
                  className="w-full"
                />
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">EMI Breakdown</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monthly EMI:</span>
                    <span className="text-xl font-bold text-blue-600">₹{emiData.emi.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Amount:</span>
                    <span className="font-semibold">₹{emiData.totalAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Interest:</span>
                    <span className="font-semibold text-red-600">₹{emiData.totalInterest.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Vehicle Price: ₹{vehiclePrice.toLocaleString()}
                </label>
                <input
                  type="range"
                  min="50000"
                  max="500000"
                  step="10000"
                  value={vehiclePrice}
                  onChange={(e) => setVehiclePrice(parseInt(e.target.value))}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mileage: {mileage} kmpl
                </label>
                <input
                  type="range"
                  min="20"
                  max="100"
                  step="5"
                  value={mileage}
                  onChange={(e) => setMileage(parseInt(e.target.value))}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Fuel Price: ₹{fuelPrice}/liter
                </label>
                <input
                  type="range"
                  min="80"
                  max="120"
                  step="1"
                  value={fuelPrice}
                  onChange={(e) => setFuelPrice(parseInt(e.target.value))}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly Distance: {monthlyKm} km
                </label>
                <input
                  type="range"
                  min="500"
                  max="3000"
                  step="100"
                  value={monthlyKm}
                  onChange={(e) => setMonthlyKm(parseInt(e.target.value))}
                  className="w-full"
                />
              </div>

              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Fuel Cost Breakdown</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monthly Fuel Cost:</span>
                    <span className="font-semibold">₹{fuelData.monthly.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Yearly Fuel Cost:</span>
                    <span className="font-semibold">₹{fuelData.yearly.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">5-Year Fuel Cost:</span>
                    <span className="font-semibold text-orange-600">₹{fuelData.fiveYear.toLocaleString()}</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Ownership Cost (5 years):</span>
                      <span className="text-xl font-bold text-green-600">₹{fuelData.totalOwnershipCost.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CalculatorModal;