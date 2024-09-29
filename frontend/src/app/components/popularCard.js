import Link from "next/link";
import Image from "next/image";

export function PopularCard({ popular, cardBackground, index }) {
  return (
    <>
      <Link
        key={popular.name}
        href={popular.link}
        style={{
          backgroundImage: `url(${cardBackground.src})`,
          animationDelay: `${index * 0.1}s`,
        }}
        className="p-2 rounded-2xl animate-slideUp transition-all
          flex flex-row items-center ring-transparent ring-2 ring-offset-2 ring-offset-secondary hover:ring-primary"
      >
        <div className="sm:w-[65px] sm:h-[65px] w-[45px] h-[45px]">
          <Image
            src={popular.image}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col pl-2 justify-center">
          <h1 className="text-secondary-foreground text-[8px] sm:text-base">
            {popular.name}
          </h1>
          <h3 className="text-secondary-foreground text-[8px] sm:text-sm font-light">
            {popular.owner}
          </h3>
        </div>
      </Link>
    </>
  );
}
