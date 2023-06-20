import Link from 'next/link';
import Image from 'next/image';
import { RestaurantCardType } from '../page';
import Price from './Price';

interface Props {
  restaurant: RestaurantCardType;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function RestaurantCard({ restaurant }: Props) {
  return (
    <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
      <Link href={`/restaurant/${restaurant.slug}`}>
        <Image
          src={restaurant.main_image}
          alt={restaurant.name}
          className="w-full h-36"
          width={200}
          height={200}
          priority={true}
        />
        <div className="p-1">
          <h3 className="text-black text-2xl font-bold mb-2">
            {restaurant.name}
          </h3>
          <div className="flex items-start">
            <div className="text-black flex mb-2">*****</div>
            <p className="text-black ml-2">77 reviews</p>
          </div>
          <div className="flex text-reg capitalize">
            <p className="text-black mr-3 ">{restaurant.cuisine.name}</p>
            <Price price={restaurant.price} />
            <p className="text-black mr-3">{restaurant.location.name}</p>
          </div>
          <p className="text-black font-bold text-sm mt-1">
            Booked 3 times today!
          </p>
        </div>
      </Link>
    </div>
  );
}
