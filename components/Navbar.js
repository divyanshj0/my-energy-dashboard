'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Dashboard', href: '/' },
  { name: 'Energy', href: '/energy' },
  { name: 'Current & Power', href: '/current' },
  { name: 'Voltage & Frequency', href: '/voltage' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-800 p-4 text-white flex gap-4">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={`hover:underline ${
            pathname === item.href ? 'font-bold text-purple-300' : ''
          }`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
