'use client';
//* Client-side rendering: the client (the browser) first receives an empty html-file from the server and renders it; then it receives a JavaScript bundle from the server, parses it and renders the html-file using the functions and values in the JavaScript bundle.
//* A client component is useful when client hooks, like useState and useEffect, are needed.
//* Ultimate goal: is to use the smallest number of client components as possible.
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SearchBar(): JSX.Element {
  const [location, setLocation] = useState('');
  const router = useRouter();

  return (
    <div className="text-left py-3 m-auto flex justify-center">
      <input
        className="bg-white text-black rounded text-lg mr-3 p-2 w-[450px]"
        type="text"
        placeholder="state, city or town"
        value={location}
        // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
        onChange={event => setLocation(event.target.value)}
      />
      <button
        className="rounded-full px-9 py-2 text-white bg-red-600"
        // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
        onClick={() => {
          if (location === '') return;
          router.push(`/search?city=${location}`);
          setLocation('');
        }}
      >
        Let's go!
      </button>
    </div>
  );
}

type SearchBar = ReturnType<typeof SearchBar>;
