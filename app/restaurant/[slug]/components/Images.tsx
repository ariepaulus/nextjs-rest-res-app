import Image from 'next/image';
import { ReactNode } from 'react';

export default function Images({ images }: { images: string[] }): ReactNode {
  return (
    <div>
      <h1 className="font-bold text-black text-3xl mt-10 mb-7 border-b pb-5">
        {images.length} photo{images.length > 1 ? 's' : ''}
      </h1>
      <div className="flex flex-wrap">
        {images.map((image, index) => (
          <Image
            key={index}
            className="w-56 h-44 mr-1 mb-1"
            src={image}
            alt="Restaurant picture gallery"
            width={200}
            height={200}
            priority={true}
          />
        ))}
      </div>
    </div>
  );
}
