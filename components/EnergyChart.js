'use client';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';
import { Dialog } from '@headlessui/react';
import { ArrowsPointingOutIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

export default function EnergyChart() {
  const [energyData, setEnergyData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const DEVICE_ID = 'Device id here'; 
  const TELEMETRY_KEY = 'Telementary Key Here';

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch(`/api/thingsboard?deviceId=${DEVICE_ID}&keys=${TELEMETRY_KEY}`);
        const data = await res.json();

        const parsed = data[TELEMETRY_KEY]?.map((entry) => ({
          hour: new Date(Number(entry.ts)).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          }),
          value: Number(entry.value),
        })) || [];

        setEnergyData(parsed);
      } catch (err) {
        console.error('Failed to load telemetry:', err);
      }
    }

    loadData();
  }, []);

  const values = energyData.map((d) => d.value);
  const min = Math.min(...values).toFixed(1);
  const max = Math.max(...values).toFixed(1);
  const total = values.reduce((sum, v) => sum + v, 0).toFixed(1);
  const avg = (values.length ? (total / values.length).toFixed(1) : 0);

  return (
    <>
      <div className="bg-white rounded-xl shadow relative h-full flex flex-col">
        <div className="flex justify-between items-center m-2">
          <h2 className="text-lg font-semibold">CO2 Consumption</h2>
          <button onClick={() => setIsOpen(true)}>
            <ArrowsPointingOutIcon className="w-5 h-5 text-gray-500 hover:text-purple-500" />
          </button>
        </div>

        <p className="text-sm text-gray-400 m-1">Realtime - Last Readings</p>

        <div className="flex-1 min-h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={energyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="hour" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="flex justify-around m-2 text-sm text-orange-500">
          <div>Min: {min} ppm</div>
          <div>Max: {max} ppm</div>
          <div>Avg: {avg} ppm</div>
          <div>Total: {total} ppm</div>
        </div>
      </div>

      {/* Fullscreen Dialog */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/60" />
        <div className="fixed inset-0 flex items-center justify-center p-6">
          <Dialog.Panel className="bg-white w-full h-[90vh] max-w-6xl p-6 rounded-xl relative shadow-xl flex flex-col">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl font-bold"
            >
              ×
            </button>
            <h2 className="text-xl font-semibold mb-4">CO2 Telemetry (Full Screen)</h2>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={energyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="hour" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
