'use client';
import { CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';

import useReservation from '../../../../hooks/useReservation';

export default function Form({
  slug,
  date,
  partySize,
}: {
  slug: string;
  date: string;
  partySize: string;
}): JSX.Element {
  const [inputs, setInputs] = useState({
    bookerFirstName: '',
    bookerLastName: '',
    bookerPhone: '',
    bookerEmail: '',
    bookerOccasion: '',
    bookerRequest: '',
  });
  const [day, time] = date.split('T');
  const [disabled, setDisabled] = useState(true);
  const [didBook, setDidBook] = useState(false);
  const { error, loading, createReservation } = useReservation();

  useEffect(() => {
    if (
      inputs.bookerFirstName &&
      inputs.bookerLastName &&
      inputs.bookerEmail &&
      inputs.bookerPhone
    ) {
      return setDisabled(false);
    }
    return setDisabled(true);
  }, [inputs]);

  const changeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };

  const clickHandler = async () => {
    const booking = await createReservation({
      slug,
      partySize,
      time,
      day,
      bookerFirstName: inputs.bookerFirstName,
      bookerLastName: inputs.bookerLastName,
      bookerEmail: inputs.bookerEmail,
      bookerOccasion: inputs.bookerOccasion,
      bookerPhone: inputs.bookerPhone,
      bookerRequest: inputs.bookerRequest,
      setDidBook,
    });
  };

  return (
    <div className="mt-10 flex flex-wrap justify-between w-[660px]">
      {didBook ? (
        <div>
          <h1>Your booking was successful!</h1>
          <p>Enjoy your reservation!</p>
        </div>
      ) : (
        <>
          <input
            type="text"
            className="border rounded p-3 w-80 mb-4  bg-white"
            placeholder="First name"
            value={inputs.bookerFirstName}
            name="bookerFirstName"
            onChange={changeInputHandler}
          />
          <input
            type="text"
            className="border rounded p-3 w-80 mb-4  bg-white"
            value={inputs.bookerLastName}
            placeholder="Last name"
            name="bookerLastName"
            onChange={changeInputHandler}
          />
          <input
            type="text"
            className="border rounded p-3 w-80 mb-4  bg-white"
            value={inputs.bookerPhone}
            placeholder="Phone number"
            name="bookerPhone"
            onChange={changeInputHandler}
          />
          <input
            type="text"
            className="border rounded p-3 w-80 mb-4  bg-white"
            value={inputs.bookerEmail}
            placeholder="Email"
            name="bookerEmail"
            onChange={changeInputHandler}
          />
          <input
            type="text"
            className="border rounded p-3 w-80 mb-4  bg-white"
            placeholder="Occasion (optional)"
            value={inputs.bookerOccasion}
            name="bookerOccasion"
            onChange={changeInputHandler}
          />
          <input
            type="text"
            className="border rounded p-3 w-80 mb-4  bg-white"
            placeholder="Requests (optional)"
            value={inputs.bookerRequest}
            name="bookerRequest"
            onChange={changeInputHandler}
          />
          <button
            disabled={disabled || loading}
            className="bg-red-600 w-full p-3 text-white font-bold rounded disabled:bg-gray-300"
            onClick={clickHandler}
          >
            {loading ? (
              <CircularProgress color="inherit" />
            ) : (
              'Complete reservation!'
            )}
          </button>
          <p className="mt-4 text-sm">
            By clicking “Complete reservation” you agree to the OpenTable Terms
            of Use and Privacy Policy. Standard text message rates may apply.
            You may opt out of receiving text messages at any time.
          </p>
        </>
      )}
    </div>
  );
}

type Form = ReturnType<typeof Form>;
