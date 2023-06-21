import { Review } from '@prisma/client';
import { calculateReviewRatingAverage } from '../../../../utilities/calculateReviewRatingAverage';
import Stars from '../../../components/Stars';

export default function Rating({
  reviews,
}: {
  reviews: Review[];
}): JSX.Element {
  return (
    <div className="flex items-end">
      <div className="ratings mt-2 flex items-center">
        <Stars reviews={reviews} />
        <p className="text-black text-reg ml-3">
          {calculateReviewRatingAverage(reviews).toFixed(1)}
        </p>
      </div>
      <div>
        <p className="text-black ml-4">
          {reviews.length} Review{reviews.length === 1 ? '' : 's'}
        </p>
      </div>
    </div>
  );
}

type Rating = ReturnType<typeof Rating>;
