'use client';
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Energy Usage',
    value: 76, // example percentage
    fill: '#10b981', // Tailwind emerald-500
  },
];

export default function RadialMeter() {
  return (
    <div className="bg-white rounded-xl p-4 shadow h-full flex flex-col">
      <h2 className="text-lg font-semibold mb-2">Radial Energy Meter</h2>

      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            innerRadius="60%"
            outerRadius="100%"
            data={data}
            startAngle={180}
            endAngle={0}
          >
            <RadialBar
              minAngle={15}
              label={{ position:'insideTop', fill: '#fff' }}
              background
              clockWise
              dataKey="value"
            />
            <Legend
              iconSize={10}
              layout="vertical"
              verticalAlign="middle"
              align="center"
              wrapperStyle={{ top: '60%', transform: 'translateY(-50%)' }}
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>

      <div className="text-center mt-4 text-2xl font-bold text-emerald-600">
        {data[0].value}%
      </div>
      <div className="text-center text-sm text-gray-500">
        Of Total Capacity Used
      </div>
    </div>
  );
}
