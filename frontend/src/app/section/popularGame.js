import Image from "next/image";
import { listImagePopular } from "../content-list/contentList";
import Link from "next/link";
import cardBackground from "../assets/bg-image.jpg";

export default function PopularGames() {
  return (
    <section className="px-20 py-8 flex flex-col gap-y-6">
      <div>
        <h1 className="text-secondary-foreground">POPULER SEKARANG!</h1>
        <p className="text-sm text-secondary-foreground">
          Berikut adalah beberapa produk yang paling populer saat ini
        </p>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {listImagePopular.map((popular, index) => (
          <Link
            key={popular.name}
            href={popular.link}
            style={{
              backgroundImage: `url(${cardBackground.src})`,
              animationDelay: `${index * 0.1}s`,
            }}
            className="p-2 rounded-2xl animate-slideUp transition-all
          flex flex-row ring-transparent ring-2 ring-offset-2 ring-offset-secondary hover:ring-primary"
          >
            <div className="w-[65px] h-[65px]">
              <Image
                src={popular.image}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col pl-2 justify-center">
              <h1 className="text-secondary-foreground">{popular.name}</h1>
              <h3 className="text-secondary-foreground text-sm font-light">
                {popular.owner}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
