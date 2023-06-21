import { Item } from '@prisma/client';
import MenuCard from './MenuCard';

export default function Menu({ menu }: { menu: Item[] }): JSX.Element {
  return (
    <main className="bg-white mt-5">
      <div>
        <div className="mt-4 pb-1 mb-1">
          <h1 className="font-bold text-4xl text-black">Menu</h1>
        </div>
        {menu.length ? (
          <div className="flex flex-wrap justify-between">
            {menu.map(item => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap justify-between">
            <p>This restaurant does not have a menu yet!</p>
          </div>
        )}
      </div>
    </main>
  );
}

type Menu = ReturnType<typeof Menu>;
