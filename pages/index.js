import Navbar from '@/components/Navbar';
import TotalEnergy from '@/components/TotalEnergy';
import EnergyChart from '@/components/EnergyChart';
import CurrentPowerChart from '@/components/CurrentpowerChart';
import ContactInfo from '@/components/ContactInfo';
import EnergyAlarms from '@/components/EnergyAlarms';
import VoltageFreqChart from '@/components/VoltageFreqChart';
import RadialMeter from '@/components/RadialMeter';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-4">
      {/* Top Row */}
      <div className="flex flex-wrap justify-between gap-4 mt-4">
        <div className="w-[32%] h-[48vh]">
          <TotalEnergy />
        </div>
        <div className="w-[32%] h-[48vh]">
          <EnergyChart />
        </div>
        <div className="w-[32%] h-[48vh]">
          <CurrentPowerChart />
        </div>
      </div>
      {/* Bottom Row */}
      <div className="flex flex-wrap gap-5  mt-4">
        <div className="w-[16%] h-[30vh]">
          <ContactInfo />
        </div>
        <div className="w-[28%] h-[48vh]">
          <EnergyAlarms />
        </div>
        <div className="w-[28%] h-[48vh]">
          <VoltageFreqChart />
        </div>
        <div className="w-[18%] h-[48vh]">
          <RadialMeter/>
        </div>
        
      </div>
    </main>
  );
}
