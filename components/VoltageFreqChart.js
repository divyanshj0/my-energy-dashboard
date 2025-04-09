'use client';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { useEffect, useState } from 'react';
import { voltageFreqData } from '@/libs/mockdata';

export default function VoltageFreqChart() {
  const [data, setData] = useState([]);
  useEffect(() => setData(voltageFreqData), []);

  return (
    <div className="bg-white rounded-xl p-4 shadow">
      <h2 className="text-lg font-semibold mb-3">Voltage & Frequency</h2>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis yAxisId="left" label={{ value: 'V', angle: -90 }} />
          <YAxis yAxisId="right" orientation="right" label={{ value: 'Hz', angle: 90 }} />
          <Tooltip />
          <Line yAxisId="left" type="monotone" dataKey="voltage" stroke="#22c55e" />
          <Line yAxisId="right" type="monotone" dataKey="frequency" stroke="#0ea5e9" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
