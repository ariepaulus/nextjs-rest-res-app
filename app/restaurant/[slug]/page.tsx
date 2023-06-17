//* Pages in Next.js are Server Components by default
//* http://localhost:3000/restaurant/[shakeshack] / https://opentable.co.za/restaurant/[shakeshack] - restaurantDetailsPage.html
import { Fragment } from 'react';
import Description from './components/Description';
import Images from './components/Images';
import Rating from './components/Rating';
import ReservationCard from './components/ReservationCard';
import RestaurantNavBar from './components/RestaurantNavBar';
import Reviews from './components/Reviews';
import Title from './components/Title';

export default function RestaurantDetails() {
  return (
    <Fragment>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <RestaurantNavBar />
        <Title />
        <Rating />
        <Description />
        <Images />
        <Reviews />
      </div>
      <ReservationCard />
    </Fragment>
  );
}
