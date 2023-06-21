export default function Description({
  description,
}: {
  description: string;
}): JSX.Element {
  return (
    <div className="mt-4">
      <p className="text-black text-lg font-light">{description}</p>
    </div>
  );
}

type Description = ReturnType<typeof Description>;
