/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
//* Pages in Next.js are Server Components by default
//* http://localhost:3000/search / https://opentable.ca/search - searchPage.html
import { Cuisine, PRICE, PrismaClient, Location } from '@prisma/client';
import { Fragment } from 'react';
import Header from './components/Header';
import RestaurantCard from './components/RestaurantCard';
import SearchSideBar from './components/SearchSideBar';

const prisma = new PrismaClient();

interface SearchParams {
  city?: string;
  cuisine?: string;
  price?: PRICE;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const fetchRestaurantsByCity = (searchParams: SearchParams) => {
  const where: any = {};

  if (searchParams.city) {
    const location = {
      name: {
        equals: searchParams.city.toLowerCase(),
      },
    };
    where.location = location;
  }
  if (searchParams.cuisine) {
    const cuisine = {
      name: {
        equals: searchParams.cuisine.toLowerCase(),
      },
    };
    where.cuisine = cuisine;
  }
  if (searchParams.price) {
    const price = {
      equals: searchParams.price,
    };
    where.price = price;
  }

  const select = {
    id: true,
    name: true,
    main_image: true,
    price: true,
    cuisine: true,
    location: true,
    slug: true,
    reviews: true,
  };

  return prisma.restaurant.findMany({
    where,
    select,
  });
};

type fetchRestaurantsByCity = ReturnType<typeof fetchRestaurantsByCity>;

const fetchLocations = async (): Promise<Location[]> => {
  return prisma.location.findMany();
};

const fetchCuisines = async (): Promise<Cuisine[]> => {
  return prisma.cuisine.findMany();
};

export default async function Search({
  searchParams,
}: {
  searchParams: { city?: string; cuisine?: string; price?: PRICE };
}): Promise<JSX.Element> {
  const restaurants = await fetchRestaurantsByCity(searchParams);
  const location = await fetchLocations();
  const cuisine = await fetchCuisines();

  return (
    <Fragment>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar
          locations={location}
          cuisines={cuisine}
          searchParams={searchParams}
        />
        <div className="w-5/6">
          {restaurants.length ? (
            <>
              {restaurants.map(restaurant => (
                <RestaurantCard restaurant={restaurant} key={restaurant.id} />
              ))}
            </>
          ) : (
            <p>Sorry! We could not found any restaurants in this area.</p>
          )}
        </div>
      </div>
    </Fragment>
  );
}

type Search = ReturnType<typeof Search>;
