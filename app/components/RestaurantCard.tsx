import Link from 'next/link';
import Image from 'next/image';

export default function RestaurantCard() {
  return (
    <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
      <Link href="/restaurant/milestones-grill">
        <Image
          src="https://resizer.otstatic.com/v2/photos/xlarge/3/41701449.webp"
          alt=""
          className="w-full h-36"
          width={200}
          height={200}
          priority={true}
        />
        <div className="p-1">
          <h3 className="text-black text-2xl font-bold mb-2">
            Milestones Grill
          </h3>
          <div className="flex items-start">
            <div className="text-black flex mb-2">*****</div>
            <p className="text-black ml-2">77 reviews</p>
          </div>
          <div className="flex text-reg capitalize">
            <p className="text-black mr-3 ">Mexican</p>
            <p className="text-black mr-3">$$$$</p>
            <p className="text-black mr-3">Toronto</p>
          </div>
          <p className="text-black font-bold text-sm mt-1">
            Booked 3 times today!
          </p>
        </div>
      </Link>
    </div>
  );
}
