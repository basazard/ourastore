import { mlbbSpecialItems } from "../content-list/contentList";
import Image from "next/image";

export default function GameItems() {
  return (
    <div className="text-secondary-foreground bg-card rounded-md">
      <div className="flex flex-row gap-4 items-center">
        <div className="flex flex-row items-center justify-center h-10 w-10 rounded-tl-md bg-primary">
          <span>2</span>
        </div>
        <div>
          <span className="text-sm">Pilih Nominal</span>
        </div>
      </div>
      <div className="bg-muted p-4 rounded-b-md">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-sm">Special Items</span>
            <div className="grid grid-cols-3 gap-2">
              {mlbbSpecialItems.map((item, index) => (
                <ItemCard key={index} items={item} />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-sm">Top Up Instant</span>
            <div className="grid grid-cols-3 gap-2">
              {mlbbSpecialItems.map((item, index) => (
                <ItemCard key={index} items={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ItemCard({ items }) {
  return (
    <div className="bg-order-variant p-4 rounded-2xl">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col gap-2 text-secondary font-semibold text-xs">
          <span>{items.name}</span>
          <span>{items.price}</span>
        </div>
        <div className="item">
          <Image src={items.image} className="w-[1.75rem] h-[1.75rem]" />
        </div>
      </div>
    </div>
  );
}
