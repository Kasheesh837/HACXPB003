import React from 'react';
import { Calendar, ArrowRight, Star } from 'lucide-react';
import { upcomingLaunches } from '../data/upcomingLaunches';

const UpcomingLaunches: React.FC = () => {
  return (
    <section id="upcoming" className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Upcoming Launches
          </h2>
          <p className="text-xl text-gray-600">
            Get ready for the next generation of two-wheelers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {upcomingLaunches.map(launch => (
            <div key={launch.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={launch.image}
                  alt={launch.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Coming Soon
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {launch.name}
                </h3>
                <p className="text-gray-600 mb-3">{launch.brand}</p>
                
                <div className="flex items-center mb-4 text-sm text-gray-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  Expected: {launch.launchDate}
                </div>

                <div className="mb-4">
                  <p className="text-2xl font-bold text-purple-600">{launch.expectedPrice}</p>
                  <p className="text-sm text-gray-500">Expected price</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {launch.keyFeatures.map((feature, index) => (
                      <span key={index} className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center">
                  <Star className="w-4 h-4 mr-2" />
                  Notify Me
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition-colors">
            View All Upcoming Launches
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default UpcomingLaunches;