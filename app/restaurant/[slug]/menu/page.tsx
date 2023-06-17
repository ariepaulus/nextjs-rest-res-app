//* Pages in Next.js are Server Components by default
//* http://localhost:3000/restaurant/[shakeshack]/menu / https://opentable.co.za/restaurant/[shakeshack]/menu - restaurantMenuPage.html
import Menu from '../components/Menu';
import RestaurantNavBar from '../components/RestaurantNavBar';

export default function RestaurantMenu() {
  return (
    <div className="bg-white w-[100%] rounded p-3 shadow">
      <RestaurantNavBar />
      <Menu />
    </div>
  );
}
