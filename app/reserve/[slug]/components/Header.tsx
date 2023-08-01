import Image from 'next/image';
import { format } from 'date-fns';

import {
  convertToDisplayTime,
  Time,
} from '../../../../utilities/convertToDisplayTime';

export default function Header({
  image,
  name,
  date,
  partySize,
}: {
  image: string;
  name: string;
  date: string;
  partySize: string;
}): JSX.Element {
  const [time] = date.split('T');

  return (
    <div>
      <h3 className="font-bold">You are almost done!</h3>
      <div className="mt-5 flex">
        <Image
          src={image}
          alt=""
          className="w-32 h-18 rounded"
          width={200}
          height={200}
          priority={true}
        />
        <div className="ml-4">
          <h1 className="text-3xl font-bold">{name}</h1>
          <div className="flex mt-3">
            <p className="mr-6">{format(new Date(date), 'ccc, LLL d')}</p>
            <p className="mr-6">{convertToDisplayTime(time as Time)}</p>
            <p className="mr-6">
              {partySize} {parseInt(partySize) === 1 ? 'person' : 'people'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

type Header = ReturnType<typeof Header>;
