import Image from 'next/image';

import { Review } from '@prisma/client';
import { calculateReviewRatingAverage } from '../../utilities/calculateReviewRatingAverage';
import fullStar from '../../public/icons/full-star.png';
import halfStar from '../../public/icons/half-star.png';
import emptyStar from '../../public/icons/empty-star.png';

export default function Stars({
  reviews,
  rating,
}: {
  reviews: Review[];
  rating?: number;
}): JSX.Element {
  const reviewRating = rating || calculateReviewRatingAverage(reviews);

  const renderStars = () => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      const difference = parseFloat((reviewRating - i).toFixed(1));

      if (difference >= 1) stars.push(fullStar);
      else if (difference < 1 && difference > 0) {
        if (difference <= 0.2) stars.push(emptyStar);
        else if (difference > 0.2 && difference <= 0.6) stars.push(halfStar);
        else stars.push(fullStar);
      }
    }

    return stars.map((star, index) => {
      return (
        <Image src={star} key={index} alt="star" className="w-4 h-4 mr-1" />
      );
    });
  };

  return <div className="flex items-center">{renderStars()}</div>;
}

type Stars = ReturnType<typeof Stars>;
