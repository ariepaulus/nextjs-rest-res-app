'use client';

import Image from 'next/image';
import Link from 'next/link';

import errorMascot from '../public/icons/error.png';

export default function NotFound(): JSX.Element {
  return (
    <div className="h-screen bg-gray-200 flex flex-col justify-center items-center">
      <Image src={errorMascot} alt="error" className="w-56 mb-8" />
      <div className="bg-white px-9 py-14 shadow rounded">
        <h3 className="text-3xl font-bold">Well, this is embarrassing!</h3>
        <p className="text-reg font-bold">We couldn't find that page.</p>
        <p className="mt-6 text-sm font-light">Error Code: 404</p>
      </div>
      <div>
        <Link
          href="/"
          className="underline text-blue-600 hover:text-red-500 duration-300"
        >
          Homepage
        </Link>
      </div>
    </div>
  );
}

type NotFound = ReturnType<typeof NotFound>;
