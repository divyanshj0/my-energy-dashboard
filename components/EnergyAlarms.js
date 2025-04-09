'use client';

import { MagnifyingGlassIcon, Squares2X2Icon, ArrowPathIcon } from '@heroicons/react/24/outline';

export default function EnergyAlarms() {
  return (
    <div className="bg-white p-4 rounded-xl shadow h-full w-full flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-lg font-semibold">Energy meter: Alarms</h2>
          <p className="text-sm text-gray-500">Realtime - last 30 days</p>
        </div>
        <div className="flex space-x-2 items-center">
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 cursor-pointer" />
          <Squares2X2Icon className="w-5 h-5 text-gray-500 cursor-pointer" />
          <ArrowPathIcon className="w-5 h-5 text-gray-500 cursor-pointer" />
        </div>
      </div>

      {/* Table header */}
      <div className="mt-4 border-y border-gray-200 py-2 flex items-center text-sm font-medium text-gray-600">
        <input type="checkbox" className="mr-4" />
        <div className="w-1/4">Created time</div>
        <div className="w-1/4">Type</div>
        <div className="w-1/4">Severity</div>
        <div className="w-1/4">Status</div>
      </div>

      {/* No alarms row */}
      <div className="flex-1 flex items-center justify-center text-sm text-gray-500">
        No alarms found
      </div>

      {/* Pagination */}
      <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
        <div className="flex items-center">
          Items per page:&nbsp;
          <select className="border border-gray-300 rounded px-2 py-1 text-sm">
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>
        </div>
        <div className="flex items-center space-x-2">
          <span>1 – 0 of 0</span>
          <button disabled className="px-2 text-gray-300">&lt;</button>
          <button disabled className="px-2 text-gray-300">&gt;</button>
        </div>
      </div>
    </div>
  );
}
