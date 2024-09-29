import Link from "next/link";
import Image from "next/image";

export function ServiceCard({ index, animate, service }) {
  return (
    <div
      className={`${animate ? "animate-slideUp" : ""} transition-all`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <Link href={`${service.id}`}>
        <div className="relative group w-auto sm:w-[192px] h-[188px] sm:h-[288px]">
          <div
            className="absolute z-10 inset-0 bg-muted rounded-2xl opacity-0 transform 
                  group-hover:opacity-40 group-hover:scale-105 duration-500"
          ></div>
          <Image
            width={192}
            height={288}
            src={service.imageUrl}
            alt={service.name}
            objectFit={true}
            className="ring-transparent ring-2 ring-offset-0 group-hover:ring-offset-2 
                    ring-offset-secondary group-hover:ring-primary rounded-2xl w-full
                    h-full object-cover transform group-hover:scale-105 duration-500 bg-transparent group-hover:bg-black"
          />
          <div
            className="absolute z-20 bottom-2 left-3 right-2 transform opacity-0 translate-y-4 
                  group-hover:opacity-100 group-hover:translate-y-0 transition-all ease-in-out duration-300"
          >
            <h1 className="text-secondary-foreground font-semibold text-xs sm:text-base text-left truncate">
              {service.name}
            </h1>
            <p className="text-secondary-foreground text-[8px] sm:text-xs font-light text-left">
              {service.owner}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
