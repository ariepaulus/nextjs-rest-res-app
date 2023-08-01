//* Pages in Next.js are Server Components by default
//* http://localhost:3000/reserve/[slug] / https://opentable.co.za/reserve/[slug]  - reservationPage.html
import { PrismaClient } from '@prisma/client';
import { notFound } from 'next/navigation';

import Form from './components/Form';
import Header from './components/Header';

const prisma = new PrismaClient();

const fetchRestaurantBySlug = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
  });

  if (!restaurant) {
    notFound();
  }

  return restaurant;
};

export default async function Reserve({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { date: string; partySize: string };
}): Promise<JSX.Element> {
  const restaurant = await fetchRestaurantBySlug(params.slug);

  return (
    <div className="border-t h-screen">
      <div className="py-9 w-3/5 m-auto text-black">
        <Header
          image={restaurant.main_image}
          name={restaurant.name}
          date={searchParams.date}
          partySize={searchParams.partySize}
        />
        <Form
          partySize={searchParams.partySize}
          slug={params.slug}
          date={searchParams.date}
        />
      </div>
    </div>
  );
}

type Reserve = ReturnType<typeof Reserve>;
