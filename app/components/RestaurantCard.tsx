import Link from 'next/link';
import Image from 'next/image';

import { RestaurantCardType } from '../page';
import Price from './Price';
import Stars from './Stars';

interface Props {
  restaurant: RestaurantCardType;
}

export default function RestaurantCard({ restaurant }: Props): JSX.Element {
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
            <Stars reviews={restaurant.reviews} />
            <p className="text-black ml-2">
              {restaurant.reviews?.length} review
              {restaurant.reviews?.length === 1 ? '' : 's'}
            </p>
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

type RestaurantCard = ReturnType<typeof RestaurantCard>;
