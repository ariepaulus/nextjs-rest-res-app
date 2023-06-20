import Link from 'next/link';
import { ReactNode } from 'react';

export default function RestaurantNavBar({
  slug,
}: {
  slug: string;
}): ReactNode {
  return (
    <nav className="flex text-reg border-p pb-2">
      <Link href={`/restaurant/${slug}`} className="text-black mr-7">
        Overview
      </Link>
      <Link href={`/restaurant/${slug}/menu`} className="text-black mr-7">
        Menu
      </Link>
    </nav>
  );
}
