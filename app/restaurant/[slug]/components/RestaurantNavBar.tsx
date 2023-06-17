import Link from 'next/link';

export default function RestaurantNavBar() {
  return (
    <nav className="flex text-reg border-p pb-2">
      <Link href="/restaurant/milestone-grill" className="text-black mr-7">
        Overview
      </Link>
      <Link href="/restaurant/milestone-grill/menu" className="text-black mr-7">
        Menu
      </Link>
    </nav>
  );
}
