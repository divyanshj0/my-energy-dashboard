'use client';
import { BoltIcon } from '@heroicons/react/24/outline';

export default function TotalEnergy() {
  return (
    <div className="bg-white rounded-xl shadow h-full w-full flex flex-col justify-between">
      {/* Top visual section */}
      <div className="relative h-2/3 bg-orange-100 rounded-md flex items-center justify-center">
        {/* You can replace this with a background image of wind turbines if needed */}
        <span className="text-[2.5rem] font-bold text-orange-600">478.40 kWh</span>
      </div>

      {/* Bottom label section */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center text-orange-500 font-medium text-sm">
          <BoltIcon className="w-5 h-5 mr-2" />
          Energy consumed per minute
        </div>
      </div>
    </div>
  );
}
