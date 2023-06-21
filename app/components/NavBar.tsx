'use client';

import Link from 'next/link';

export default function NavBar(): JSX.Element {
  return (
    <nav className="bg-white p-2 flex justify-between">
      <Link href="/" className="font-bold text-gray-700 text-2xl">
        OpenTable
      </Link>
      <div>
        <div className="flex">
          <button className="bg-blue-400 text-white border p-2 rounded-full px-4 mr-3">
            Sign In
          </button>
          <button className="bg-gray-400 text-white border p-2 rounded-full px-4">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}

type NavBar = ReturnType<typeof NavBar>;
