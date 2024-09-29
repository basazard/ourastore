import Image from "next/image";
import { listImagePopular } from "../content-list/contentList";
import Link from "next/link";
import cardBackground from "../assets/bg-image.jpg";
import { PopularCard } from "../components/popularCard";

export default function PopularGames() {
  return (
    <section className="px-4 sm:px-20 py-4 sm:py-8 flex flex-col gap-y-6">
      <div>
        <h1 className="text-secondary-foreground">POPULER SEKARANG!</h1>
        <p className="text-sm text-secondary-foreground">
          Berikut adalah beberapa produk yang paling populer saat ini
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {listImagePopular.map((popular, index) => (
          <PopularCard
            popular={popular}
            index={index}
            cardBackground={cardBackground}
          />
        ))}
      </div>
    </section>
  );
}
