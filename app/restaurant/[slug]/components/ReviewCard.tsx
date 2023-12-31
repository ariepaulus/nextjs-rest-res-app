/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Review } from '@prisma/client';
import Stars from '../../../components/Stars';

export default function ReviewCard({
  review,
}: {
  review: Review;
}): JSX.Element {
  return (
    <div className="border-b pb-7 mb-7">
      <div className="flex">
        <div className="w-1/6 flex-col items-center">
          <div className="rounded-full bg-blue-400 w-16 h-16 flex items-center justify-center">
            <h2 className="text-white text-2xl uppercase">
              {review.first_name[0]}
              {review.last_name[0]}
            </h2>
          </div>
          <p className="text-black mt-2">
            {review.first_name} {review.last_name}
          </p>
        </div>
        <div className="ml-10 w-5/6">
          <div className="flex items-center">
            <div className="flex mr-5 text-black">
              <Stars rating={review.rating} reviews={[]} />
            </div>
          </div>
          <div className="mt-5">
            <p className="text-black text-lg">{review.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

type ReviewCard = ReturnType<typeof ReviewCard>;
