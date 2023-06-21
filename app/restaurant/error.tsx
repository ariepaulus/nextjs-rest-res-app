//* This error component must be a client component, otherwise it will fail.
'use client';
import Image from 'next/image';
import errorMascot from '../../public/icons/error.png';

export default function RestaurantError({
  error,
}: {
  error: Error;
}): JSX.Element {
  return (
    <div className="h-screen bg-gray-200 flex flex-col justify-center items-center">
      <Image src={errorMascot} alt="error" className="w-56 mb-8" />
      <div className="bg-white px-9 p6-14 shadow rounded">
        <h3 className="text-black text-center text-3l font-bold">
          Well, this is embarrassing! The restaurant could not be found.
        </h3>
        <br />
        <hr />
        <p className="text-reg text-black text-center font-bold">
          {error.message}
        </p>
        <p className="mt-6 text-black text-sm text-center font-light">
          {error.stack}
        </p>
      </div>
    </div>
  );
}

type RestaurantError = ReturnType<typeof RestaurantError>;
