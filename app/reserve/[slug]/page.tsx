//* Pages in Next.js are Server Components by default
//* http://localhost:3000/reserve/[shakeshack] / https://opentable.co.za/reserve/[shakeshack]  - reservationPage.html
import Form from './components/Form';
import Header from './components/Header';

export default function Reservation() {
  return (
    <div className="border-t h-screen">
      <div className="py-9 w-3/5 m-auto">
        <Header />
        <Form />
      </div>
    </div>
  );
}
