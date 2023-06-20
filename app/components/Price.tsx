import { PRICE } from '@prisma/client';
import { Fragment } from 'react';

export default function Price({ price }: { price: PRICE }): JSX.Element {
  const renderPrice = (): JSX.Element => {
    if (price === PRICE.CHEAP) {
      return (
        <Fragment>
          <span className="text-black">$$</span>
          <span className="text-gray-400">$$</span>
        </Fragment>
      );
    } else if (price === PRICE.REGULAR) {
      return (
        <Fragment>
          <span className="text-black">$$$</span>
          <span className="text-gray-400">$</span>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <span className="text-black">$$$$</span>
        </Fragment>
      );
    }
  };

  return <p className="flex mr-3">{renderPrice()}</p>;
}
