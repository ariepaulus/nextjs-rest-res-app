//* Pages in Next.js are Server Components by default
//* http://localhost:3000/search / https://opentable.ca/search - searchPage.html
import { Fragment } from 'react';
import Header from './components/Header';
import RestaurantCard from './components/RestaurantCard';
import SearchSideBar from './components/SearchSideBar';

export default function Search() {
  return (
    <Fragment>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar />
        <div className="w-5/6">
          <RestaurantCard />
        </div>
      </div>
    </Fragment>
  );
}
