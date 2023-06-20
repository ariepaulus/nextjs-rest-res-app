//* Pages in Next.js are Server Components by default
//* http://localhost:3000/search / https://opentable.ca/search - searchPage.html
import { PrismaClient } from '@prisma/client';
import { Fragment, ReactNode } from 'react';
import Header from './components/Header';
import RestaurantCard from './components/RestaurantCard';
import SearchSideBar from './components/SearchSideBar';

const prisma = new PrismaClient();

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const fetchRestaurantsByCity = (city: string | undefined) => {
  const select = {
    id: true,
    name: true,
    main_image: true,
    price: true,
    cuisine: true,
    location: true,
    slug: true,
  };

  if (!city) return prisma.restaurant.findMany({ select });

  return prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          equals: city.toLowerCase(),
        },
      },
    },
    select,
  });
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const fetchLocations = async () => {
  return prisma.location.findMany();
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const fetchCuisines = async () => {
  return prisma.cuisine.findMany();
};

export default async function Search({
  searchParams,
}: {
  searchParams: { city: string };
}): Promise<ReactNode> {
  const restaurants = await fetchRestaurantsByCity(searchParams.city);
  const location = await fetchLocations();
  const cuisine = await fetchCuisines();

  return (
    <Fragment>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar
          locations={location}
          cuisines={cuisine}
          searchParams={{
            city: undefined,
            cuisine: undefined,
            price: undefined,
          }}
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
