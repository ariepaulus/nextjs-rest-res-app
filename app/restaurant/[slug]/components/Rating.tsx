import { ReactNode } from 'react';

export default function Rating(): ReactNode {
  return (
    <div className="flex items-end">
      <div className="ratings mt-2 flex items-center">
        <p className="text-black">*****</p>
        <p className="text-black text-reg ml-3">4.9</p>
      </div>
      <div>
        <p className="text-black ml-4">600 reviews</p>
      </div>
    </div>
  );
}
