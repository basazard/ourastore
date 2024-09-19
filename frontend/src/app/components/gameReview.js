export default function GameReview() {
  const ratings = [5, 4, 3, 2, 1];
  return (
    <div className="text-secondary-foreground bg-card rounded-md">
      <div className="flex flex-row items-center gap-4">
        <div className="flex items-center h-10 w-10 justify-center bg-primary rounded-tl-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="18px"
            viewBox="0 0 24 24"
            width="18px"
            fill="#FFFFFF"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M12 7.13l.97 2.29.47 1.11 1.2.1 2.47.21-1.88 1.63-.91.79.27 1.18.56 2.41-2.12-1.28-1.03-.64-1.03.62-2.12 1.28.56-2.41.27-1.18-.91-.79-1.88-1.63 2.47-.21 1.2-.1.47-1.11.97-2.27M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z" />
          </svg>
        </div>
        <div>
          <span className="text-sm">Ulasan</span>
        </div>
      </div>
      <div className="bg-muted px-3 py-4 rounded-b-md">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row justify-center items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="48px"
              viewBox="0 0 24 24"
              width="48px"
              fill="#F9DB78"
            >
              <g>
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M0 0h24v24H0V0z" fill="none" />
              </g>
              <g>
                <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
              </g>
            </svg>
            <span>
              <span className="text-5xl">4.99</span>/ 5.0
            </span>
          </div>

          <span className="text-xs font-extralight text-center">
            Pelanggan merasa puas dengan produk ini. Dari 3.19jt ulasan.
          </span>
          <div>
            <div className="flex flex-col text-xs font-extralight gap-1">
              {ratings.map((rating) => (
                <div key={rating} className="flex flex-row gap-2 items-center">
                  <span className="w-3 text-center">{rating}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    enable-background="new 0 0 24 24"
                    height="16px"
                    viewBox="0 0 24 24"
                    width="16px"
                    fill="#A9C3C8"
                  >
                    <g>
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path d="M0 0h24v24H0V0z" fill="none" />
                    </g>
                    <g>
                      <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
                    </g>
                  </svg>
                  <div className="w-[80%] bg-secondary-foreground rounded-md h-[12px]"></div>
                  <span>0</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <span className="text-xs font-extralight">
              Apakah kamu menyukai produk ini? Beri tahu kami dan calon pembeli
              lainnya tentang pengalamanmu.
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <div className="border-t w-full border-card"></div>
            <div className="flex flex-row justify-between">
              <div className="text-[10px] font-extralight flex flex-col gap-1">
                <span className="font-semibold">628******772</span>
                <span>113 Diamonds (102+11 Bonus)</span>
                <span className="italic">“Proses cepat banget”</span>
              </div>
              <div className="flex flex-row">
                {ratings.map((rating, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    enable-background="new 0 0 24 24"
                    height="16px"
                    viewBox="0 0 24 24"
                    width="16px"
                    fill="#FFFF55"
                  >
                    <g>
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path d="M0 0h24v24H0V0z" fill="none" />
                    </g>
                    <g>
                      <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
                    </g>
                  </svg>
                ))}
              </div>
            </div>
            <div className="border-t w-full border-card"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
