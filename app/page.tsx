//! This is a server component: instead of http-requests, there will be sql-requests
//* Pages in the app directory in Next.js are Server Components by default; in terms of performance, it is probably the best component that can be used; advantages: dependencies can stay on the server; better performance; access to the backend
//* Server-side rendering: the client (browser) does not receive an empty html-file, but an html-file for each particular page, containing all the components, different html-elements, and different classes, already loaded on the server, that it needs; the server sends it off the the client which does not need to parse it, but can go ahead and render it.
//* A general rule: a server component can render a client component, but a client component cannot render a server component.
//* Only exception to the rule: if a client component is rendering a server component that is passed in to the client as a 'children prop'
//* `app/page.tsx` is the UI for the `/` URL
//* http://localhost:3000 / https://opentable.ca - homepage.html
import Header from './components/Header';
import RestaurantCard from './components/RestaurantCard';
import { Cuisine, Location, PRICE, PrismaClient, Review } from '@prisma/client';

export interface RestaurantCardType {
  id: number;
  name: string;
  main_image: string;
  cuisine: Cuisine;
  location: Location;
  price: PRICE;
  slug: string;
  reviews: Review[];
}

const prisma = new PrismaClient();

const fetchRestaurants = async (): Promise<RestaurantCardType[]> => {
  const restaurants = await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      main_image: true,
      cuisine: true,
      location: true,
      price: true,
      slug: true,
      reviews: true,
    },
  });

  return restaurants;
};

export default async function Home(): Promise<JSX.Element> {
  const restaurants = await fetchRestaurants();

  //! Data is fetched in the backend - see terminal
  // console.log({ restaurants });

  return (
    <main>
      <Header />
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        {restaurants.map(restaurant => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </main>
  );
}

type Home = ReturnType<typeof Home>;

//* A summary of when to use a server component and when to use a client component:
//? Fetching data: server component
//? Accessing backend resources directly: server component
//? Keeping sensitive information on the server (access tokens, API keys, etc.): server component
//? Large dependencies: keep on server component
//? Adding interactivity and event listeners (onClick, onChange): client component
//? Using state and lifecycle effects, like useState, useReducer, useEffect: client component
//? Using browser-only APIs: client component
//? Using React Class components: client component
