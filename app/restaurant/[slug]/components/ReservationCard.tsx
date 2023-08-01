'use client';
import { useState } from 'react';
import Link from 'next/link';
import DatePicker from 'react-datepicker';
import { CircularProgress } from '@mui/material';

import { partySize as partySizes, times } from '../../../../data';
import useAvailability from '../../../../hooks/useAvailability';
import {
  convertToDisplayTime,
  Time,
} from '../../../../utilities/convertToDisplayTime';

export default function ReservationCard({
  openTime,
  closeTime,
  slug,
}: {
  openTime: string;
  closeTime: string;
  slug: string;
}): JSX.Element {
  const { data, loading, error, fetchAvailability } = useAvailability();
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [time, setTime] = useState(openTime);
  const [partySize, setPartySize] = useState('2');
  const [day, setDay] = useState(new Date().toISOString().split('T')[0]);

  const dateChangeHandler = (date: Date | null) => {
    if (date) {
      setDay(date.toISOString().split('T')[0]);
      return setSelectedDate(date);
    }

    return setSelectedDate(null);
  };

  const onClickHandler = () => {
    fetchAvailability({
      slug,
      partySize,
      day,
      time,
    });
  };

  const filterTimesByRestaurantOpenWindow = () => {
    // for Vivaan:
    // openTime = 14:30:00.000Z 2:30PM
    // closeTime = 21:30:00.000Z 9:30PM
    const timesWithinInWindow: typeof times = [];

    let isWithinWindow = false;

    times.forEach(time => {
      if (time.time === openTime) {
        isWithinWindow = true;
      }
      if (isWithinWindow) {
        timesWithinInWindow.push(time);
      }
      if (time.time === closeTime) {
        isWithinWindow = false;
      }
    });

    return timesWithinInWindow;
  };

  return (
    <div className="w-[27%] relative ">
      <div className="fixed w-[15%] bg-white rounded p-3 shadow">
        <div className="text-center border-b pb-2 font-bold">
          <h4 className="mr-7 text-black text-lg">Make a reservation</h4>
        </div>
        <div className="my-3 flex flex-col">
          <label htmlFor="" className="text-black">
            Party size
          </label>
          <select
            name=""
            id=""
            className="py-3 border-b font-light bg-white text-black"
            value={partySize}
            onChange={event => setPartySize(event.target.value)}
          >
            {partySizes.map((size, index) => (
              <option key={index} value={size.value}>
                {size.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-between text-black bg-white">
          <div className="flex flex-col w-[48%]">
            <label htmlFor="" className="text-black bg-white">
              Date
            </label>
            <DatePicker
              selected={selectedDate}
              onChange={dateChangeHandler}
              className="py-3 border-b font-light text-reg text-black bg-white w-28"
              dateFormat="MMMM d"
              wrapperClassName="w-[48%]"
            />
          </div>
          <div className="flex flex-col w-[48%] text-black bg-white">
            <label htmlFor="">Time</label>
            <select
              name=""
              id=""
              className="py-3 border-b bg-white font-light"
              value={time}
              onChange={event => setTime(event.target.value)}
            >
              {filterTimesByRestaurantOpenWindow().map((time, index) => (
                <option key={index} value={time.time}>
                  {time.displayTime}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-5">
          <button
            className="bg-red-600 rounded w-full px-4 text-white font-bold h-16"
            onClick={onClickHandler}
            disabled={loading}
          >
            {loading ? <CircularProgress color="inherit" /> : 'Find a Time'}
          </button>
        </div>
        {data && data.length ? (
          <div className="mt-4">
            <p className="text-reg text-black">Select a Time</p>
            <div className="flex flex-wrap mt-2">
              {data.map((time, index) => {
                return time.available ? (
                  <Link
                    href={`/reserve/${slug}?date=${day}T${time.time}&partySize=${partySize}`}
                    className="bg-red-600 cursor-pointer p-2 w-24 text-center text-white mb-3 rounded mr-3"
                    key={index}
                  >
                    <p className="text-sm font-bold">
                      {convertToDisplayTime(time.time as Time)}
                    </p>
                  </Link>
                ) : (
                  <p className="bg-gray-300 p-2 w-24 mb-3 rounded mr-3"></p>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

type ReservationCard = ReturnType<typeof ReservationCard>;
