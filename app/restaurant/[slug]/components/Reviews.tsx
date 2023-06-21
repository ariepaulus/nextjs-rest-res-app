/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Review } from '@prisma/client';
import ReviewCard from './ReviewCard';

export default function Reviews({
  reviews,
}: {
  reviews: Review[];
}): JSX.Element {
  return (
    <div>
      <h1 className="text-black font-bold text-3xl mt-10 mb-7 borber-b pb-5">
        {reviews.length > 0 && (
          <p>
            What {reviews.length}{' '}
            {reviews.length === 1 ? 'person is ' : 'people are '}
            saying!
          </p>
        )}
      </h1>
      <div>
        {reviews.map(review => (
          <ReviewCard review={review} key={review.id} />
        ))}
      </div>
    </div>
  );
}

type Reviews = ReturnType<typeof Reviews>;
