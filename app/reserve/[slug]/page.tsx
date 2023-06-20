//* Pages in Next.js are Server Components by default
//* http://localhost:3000/reserve/[slug] / https://opentable.co.za/reserve/[slug]  - reservationPage.html
import { ReactNode } from 'react';
import Form from './components/Form';
import Header from './components/Header';

export default function Reservation(): ReactNode {
  return (
    <div className="border-t h-screen">
      <div className="py-9 w-3/5 m-auto">
        <Header />
        <Form />
      </div>
    </div>
  );
}
