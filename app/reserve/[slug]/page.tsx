//* Pages in Next.js are Server Components by default
//* http://localhost:3000/reserve/[shakeshack] / https://opentable.co.za/reserve/[shakeshack]  - reservationPage.html
import NavBar from '../../components/NavBar';
import Form from './components/Form';
import Header from './components/Header';

export default function Reservation() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen text-black">
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBar />
        <div className="border-t h-screen">
          <div className="py-9 w-3/5 m-auto">
            <Header />
            <Form />
          </div>
        </div>
      </main>
    </main>
  );
}
