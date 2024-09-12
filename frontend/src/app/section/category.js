import ffMax from "../assets/popular-games/ff-max.webp";
import ff from "../assets/popular-games/ff.webp";
import hok from "../assets/popular-games/hok.webp";
import mlPaket from "../assets/popular-games/ml-paket-irit.webp";
import ml from "../assets/popular-games/ml.webp";
import pubg from "../assets/popular-games/pubg.webp";

import Image from "next/image";

export default function Category() {
  const listCategory = [
    {
      name : "Top Up Games",
      listImage : [ff,ffMax,hok,mlPaket,ml,pubg]
    },
    {
      name : "Joki MLBB",
      listImage : [ff,ffMax,hok]
    },
    {
      name : "Joki HOK",
      listImage : [ff,ffMax,hok]
    },
    {
      name : "Pulsa & Data",
      listImage : [ff,ffMax,hok]
    },
    {
      name : "Voucher",
      listImage : [ff,ffMax,hok]
    },
    {
      name : "Tagihan",
      listImage : [ff,ffMax,hok]
    }
  ]
  return (
    <div className="px-20">
      <div className="flex flex-col gap-y-6">
        <div className="flex flex-row gap-4">
        {listCategory.map((category) => (
          <div key={category.name}>
            <button className="bg-muted px-3 py-2 rounded-lg hover:bg-primary duration-500">
              <span className="text-secondary-foreground text-sm">{category.name}</span>
            </button>
          </div>
        ))}
        </div>
        <div className="grid grid-cols-6 gap-4">        
          {listCategory[0].listImage.map((image, index) => (
            <div key={index}>
              <Image
                src={image}
                className="rounded-2xl w-[192px] h-[288px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}