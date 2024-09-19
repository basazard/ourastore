import { checkGame, listCategory } from "../content-list/contentList";
import Image from "next/image";
import cardBackground from "../assets/bg-image.jpg";

export default function GameHeader({ gameName }) {
  const game = checkGame(gameName, listCategory[0].listImage);
  return (
    <div className="border-b border-border/50">
      <div
        className="px-20 text-secondary-foreground bg-muted"
        style={{
          backgroundImage: `url(${cardBackground.src})`,
        }}
      >
        <div className="flex flex-row max-h-[160px] items-center gap-4">
          <div className="p-2">
            <Image
              src={game.image}
              className="object-cover w-48 h-48 rounded-2xl -translate-y-1/2"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold">{game.name.toUpperCase()}</span>
            <span className="text-base font-normal">{game.owner}</span>
            <div className="mt-6 flex flex-row gap-6 text-sm font-extralight">
              <div className="flex flex-row items-center gap-2">
                <svg
                  className="h-[20px]"
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#F9DB78"
                >
                  <g>
                    <rect fill="none" height="24" width="24" />
                  </g>
                  <g>
                    <g>
                      <path d="M14.69,2.21L4.33,11.49c-0.64,0.58-0.28,1.65,0.58,1.73L13,14l-4.85,6.76c-0.22,0.31-0.19,0.74,0.08,1.01h0 c0.3,0.3,0.77,0.31,1.08,0.02l10.36-9.28c0.64-0.58,0.28-1.65-0.58-1.73L11,10l4.85-6.76c0.22-0.31,0.19-0.74-0.08-1.01l0,0 C15.47,1.93,15,1.92,14.69,2.21z" />
                    </g>
                  </g>
                </svg>
                <span>Proses Cepat</span>
              </div>
              <div className="flex flex-row items-center gap-2">
                <svg
                  className="h-[24px]"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#2854C5"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M19 14v4h-2v-4h2M7 14v4H6c-.55 0-1-.45-1-1v-3h2m5-13c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h4v1h-7v2h6c1.66 0 3-1.34 3-3V10c0-4.97-4.03-9-9-9z" />
                </svg>
                <span>Layanan Chat 24/7</span>
              </div>
              <div className="flex flex-row items-center gap-2">
                <svg
                  className="h-[24px]"
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#78A75A"
                >
                  <g>
                    <rect fill="none" height="24" width="24" />
                  </g>
                  <g>
                    <path d="M19,3H5L2,9l10,12L22,9L19,3z M9.62,8l1.5-3h1.76l1.5,3H9.62z M11,10v6.68L5.44,10H11z M13,10h5.56L13,16.68V10z M19.26,8 h-2.65l-1.5-3h2.65L19.26,8z M6.24,5h2.65l-1.5,3H4.74L6.24,5z" />
                  </g>
                </svg>
                <span>Diamonds</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
