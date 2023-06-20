//* Pages in Next.js are Server Components by default
//* http://localhost:3000/restaurant/[slug] / https://opentable.co.za/restaurant/[slug] - restaurantDetailsPage.html
import { PrismaClient } from '@prisma/client';
import { Fragment, ReactNode } from 'react';
import { notFound } from 'next/navigation';
import Description from './components/Description';
import Images from './components/Images';
import Rating from './components/Rating';
import ReservationCard from './components/ReservationCard';
import RestaurantNavBar from './components/RestaurantNavBar';
import Reviews from './components/Reviews';
import Title from './components/Title';

const prisma = new PrismaClient();

interface Restaurant {
  id: number;
  name: string;
  images: string[];
  description: string;
  slug: string;
}

const fetchRestaurantBySlug = async (slug: string): Promise<Restaurant> => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
      name: true,
      images: true,
      description: true,
      slug: true,
    },
  });

  if (restaurant === null) {
    notFound();
  }

  return restaurant;
};

export default async function RestaurantDetails({
  params,
}: {
  params: { slug: string };
}): Promise<ReactNode> {
  const restaurant = await fetchRestaurantBySlug(params.slug);
  //* console.log({ props }); -> {props: {params: {slug: 'coconut-lagoon-ottawa'}, searchParams: {}}}

  return (
    <Fragment>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <RestaurantNavBar slug={restaurant.slug} />
        <Title name={restaurant.name} />
        <Rating />
        <Description description={restaurant.description} />
        <Images images={restaurant.images} />
        <Reviews />
      </div>
      <ReservationCard />
    </Fragment>
  );
}
