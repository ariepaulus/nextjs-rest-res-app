export default function Title({ name }: { name: string }): JSX.Element {
  return (
    <div className="mt-4 border-b pb-6">
      <h1 className="text-black font-bold text-6xl">{name}</h1>
    </div>
  );
}

type Title = ReturnType<typeof Title>;
