import { ReactNode } from 'react';

export default function Description({
  description,
}: {
  description: string;
}): ReactNode {
  return (
    <div className="mt-4">
      <p className="text-black text-lg font-light">{description}</p>
    </div>
  );
}
