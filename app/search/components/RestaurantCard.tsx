import Image from 'next/image';
import Link from 'next/link';
import Price from '../../components/Price';
import { Cuisine, Location, PRICE, Review } from '@prisma/client';
import { calculateReviewRatingAverage } from '../../../utilities/calculateReviewRatingAverage';
import Stars from '../../components/Stars';
interface Restaurant {
  id: number;
  name: string;
  main_image: string;
  price: PRICE;
  cuisine: Cuisine;
  location: Location;
  slug: string;
  reviews: Review[];
}

export default function RestaurantCard({
  restaurant,
}: {
  restaurant: Restaurant;
}): JSX.Element {
  const renderRatingText = () => {
    const rating = calculateReviewRatingAverage(restaurant.reviews);

    if (rating > 4) return 'Awesome';
    else if (rating <= 4 && rating > 3) return 'Good';
    else if (rating <= 3 && rating > 2) return 'Average';
    else if (rating <= 2 && rating > 0) return 'Poor';
    else return 'No reviews';
  };

  return (
    <div className="border-b flex pb-5 ml-4 text-black">
      <Image
        src={restaurant.main_image}
        alt={restaurant.name}
        className="w-44 h-36 rounded"
        width={200}
        height={200}
        priority={true}
      />
      <div className="pl-5">
        <h2 className="text-3xl">{restaurant.name}</h2>
        <div className="flex items-start">
          <div className="flex mb-2">
            <Stars reviews={restaurant.reviews} />
          </div>
          <p className="ml-2 text-sm">{renderRatingText()}</p>
        </div>
        <div className="mb-9">
          <div className="font-light flex text-reg">
            <Price price={restaurant.price} />
            <p className="mr-4 capitalize">{restaurant.cuisine.name}</p>
            <p className="mr-4 capitalize">{restaurant.location.name}</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href={`/restaurant/${restaurant.slug}}`}>
            View more information
          </Link>
        </div>
      </div>
    </div>
  );
}

type RestaurantCard = ReturnType<typeof RestaurantCard>;
