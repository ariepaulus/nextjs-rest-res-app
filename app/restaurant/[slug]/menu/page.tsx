//* Pages in Next.js are Server Components by default
//* http://localhost:3000/restaurant/[slug]/menu / https://opentable.co.za/restaurant/[slug]/menu - restaurantMenuPage.html
import { Item, PrismaClient } from '@prisma/client';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';

import Menu from '../components/Menu';
import RestaurantNavBar from '../components/RestaurantNavBar';

const prisma = new PrismaClient();

const fetchRestaurantMenu = async (slug: string): Promise<Item[]> => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      items: true,
    },
  });

  if (restaurant === null) {
    notFound();
  }

  return restaurant.items;
};

export default async function RestaurantMenu({
  params,
}: {
  params: { slug: string };
}): Promise<ReactNode> {
  const menu = await fetchRestaurantMenu(params.slug);

  return (
    <div className="bg-white w-[100%] rounded p-3 shadow">
      <RestaurantNavBar slug={params.slug} />
      <Menu menu={menu} />
    </div>
  );
}
