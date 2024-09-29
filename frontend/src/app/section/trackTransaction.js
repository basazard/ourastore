import { SearchIcon } from "../components/navbarIcon";

export default function FindTransaction() {
  return (
    <div className="py-12 px-4 sm:px-20 space-y-6">
      <div className="space-y-4">
        <h1 className="text-secondary-foreground text-4xl font-semibold">
          Cari pesanan kamu!
        </h1>
        <p className="text-secondary-foreground text-sm">
          Lacak transaksi kamu dengan cara memasukkan Nomor Invoice dibawah ini:
        </p>
      </div>
      <div>
        <form className="flex flex-col items-start">
          <p className="text-secondary-foreground text-xs">
            Nomor Invoice Kamu
          </p>
          <input
            className="mt-2 rounded-md p-2 text-xs w-1/2 bg-input placeholder:text-secondary-foreground
            text-secondary-foreground border-2 border-transparent focus:border-primary focus:outline-none"
            placeholder="OSXXXXXXXXXXXXXX"
          ></input>
          <button className="mt-4 rounded-md bg-primary px-2 py-2 flex flex-row items-center gap-1 hover:bg-primary/50 duration-500">
            <SearchIcon />
            <span className="text-secondary-foreground text-sm">
              Cari Transaksi
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}
