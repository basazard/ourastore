import Image from "next/image";
import popular1 from "../assets/popular-games/ml.webp"
import popular2 from "../assets/popular-games/ml-paket-irit.webp"
import popular3 from "../assets/popular-games/pubg.webp"
import popular4 from "../assets/popular-games/ff.webp"
import popular5 from "../assets/popular-games/ff-max.webp"
import popular6 from "../assets/popular-games/hok.webp"
import popular7 from "../assets/popular-games/joki-rank-ecer.webp"
import popular8 from "../assets/popular-games/joki-rank-paket.webp"


export default function PopularGames() {
  const listImagePopular = [
    {
      image : popular1,
      name : "Mobile Legends",
      owner : "Moonton"
    },
    {
      image : popular2,
      name : "Mobile Legends Paket Irit",
      owner : "Moonton"
      
    },
    {
      image : popular3,
      name : "PUBG Mobile",
      owner : "Tencent Games"
    },
    {
      image : popular4,
      name : "Free Fire",
      owner : "Garena"
    },
    {
      image : popular5,
      name : "Free Fire Max",
      owner : "Garena"
    },
    {
      image : popular6,
      name : "Honor of Kings",
      owner : "Tencent Games"
    },
    {
      image : popular7,
      name : "Joki Rank Eceran",
      owner : "Oura Store"
    },
    {
      image : popular8,
      name : "Joki Rank Paketan",
      owner : "Oura Store"
    },
  ]
  return(
    <section className="px-20 py-8 flex flex-col gap-y-6">
      <div>
        <h1 className="text-secondary-foreground">POPULER SEKARANG!</h1>
        <p className="text-sm text-secondary-foreground">Berikut adalah beberapa produk yang paling populer saat ini</p>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {listImagePopular.map((popular) => (
          <div key={popular.name} className="p-1 rounded-2xl bg-muted flex flex-row border-2 border-transparent hover:border-primary">
            <div className="w-[65px] h-[65px]">
            <Image
              src={popular.image}
              className="rounded-lg object-cover w-full h-full"
            />
            </div>
            <div className="flex flex-col pl-2 justify-center">
              <h1 className="text-secondary-foreground">{popular.name}</h1>
              <h3 className="text-secondary-foreground text-sm font-light">{popular.owner}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}