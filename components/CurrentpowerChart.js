'use client';
import {LineChart,Line,XAxis,YAxis,Tooltip,ResponsiveContainer,CartesianGrid} from 'recharts';
import { useState } from 'react';
import { currentPowerData } from '@/libs/mockdata';
import { Dialog } from '@headlessui/react';
import { ArrowsPointingOutIcon } from '@heroicons/react/24/outline';

export default function CurrentPowerChart() {
  const [isOpen, setIsOpen] = useState(false);

  // Data stats
  const amps = currentPowerData.map((d) => d.amps);
  const watts = currentPowerData.map((d) => d.power);

  const minAmp = Math.min(...amps).toFixed(4);
  const maxAmp = Math.max(...amps).toFixed(4);
  const avgAmp = (amps.reduce((a, b) => a + b) / amps.length).toFixed(4);

  const minWatt = Math.min(...watts).toFixed(0);
  const maxWatt = Math.max(...watts).toFixed(0);
  const avgWatt = (watts.reduce((a, b) => a + b) / watts.length).toFixed(0);

  const Chart = ({ height }) => (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={currentPowerData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="hour" />
        <YAxis yAxisId="left" domain={['auto', 'auto']} />
        <YAxis yAxisId="right" orientation="right" domain={['auto', 'auto']} />
        <Tooltip />
        <Line yAxisId="left" type="monotone" dataKey="amps" stroke="#ef4444" strokeWidth={2} name="Current"/>
        <Line yAxisId="right" type="monotone" dataKey="power" stroke="#8b5cf6" strokeWidth={2} name="Power"/>
      </LineChart>
    </ResponsiveContainer>
  );

  return (
    <>
      <div className="bg-white p-4 rounded-xl shadow h-full w-full">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">Current (Amperage) and Power</h2>
          <button onClick={() => setIsOpen(true)}>
            <ArrowsPointingOutIcon className="w-5 h-5 text-gray-500 hover:text-purple-500" />
          </button>
        </div>
        <p className="text-sm text-gray-400 mb-3">Realtime - last day</p>
        <Chart height={250} />
      </div>

      {/* Fullscreen Dialog */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/60" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-6">
          <Dialog.Panel className="bg-white w-full h-[90vh] max-w-6xl p-6 rounded-xl relative shadow-xl">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl font-bold"
            >
              ×
            </button>
            <h2 className="text-xl font-semibold mb-4">Current and Power (Full Screen)</h2>
            <Chart height={500} />
            <div className="flex flex-wrap justify-between mt-4 text-sm">
              <div className="text-red-500">Current</div>
              <div className="text-purple-600">Power</div>
              <div className="text-orange-500">min {minAmp} A</div>
              <div className="text-orange-500">max {maxAmp} A</div>
              <div className="text-orange-500">avg {avgAmp} A</div>
              <div className="text-orange-500">min {minWatt} W</div>
              <div className="text-orange-500">max {maxWatt} W</div>
              <div className="text-orange-500">avg {avgWatt} W</div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
