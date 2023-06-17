'use client';
//* Client-side rendering: the client (the browser) receives an empty html-file from the server and renders it; then the client (the browser) receives a JavaScript bundle from the server, parses it and renders the html-file using the functions and values in the JavaScript bundle.
//* Useful when client hooks like useState and useEffect are needed.
//* Ultimate goal: is to use the smallest number of client components as possible.
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SearchBar() {
  const router = useRouter();
  const [location, setLocation] = useState('');

  return (
    <div className="text-left py-3 m-auto flex justify-center">
      <input
        className="bg-white text-black rounded text-lg mr-3 p-2 w-[450px]"
        type="text"
        placeholder="state, city or town"
        value={location}
        onChange={(event) => setLocation(event.target.value)}
      />
      <button
        className="rounded-full px-9 py-2 text-white bg-red-600"
        onClick={() => {
          if (location === 'banana') router.push('/search');
        }}
      >
        Let us go!
      </button>
    </div>
  );
}
